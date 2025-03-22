function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'text-center';
    footer.style.background = 'linear-gradient(90deg, #ff9a9e, #fad0c4)';
    footer.style.padding = '20px 0';

    const footerContainer = document.createElement('div');
    footerContainer.className = 'container';

    const row = document.createElement('div');
    row.className = 'row';

    // 左欄
    const colLeft = document.createElement('div');
    colLeft.className = 'col-md-6 text-start';
    colLeft.style.fontSize = '14.8px';
    colLeft.innerHTML = `
        <span class="footer-text">台中有送的區域: 西區、北區、中區、東區、南區、南屯區、西屯區、北屯區、大里區、烏日區、大雅區，｛豐原區、沙鹿區，額外+200車資｝</span><br>
        <span class="footer-text">彰化我們有送的區域: 彰化市、大村鄉、永靖鄉、田尾鄉、秀水鄉、花壇鄉、埔心鄉、溪湖鄉、和美鄉、員林鄉、田中鄉、鹿港鄉、碑頭鄉</span><br>
        <span class="footer-text">南投: 南投市、草屯鎮</span><br>
        <span class="footer-text">新竹我們有送的區域: 新竹市、竹北市、香山區、北區、東區</span><br>
        <span class="footer-text">臺南我們可以到的區域: 東區、北區、南區、中西區，需額外加車資</span><br>
        <span class="footer-text">高雄我們可以到的區域: ｛左營區、苓雅區、三民區、新興區、前金區、前鎮區、鼓山區 +200 車費｝｛小港區、鳳山區需額外加300 車費｝｛楠梓區需要 +400｝</span><br>
        <span class="footer-text">價格標準: 北部4500起跳；新竹: 5K起跳；中南最低3.0K起，有4K、5K、6K、8K、10K、12K到50K</span><br>
    `;

    // 右欄
    const colRight = document.createElement('div');
    colRight.className = 'col-md-6 text-end';
    colRight.style.fontSize = '14.8px';
    colRight.innerHTML = `
        <div style="display: inline-flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <span class="footer-text">@ab202588888</span>
            <a href="http://t.me/ab20258888" class="footer-link" target="_blank">
                <img src="icon/telegram.png" alt="Telegram Icon" style="width: 24px; height: auto;">
            </a>
            <a href="#" class="footer-link" onclick="showLineQRCode()">
                <img src="icon/line.png" alt="Line Icon" style="width: 24px; height: auto;">
            </a>
            <a href="https://www.facebook.com/groups/959771152424443" class="footer-link">
                <img src="icon/facebook.png" alt="Facebook Icon" style="width: 24px; height: auto;">
            </a>
        </div>
        <br />
        <span class="footer-text">建議最佳瀏覽環境: Chrome 62 以上版本、Firefox 56 以上版本、Microsoft Edge</span><br>
    `;

    row.appendChild(colLeft);
    row.appendChild(colRight);
    footerContainer.appendChild(row);
    footer.appendChild(footerContainer);

    const style = document.createElement('style');
    style.innerHTML = `
        .footer-text {
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
        }
        .footer-link {
            text-decoration: none;
        }
    `;
    document.head.appendChild(style);

    // Line QRCode Modal
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'lineModal';
    modal.tabIndex = -1;
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">加入 LINE 好友</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <img src="icon/line.jpg" alt="Line QRCode" style="max-width: 100%; height: auto;">
            <p class="mt-2">ID：f8629</p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // 彈窗觸發函數
    window.showLineQRCode = function () {
      new bootstrap.Modal(document.getElementById('lineModal')).show();
    };

    document.body.appendChild(footer);
}

createFooter();
