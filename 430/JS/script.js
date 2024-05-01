window.onload = function (){
    aside = document.getElementById("aside")
    aside.innerHTML=`<h3><span class="material-symbols-outlined">
  
    </span>美食介紹</h3>
  <ul>
    <li><a href="https://ifoodie.tw/restaurant/57a8c9692756dd1c4f6e82f9-%E4%B8%80%E9%8A%80%E9%BA%B5">一銀麵</a></li>
    <li><a href="https://ifoodie.tw/restaurant/55a590d2c03a10241de6711b-%E6%B8%85%E9%A6%99%E9%A3%B2%E9%A3%9F%E5%BA%97">清香飲食店</a></li>
    <li><a href="https://siouteng0822.pixnet.net/blog/post/67073077-%E3%80%90%E6%96%B0%E7%AB%B9%7C%E9%97%9C%E8%A5%BF%E3%80%91%E9%97%9C%E8%A5%BF%E6%9D%B1%E5%AE%89%E5%8F%A4%E6%A9%8B%E6%97%81%E7%BE%8E%E9%A3%9F%EF%BC%8C%E6%9D%B1%E5%AE%89%E6%A9%8B">東安橋頭牛肉麵</a></li>
  </ul>
  </aside>`
  


footer = document.getElementById("footer")
footer.innerHTML =
`<p>&copy; 2020 - This is the footer of the website.</hp>`
}


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const contents = document.querySelectorAll('.content');

    function showContent(contentId) {
        contents.forEach(content => {
            content.classList.remove('active');
            if (content.id === contentId) {
                content.classList.add('active');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const contentId = this.dataset.content;
            showContent(contentId);
        });
    });

    // Show the default content (home)
    showContent('home');
});


