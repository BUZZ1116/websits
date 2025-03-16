function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'text-center';
    footer.style.background = 'linear-gradient(90deg, #ff9a9e, #fad0c4)'; // 更新為粉紅色漸層背景
    footer.style.padding = '20px 0';

    const footerContainer = document.createElement('div');
    footerContainer.className = 'container';

    const row = document.createElement('div');
    row.className = 'row';

    // Left Column
    const colLeft = document.createElement('div');
    colLeft.className = 'col-md-6 text-start';
    colLeft.style.fontSize = '14.8px';  
    colLeft.innerHTML = `
        <span class="footer-text">台中有送的區域: 西區、北區、中區、東區、南區、南屯區、西屯區、北屯區、大里區、烏日區、大雅區， ｛豐原區、沙鹿區，額外+200車資｝</span><br>
        <span class="footer-text">彰化我們有送的區域: 彰化市、大村鄉、永靖鄉、田尾鄉、秀水鄉、花壇鄉、埔心鄉、溪湖鄉、和美鄉、員林鄉、田中鄉、鹿港鄉、碑頭鄉</span><br>
        <span class="footer-text">南投: 南投市、草屯鎮</span><br>
        <span class="footer-text">新竹我們有送的區域: 新竹市、竹北市、香山區、北區、東區</span><br>
        <span class="footer-text">臺南我們可以到的區域: 東區、北區、南區、中西區，需額外加車資</span><br>
        <span class="footer-text">高雄我們可以到的區域: ｛左營區、苓雅區、三民區、新興區、前金區、前鎮區、鼓山區 +200 車費｝ ｛小港區、鳳山區需額外加300 車費｝ ｛楠梓區需要 +400｝</span><br>
        <span class="footer-text">價格標準: 北部4500起跳；新竹: 5K起跳；中南最低3.0K起，有4K、5K、6K、8K、10K、12K到50K</span><br>
    `;

    // Right Column
    const colRight = document.createElement('div');
    colRight.className = 'col-md-6 text-end';
    colRight.style.fontSize = '14.8px';  
    colRight.innerHTML = `
        <div style="display: inline-flex; gap: 10px; align-items: center;">
            ab202599<a href="http://t.me/ab20258888" class="footer-link">
                <img src="icon/telegram.png" alt="Line Icon" style="width: 24px; height: auto;">
            </a>
            <a href="#" class="footer-link">
                <img src="icon/line.png" alt="Line Icon" style="width: 24px; height: auto;">
            </a>
            <a href="#" class="footer-link">
                <img src="icon/facebook.png" alt="Facebook Icon" style="width: 24px; height: auto;">
            </a>
        </div>
        <br />
        <span class="footer-text">建議最佳瀏覽環境: Chrome 62 以上版本、Firefox 56 以上版本、Microsoft Edge</span><br>
  
    `;

    // Appending columns to row
    row.appendChild(colLeft);
    row.appendChild(colRight);

    // Appending row to container
    footerContainer.appendChild(row);

    // Appending container to footer
    footer.appendChild(footerContainer);

    // Append styles for links and text shadow
    const style = document.createElement('style');
    style.innerHTML = `
        .footer-text {
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
        }
    `;
    document.head.appendChild(style);

    // Appending footer to body
    document.body.appendChild(footer);
}

// Call the function to create and insert the footer
createFooter();
