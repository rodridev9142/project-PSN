  adLinks.forEach((link) => {
    setInterval(() => {
      if (adLinks.indexOf(link) === index) {
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
                  <span class="n1">n1° em conjuntos</span>
                </div>
                <div>

                </div>
              </div>
            </div>
          </a>
          `;

      }
                indexHtmlPage.adNewsElement()
          index ++; 
          console.log(index)
    }, 5000)
      
    })