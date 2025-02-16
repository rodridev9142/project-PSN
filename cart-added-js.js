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
          <img class="ad-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIk4AoGfhS0jxAaQ5hjutVDAGW7ggNtAy6f00DbepsPbywkkumGP7HoX7v6CkfXgzyP4&usqp=CAU"> 
        </div>
        <div class="nome-perfil"></div>
      </div>
      <div class="title-container">
        <p class="patrocinio">Patrocinado</p>
        <p class="title-video">${link.title}</p>
        ${link.getKnowMore()}
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
          <div class="nome-perfil">PSN</div>
        </div>
        
      </div>
      <div class="title-container">
        <p class="title-video">${link.getTitle()}</p>
      </div>
    </div>
    <div >
      <ul class="views-contents">

        <li class="like">
          <img class="views" src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-like-icon-png-image_4013523.jpg"> 

          <span> 156</span>
        </li>

        <li class="view">
          <img class="views" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxvL3ZHnq7DRDrTAFnjxGYMRcchXuY0-j0Q&s"> 

          <span> 15400</span>
        </li>

        <li class="coment">
          <img class="views" src="https://w7.pngwing.com/pngs/257/784/png-transparent-computer-icons-comment-icon-cdr-eps-black-thumbnail.png">

          <span> 65</span>
        </li>

        <li class="share">
            <img class="views" src="https://e7.pngegg.com/pngimages/32/955/png-clipart-computer-icons-share-icon-icon-design-shares-angle-triangle-thumbnail.png"> 

            
        </li>  

      </ul> 
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
