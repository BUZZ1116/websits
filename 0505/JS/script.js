// 獲取所有"加入購物車"按鈕
const addToCartButtons = document.querySelectorAll('button');

// 為每個按鈕添加點擊事件監聽器
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// 添加到購物車的函數
function addToCart(event) {
  const button = event.target;
  const productItem = button.parentElement;
  const productName = productItem.querySelector('h3').textContent;
  const productPrice = productItem.querySelector('p').textContent;

  // 在這裡可以實現添加到購物車的邏輯，例如存儲到瀏覽器的本地儲存或發送到伺服器

  console.log(`已將 ${productName} (${productPrice}) 添加到購物車`);
}