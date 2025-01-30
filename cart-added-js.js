import { linksOfPage,  } from "./links.js";
import { foto } from "./links.js";
import { addImagens } from "./interval.js";

export let cartList = JSON.parse(localStorage.getItem('cart1'));



export let homePageHTML = '';
//export let foto = '';

export function HTMLpage(linksOfPage) {

linksOfPage.forEach((link) =>{

  if (link.add) {
    homePageHTML += `
    <div class="page-add-container">
    <div class="image-container">
      <img class="img-link" src="${link.add}">
    </div>
    <div class="title-box-container" >
      <div class="perfil-container">
        <div class="foto-perfil-container">
          <img class="ad-icon" src="https://icon-library.com/images/advertisment-icon/advertisment-icon-8.jpg"> 
        </div>
        <div class="nome-perfil"></div>
      </div>
      <div class="title-container">
        <p class="patrocinio">Patrocinado</p>
        <p class="title-video">${link.title}</p>
      </div>
    </div>
  </div>
    `;
  } else{ homePageHTML += `
  <div class="news-container">
    <div class="image-container">
      <img class="img-link" src="${link.image}">
    </div>
    <div class="title-box-container" >
      <div class="perfil-container">
        <div class="foto-perfil-container">
          <img class="foto-perfil" src="redebrasil.jpg"> 
        </div>
        <div class="nome-perfil">PSN</div>
      </div>
      <div class="title-container">
        <p class="title-video">${link.title}</p>
      </div>
    </div>
  </div>
  `;
  }
});
}




/*[{
  id: '3' ,
  image: 'https://rwtv.com.br/wp-content/uploads/2025/01/IMG-20250125-WA0047.jpg',
  title: 'Acidente de trânsito mobiliza Bombeiros na BR-470 em Pouso Redondo',

  priceCents:1040,

},];


let cartHTML = '';

cartList.forEach((list) => {
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

*/
