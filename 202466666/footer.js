function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'text-center';
    footer.style.background = 'linear-gradient(180deg, #FFD1DC, #FFF0F5)'; // Gradient from top to bottom
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
        <div>
            <strong>台中配送區域：</strong>
            <ul>
                <li>西區、北區、中區、東區、南區、南屯區、西屯區、北屯區、大里區、烏日區、大雅區</li>
                <li>豐原區、沙鹿區（額外+200車資）</li>
            </ul>
        </div>
        <div>
            <strong>彰化配送區域：</strong>
            <ul>
                <li>彰化市、大村鄉、永靖鄉、田尾鄉、秀水鄉、花壇鄉、埔心鄉、溪湖鄉、和美鄉、員林鄉、田中鄉、鹿港鄉、碑頭鄉</li>
            </ul>
        </div>
        <div>
            <strong>南投配送區域：</strong>
            <ul>
                <li>南投市、草屯鎮</li>
            </ul>
        </div>
        <div>
            <strong>新竹配送區域：</strong>
            <ul>
                <li>新竹市、竹北、香山區、北區、東區</li>
            </ul>
        </div>
        <div>
            <strong>臺南配送區域：</strong>
            <ul>
                <li>東區、北區、南區、中西區（需額外加車資）</li>
            </ul>
        </div>
        <div>
            <strong>高雄配送區域：</strong>
            <ul>
                <li>左營區、苓雅區、三民區、新興區、前金區、前鎮區、鼓山區（+200車費）</li>
                <li>小港區、鳳山區（需額外加300車費）</li>
                <li>楠梓區（需額外加400車費）</li>
            </ul>
        </div>
        <div>
            <strong>新竹：5K起跳：</strong>
            <ul>
                
                <li>中南部：最低3.5K起，有4K、5K、6K、8K、10K、12K到50K</li>
            </ul>
        </div>
    `;

    // Right Column
    const colRight = document.createElement('div');
    colRight.className = 'col-md-6 text-end';
    colRight.style.fontSize = '14.8px';  
    colRight.innerHTML = `
        <div style="display: inline-flex; gap: 10px; align-items: center;">
            <a href="mailto:pijh06@hc.edu.tw" class="footer-link">
                <img src="icon/telegram.png" alt="telegram Icon" style="width: 24px; height: auto;">
            </a>
            <a href="#" class="footer-link">
                <img src="icon/line.png" alt="Line Icon" style="width: 24px; height: auto;">
            </a>
        </div>
        <br />
        <span class="footer-text">建議最佳瀏覽環境: Chrome 62 以上版本、Firefox 56 以上版本、Microsoft Edge</span><br>
        <span class="footer-text">Design by LO WEI JHIH</span>
        <br />
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
        .footer-link {
            color: #000;
            text-decoration: none;
            transition: color 0.3s ease, text-decoration 0.3s ease;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
        }

        .footer-link:hover {
            color: #007bff;
            text-decoration: underline;
        }

        .footer-link img {
            vertical-align: middle;
        }

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
