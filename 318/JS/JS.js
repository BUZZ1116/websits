/* console.log("Hi! JavaScript ");
let i = prompt("請輸入暱稱");
if (i == null){
    document.write("你好：訪客");
    document.close();
}
else{
    document.write("你好："+ i);
    document.close(); 
}*/
$(document).ready(function() {
  const carouselInner = $('.carousel-inner');
  const carouselItems = $('.carousel-item');
  const itemWidth = carouselItems.eq(0).outerWidth();
  let currentPage = 1;

  $('.page-btn').click(function() {
    const page = parseInt($(this).data('page'));
    moveToPage(page);
  });

  function moveToPage(page) {
    const newPosition = (page - 1) * itemWidth * -1;
    carouselInner.css('transform', 'translateX(' + newPosition + 'px)');
    currentPage = page;
  }

  function autoPlay() {
    setInterval(function() {
      currentPage++;
      if (currentPage > carouselItems.length) {
        currentPage = 1;
      }
      moveToPage(currentPage);
    }, 3000);
  }

  autoPlay(); // 启动自动播放
});


