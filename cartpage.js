import { cartList } from "./cart-added-js.js";

let cartHTML = '';

cartList.forEach((list) => {
  console.log(list.title)
  cartHTML += `
  <div class="news-container">
      <div class="image-container">
        <img class="img-link" src="${list.image}">
      </div>
      <div class="title-container">${list.title}</div>
      <div class="price">
      <p></p>
      </div>
      <div class="js"></div>
     
  </div>
  `;
});

document.querySelector('.js-cart')
  .innerHTML = cartHTML;

  