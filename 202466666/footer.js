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
       日本东京 面向外国人的成人娱乐 住家→外送酒店→ 本番 现金消费→明买明卖→ 诚信交易→ 百分百照片本人 →私訊唯一客服 下午13：00 到晚上24:00
    `;

    // Right Column
    const colRight = document.createElement('div');
    colRight.className = 'col-md-6 text-end';
    colRight.style.fontSize = '14.8px';
    colRight.innerHTML = `
        <div style="display: inline-flex; gap: 15px; align-items: center;">
            <span style="display: flex; align-items: center;">
                 
                <a href="https://t.me/riben202400" target="_blank" class="footer-link">
                    <img src="icon/telegram.png" alt="Telegram Icon" style="width: 24px; height: auto; margin-left: 5px;">@riben202400
                </a>
            </span>
            <span style="display: flex; align-items: center;">
                
                <a href="https://line.me/ti/p/202466666" target="_blank" class="footer-link">
                    <img src="icon/line.png" alt="LINE Icon" style="width: 24px; height: auto; margin-left: 5px;">202466666
                </a>
            </span>
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
