function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'text-center';
    footer.style.backgroundColor = '#c0e6a5';
    footer.style.padding = '20px 0';

    const footerContainer = document.createElement('div');
    footerContainer.className = 'container';

    const row = document.createElement('div');
    row.className = 'row';

    const colLeft = document.createElement('div');
    colLeft.className = 'col-md-6 text-start';
    colLeft.innerHTML = `
        新竹市東區培英國中<br>
        30068 新竹市學府路4號 No. 4, Xuefu Rd., East Dist., Hsinchu City , Taiwan (R.O.C.)<br>
        電話 03-5721301 傳真 03-5726578<br>
    `;

    const colRight = document.createElement('div');
    colRight.className = 'col-md-6 text-end';
    colRight.innerHTML = `
        建議最佳瀏覽環境: Chrome 62 以上版本、Firefox 56 以上版本、Microsoft Edge
    `;

    row.appendChild(colLeft);
    row.appendChild(colRight);
    footerContainer.appendChild(row);
    footer.appendChild(footerContainer);

    document.body.appendChild(footer);
}

// Call the function to create and insert the footer
createFooter();