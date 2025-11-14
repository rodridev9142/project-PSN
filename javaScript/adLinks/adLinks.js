import { indexHtmlPage } from "../newsLink/newsLinks.js";

export let adLinks = [
  {
  id:"111120252135",
  imgLink:"https://http2.mlstatic.com/D_NQ_NP_2X_603499-MLB97257279119_112025-F-conjunto-fitness-virginia-top-shorts-meia-coxa-cintura-alta.webp",
  imgLink2:"https://http2.mlstatic.com/D_NQ_NP_2X_603499-MLB97257279119_112025-F-conjunto-fitness-virginia-top-shorts-meia-coxa-cintura-alta.webp",
  pageLink:"news/111120252135.html",
  title:"Conjunto Fitness Virginia Top Shorts Meia Coxa Cintura Alta",
  category:"MAIS VENDIDO",
  position:"n 1° em conjuntos",
  gender:"",
  bgColor:"",
  },
  {
  id:"111120252135",
  imgLink:"https://http2.mlstatic.com/D_NQ_NP_2X_704037-MLB91576033031_092025-F-kit-sapato-social-masculino-cadarcos-relogio-carteira-cinto.webp",
  imgLink2:"https://http2.mlstatic.com/D_NQ_NP_2X_618339-MLB91717682017_092025-F-kit-sapato-social-masculino-cadarcos-relogio-carteira-cinto.webp",
  pageLink:"news/111120252135.html",
  title:"Sapato social masculino em couro + relógio digital, carteira e cinto",
  category:"RECOMENDADO",
  position:"",
  gender:"",
  bgColor:"",
  },
  {
  id:"111120252135",
  imgLink:"https://http2.mlstatic.com/D_NQ_NP_2X_622415-MLA96118484745_102025-F.webp",
  imgLink2:"https://http2.mlstatic.com/D_NQ_NP_2X_968837-MLA90645149723_082025-F.webp",
  pageLink:"news/111120252135.html",
  title:"Creatina Monohidratada em Pote 300g 100% Pura Dark Lab",
  category:"MAIS VENDIDO",
  position:"",
  gender:"",
  bgColor:"",
  },

];

export function adBox() {
  let length = adLinks.length; 
  let html = `
          <a href="/news/111120252135.html">
            <div class="box-img">
              <img class="ad-img" src="https://http2.mlstatic.com/D_NQ_NP_2X_603499-MLB97257279119_112025-F-conjunto-fitness-virginia-top-shorts-meia-coxa-cintura-alta.webp" alt="">
              <img class="ad-img" src="https://http2.mlstatic.com/D_NQ_NP_2X_603499-MLB97257279119_112025-F-conjunto-fitness-virginia-top-shorts-meia-coxa-cintura-alta.webp" alt="">
            </div>
            <div class="box-info">
              <div class="link-title">
                <p>Patrocinado</p>
                <p>Conjunto Fitness Virginia Top Shorts Meia Coxa Cintura Alta</p>
              </div>
              <div class="extra-info">
                <div>
                  <span class="mais-vendido">MAIS VENDIDO</span>
                  <span class="n1">n1° em conjuntos</span>
                </div>
                <div>

                </div>
              </div>
            </div>
          </a>
          `; 
  let index = 0; 

  setInterval(() => {
    adLinks.forEach((link) => {
      if (index === adLinks.indexOf(link)) {
        console.log(index)
        document.querySelector(".ad-box")
          .innerHTML = `
          <a href="/news/111120252135.html">
            <div class="box-img">
              <img class="ad-img" src="${link.imgLink} " alt="">
              <img class="ad-img" src="${link.imgLink2} " alt="">
            </div>
            <div class="box-info">
              <div class="link-title">
                <p>Patrocinado</p>
                <p>${link.title}</p>
              </div>
              <div class="extra-info">
                <div>
                  <span class="mais-vendido">${link.category}</span>
                  <span class="n1">${link.position}</span>
                </div>
                <div>

                </div>
              </div>
            </div>
          </a>
          `;
      }
    })
    index ++; 
    if (index === adLinks.length ) {
      index = 0; 
    }
  },10000)
  document.querySelector(".ad-box")
    .innerHTML = html; 

}

