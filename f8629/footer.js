document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
        <footer style="background: linear-gradient(to top, #000, #333); padding: 20px; color: #fff;">
            <div class="container">
                <div class="row">
                    <!-- 服務區域列表靠左 -->
                    <div class="col-md-6 text-start" style="font-size: 14px; line-height: 1.6;">
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
                    </div>
                    
                    <!-- 社交圖標區塊及額外資訊靠右 -->
                    <div class="col-md-6 text-end">
                        <div class="d-flex flex-column align-items-end">
                            <!-- 社交圖標區塊 -->
                            <div class="social-icons mb-3" style="display: flex; gap: 20px; align-items: center;">
                                <a href="https://t.me/f8629/3786" target="_blank" style="text-decoration: none; color: #fff;">
                                    <img src="icon/telegram.png" alt="Telegram" width="30" height="30" style="vertical-align: middle;">
                                    <span style="margin-left: 5px;">Telegram</span>
                                </a>
                                <a href="https://www.facebook.com/groups/959771152424443" target="_blank" style="text-decoration: none; color: #fff;">
                                    <img src="icon/facebook.png" alt="Facebook" width="30" height="30" style="vertical-align: middle;">
                                    <span style="margin-left: 5px;">Facebook</span>
                                </a>
                                <a href="https://line.me/ti/p/f8629" target="_blank" style="text-decoration: none; color: #fff;">
                                    <img src="icon/line.png" alt="LINE" width="30" height="30" style="vertical-align: middle;">
                                    <span style="margin-left: 5px;">LINE</span>
                                </a>
                            </div>
                            <!-- 額外資訊區塊，位於社交圖標下方 -->
                            <div style="font-size: 12px; color: #aaa; text-align: right;">
                                <span class="footer-text">建議最佳瀏覽環境: Chrome 62 以上版本、Firefox 56 以上版本、Microsoft Edge</span><br>
                                <span class="footer-text">Design by LO WEI JHIH</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    // 插入到 <body> 的底部
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
