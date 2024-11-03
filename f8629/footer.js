// footer.js

document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
        <footer>
            <p><strong>台中有送的區域:</strong> 西區、北區、中區、東區、南區、南屯區、西屯區、北屯區、大里區、烏日區、大雅區，
                <span>｛豐原區、沙鹿區，額外+200車資｝</span>
            </p>

            <p><strong>彰化我們有送的區域:</strong> 彰化市、大村鄉、永靖鄉、田尾鄉、秀水鄉、花壇鄉、埔心鄉、溪湖鄉、和美鄉、員林鄉、田中鄉、鹿港鄉、碑頭鄉</p>
            
            <p><strong>南投:</strong> 南投市、草屯鎮</p>
            
            <p><strong>新竹我們有送的區域:</strong> 新竹市、竹北、香山區、北區、東區</p>
            
            <p><strong>臺南我們可以到的區域:</strong> 東區、北區、南區、中西區，需額外加車資</p>
            
            <p><strong>高雄我們可以到的區域:</strong>
                <span>｛左營區、苓雅區、三民區、新興區、前金區、前鎮區、鼓山區 +200 車費｝</span>
                <span>｛小港區、鳳山區需額外加300 車費｝</span>
                <span>｛楠梓區需要 +400｝</span>
            </p>
            
            <p><strong>價格標準:</strong> 新竹: 5K起跳；中南最低3.5K起，有4K、5K、6K、8K、10K、12K到50K</p>

            <!-- Social Icons -->
            <div class="social-icons">
                <a href="https://t.me/f8629/3786" target="_blank">
                    <img src="icon/telegram.png" alt="Telegram" width="30" height="30">
                </a>
                <a href="https://www.facebook.com/groups/959771152424443" target="_blank">
                    <img src="icon/facebook.png" alt="Facebook" width="30" height="30">
                </a>
                <a href="#" target="_blank">
                    <img src="icon/line.png" alt="LINE" width="30" height="30">
                </a>
                <!-- Link to 安寶茶坊討論區 -->
                <a href="http://yaomoking.myqnapcloud.com:8080/f8629/index.php" target="_blank" style="display: inline-block; vertical-align: middle;">
                    <img src="icon/link.png" alt="安寶茶坊討論區" width="30" height="30" style="vertical-align: middle;">
                </a>
                <span style="display: inline-block; vertical-align: middle; margin-left: 10px;">安寶茶坊討論區</span>
            </div>
        </footer>
    `;
    
    // 插入到 <body> 的底部
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
