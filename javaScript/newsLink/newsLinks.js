import { adLinks } from "../adLinks/adLinks.js";

let newsLinks = [
  {
  id:"141120250940",
  imgLink:"https://policialweb.com.br/wp-content/uploads/2024/12/pmprisao.jpeg",
  pageLink:"news/141120250940.html",
  title:"Homem foi preso por descumprir medida protetiva em Jesuítas PR", 
  },
]

export let indexHtmlPage = {
  boxNewsElement() {
    let html = "";
    newsLinks.forEach((link) => {
      html += `
        <div class="box-news" data-link-id="${link.id} ">
          <a href="${link.pageLink} ">
            <img class="news-img" src="${link.imgLink} " alt="">
            <div class="box-info">
              <div class="link-title">
                <p>${link.title} </p>
              </div>
            </div>
          </a>
        </div>
      `;
    })
    document.querySelector(".news-container")
      .innerHTML = html;
  },
  adNewsElement() {
    const number = 5;
    let count = 0;
    let index = 0; 
    let html = "";
    newsLinks.forEach((link) => {
      
      count++; 
      html += `
        <div class="box-news" data-link-id="${link.id} ">
          <a href="${link.pageLink} ">
            <img class="news-img" src="${link.imgLink} " alt="">
            <div class="box-info">
              <div class="link-title">
                <p>${link.title} </p>
              </div>
            </div>
          </a>
        </div>
      `;
      if (count === number) {
        count = 0 ;
         
        adLinks.forEach((link) => {
          if (index === adLinks.indexOf(link)) {

            html += `
        <div class="box-news ad-box" data-link-id="${link.id} ">
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
                  <span class="n1">n1° em conjuntos</span>
                </div>
                <div>

                </div>
              </div>
            </div>
          </a>
        </div>
      `;
          } 
          
        })
        index++;
      }
    })
    document.querySelector(".news-container")
      .innerHTML = html;
  },
}

