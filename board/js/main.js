
const sheetdbURL = "https://sheetdb.io/api/v1/pi0aipqod90md?sheet=工作表2";
const patchURL = "https://sheetdb.io/api/v1/pi0aipqod90md";
let allData = [];
let activityColumns = [];
let activityJoiners = {};

fetch(sheetdbURL)
  .then(res => res.json())
  .then(data => {
    allData = data;
    detectActivityColumns(data[0]);
    renderTable(data);
    enableSearch();
  });

function detectActivityColumns(row) {
  activityColumns = [];
  Object.keys(row).forEach(key => {
    const match = key.match(/(.+)\s(\d+)$/);
    if (match) {
      activityColumns.push({ key, name: match[1], fee: parseInt(match[2]) });
    }
  });
}

function calculateTotal(row) {
  return activityColumns.reduce((sum, act) => {
    const joined = row[act.key];
    if (joined && joined.trim() !== "") sum += act.fee;
    return sum;
  }, 0);
}

function renderTable(data) {
  const thead = document.getElementById("tableHead");
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  activityJoiners = {};
  activityColumns.forEach(col => activityJoiners[col.name] = []);
  data.forEach(row => {
    activityColumns.forEach(col => {
      if (row[col.key] && row[col.key].trim() !== "") {
        activityJoiners[col.name].push(row);
      }
    });
  });

  const keys = ["編號", "班級", "座號", "姓名", ...activityColumns.map(col => col.name), "收費", "操作"];
  const headRow = document.createElement("tr");
  keys.forEach(k => {
    const th = document.createElement("th");
    th.textContent = k;
    headRow.appendChild(th);
  });
  thead.innerHTML = "";
  thead.appendChild(headRow);

  data.forEach(row => {
    const tr = document.createElement("tr");
    const currentValues = {};
    const isSaved = !!(row["收費"] && parseInt(row["收費"]) === calculateTotal(row));

    keys.forEach(k => {
      const td = document.createElement("td");

      if (k === "操作") {
        const btn = document.createElement("button");
        btn.textContent = "💾 儲存";
        btn.className = "btn btn-sm btn-primary";
        if (isSaved) {
          btn.disabled = true;
          btn.classList.add("btn-secondary");
          btn.textContent = "✅ 已儲存";
        } else {
          btn.onclick = () => saveRow(row.編號, currentValues, btn);
        }
        td.appendChild(btn);

      } else if (k === "收費") {
        const total = calculateTotal(row);
        td.classList.add("total-fee");
        td.textContent = total;
        currentValues["收費"] = total;

      } else if (["編號"].includes(k)) {
        td.textContent = row[k];
        currentValues[k] = row[k];

      } else if (["班級", "座號", "姓名"].includes(k)) {
        const input = document.createElement("input");
        input.type = "text";
        input.value = row[k] || "";
        input.className = "form-control form-control-sm";
        input.readOnly = !!(row[k] && row[k].trim() !== "");
        if (input.readOnly) input.classList.add("bg-light");
        input.oninput = () => currentValues[k] = input.value.trim();
        currentValues[k] = row[k] || "";
        td.appendChild(input);

      } else {
        const col = activityColumns.find(c => c.name === k);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = !!row[col.key];
        const limit = (col.name === "石鹿登山口進") ? 10 : 30;
        const joinedCount = activityJoiners[col.name].length;

        if (checkbox.checked) {
          td.classList.add("highlight");
        }
        if ((row[col.key] && row[col.key].trim() !== "") || joinedCount >= limit || isSaved) {
          checkbox.disabled = true;
          if (!checkbox.checked && joinedCount >= limit) {
            td.classList.add("full");
          }
        }

        checkbox.onchange = () => {
          currentValues[col.key] = checkbox.checked ? "✓" : "";
          td.classList.toggle("highlight", checkbox.checked);
          updateFeeDisplay(tr, currentValues);
        };

        currentValues[col.key] = row[col.key];
        td.appendChild(checkbox);
      }

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  updateQuotaStats();
}

function updateFeeDisplay(tr, currentValues) {
  const fee = activityColumns.reduce((sum, col) => {
    if (currentValues[col.key]) sum += col.fee;
    return sum;
  }, 0);
  const feeTd = tr.querySelector(".total-fee");
  if (feeTd) {
    feeTd.textContent = fee;
    currentValues["收費"] = fee;
  }
}

function saveRow(id, rowData, button) {
  fetch(`${patchURL}/編號/${id}?sheet=工作表2`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: rowData })
  })
    .then(res => res.json())
    .then(() => {
      button.textContent = "✅ 已儲存";
      button.disabled = true;
      button.classList.remove("btn-primary");
      button.classList.add("btn-secondary");
    })
    .catch(err => alert("❌ 儲存失敗：" + err));
}

function enableSearch() {
  const input = document.getElementById("searchInput");
  input.addEventListener("input", () => {
    const keyword = input.value.trim().toLowerCase();
    const filtered = allData.filter(row =>
      Object.values(row).some(val => val && val.toLowerCase().includes(keyword))
    );
    renderTable(filtered);
  });
}

function updateQuotaStats() {
  const quotaDiv = document.getElementById("quotaSummary");
  const lines = activityColumns.map(col => {
    const limit = (col.name === "石鹿登山口進") ? 10 : 30;
    const joined = activityJoiners[col.name].length;
    const left = Math.max(0, limit - joined);
    return `✅ <strong>${col.name}</strong>：${joined} / ${limit}（剩 ${left} 人）`;
  });
  quotaDiv.innerHTML = lines.join("<br>");
}
