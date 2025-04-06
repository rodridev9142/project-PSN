import { linksOfPage,  } from "./links.js";
import { cartList, HTMLpage, homePageHTML,  } from "./cart-added-js.js";


HTMLpage(linksOfPage);



document.querySelector('.last-news')
  .innerHTML = homePageHTML;

  document.querySelectorAll('.add-cart')
  .forEach((button) => {
    
    button.addEventListener('click',() => {
      const productId = button.dataset.productId;
      linksOfPage.forEach((product) => {
        //console.log(product)
        if (productId === product.id) {
          cartList.push({
            id: product.id,
            image: product.image,
            title: product.title,
          });

          localStorage.setItem('cart1',JSON.stringify(cartList));
          

          console.log(cartList);
        };
      });
    });
  });

function plus() {
  let mais = 0;
  document.querySelector('.mais')
    .addaddEventListener('click',( ) => {
      mais ++;
      document.querySelector('.teste')
        .innerHTML = mais;
    })
  document.querySelector('.teste')
    .innerHTML = "assim";
}
plus()
