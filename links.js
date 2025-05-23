import { addImagens } from "./interval.js";

export let foto = JSON.parse(localStorage.getItem('foto'))|| {
  addimagem:
'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/473979095_647530171178096_6916325292115550005_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=454cf4&_nc_ohc=sDTdMFs2umAQ7kNvgGfa4nH&_nc_zt=23&_nc_ht=scontent-gru1-1.xx&_nc_gid=AxFwzv5oNfdvl1gXgRpdatp&oh=00_AYC8Ys310eCHEk7ijnw9RpDOcFQ24TsCDD8Hpe3WsPt7yQ&oe=679F0B6E'};


function add() {
 
  let index = 0;
  setInterval(() => {
    //console.log(foto.addimagem);
    foto.addimagem = addImagens[index];
    index++;
    localStorage.setItem('foto',JSON.stringify(foto))
    if (index >= addImagens.length ) {
      index = 0;
    }
    
  },3000)


}

add()


class Links {
  id;
  add;
  image;
  title = 'as';
  link;
  priceCents;

  constructor(linkDetails) {
    this.id = linkDetails.id;
    this.add = linkDetails.add;
    this.image = linkDetails.image;
    this.title = linkDetails.title;
    this.link = linkDetails.link;
    this.priceCents = linkDetails.priceCents;
    
  };
  
  getTitle() {
    return this.title;
  }

  getKnowMore() {
    return '';
  }
}

class Ad extends Links {
  adLink;
  constructor(linkDetails) {
    super(linkDetails)
    this.adLink = linkDetails.link;
  }

  getKnowMore() {
    return `<a href="${this.adLink}">Saiba mais</a>`;
  }
}


export const linksOfPage = [{
  id: '16' ,
  add: "",
  image:"https://midias.em.com.br/_midias/jpg/2025/01/27/1200x720/1_hospital_regiona_antonio_dias-45420293.jpg?20250127163557?20250127163557",

  title: "Motociclista morre em acidente com carro, moto e carreta em Contagem",

  link:"https://www.engov.com.br/?gad_source=1&gclid=Cj0KCQiA4-y8BhC3ARIsAHmjC_GIfaiUbAVASaBqWGu1J_q2c-PwTKldEj8fFYinjCnBGGhzybDjoeQaAj0OEALw_wcB",

  priceCents:1000,

},{
  id: '19' ,
  add:  "",
  image:"https://s2-g1.glbimg.com/OJt890m21pCUL2GhWB8rCYlVmw0=/0x0:5088x3392/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/K/y/Mt6OB8QS6r7evZ8bclyw/2025-01-31t195501z-1764820639-rc25lcaji6lw-rtrmadp-3-usa-crash-washingtondc.jpg",

  title: "Acidente aéreo em Washington: restos mortais de 41 das 67 vítimas já foram recuperados",

  link:"https://www.bbc.com/portuguese/articles/cwyw5jengy9o",

  priceCents:1000,
},{
  id: '18' ,
  add:  "",
  image:"https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/52fa/live/4c192190-dced-11ef-b5fd-7fcb063e60d0.jpg.webp",

  title: "O plano multimilionário de segurança do Ártico anunciado pela Dinamarca em meio à ameaça de Trump de controlar a Groenlândia",

  link:"https://www.bbc.com/portuguese/articles/cwyw5jengy9o",

  priceCents:1000,
},{
  id: '17' ,
  add:  "",
  image:"https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/577d/live/86daa8c0-df41-11ef-b6f9-ad737e9c8645.jpg.webp",

  title: "Como avião e helicóptero podem bater no espaço aéreo mais vigiado do mundo? ",

  link:"https://www.bbc.com/portuguese/articles/cn57l7kll77o",

  priceCents:1000,
},{
  id: '0' ,
  add: '',
  image: 'https://taroba.com.br/api/images/proxy?format=webp&width=800&src=https://s3.amazonaws.com/producao.spayce.com.br/1737792662601_whatsapp_image_2025_01_25_at_07.jpeg',

  title: 'Acidente com Gol quadrado em Imbituva-PR deixa uma vítima fatal e outra gravemente ferida',

  link:'https://taroba.com.br/noticias/parana/acidente-na-br-153-em-imbituva-deixa-uma-vitima-fatal-e-outra-gravemente-ferida',

  priceCents:1000,
},{
  id: '1' ,
  add: '',

  image: 'https://image.portaldacidade.com/unsafe/https://bucket.portaldacidade.com/umuarama.portaldacidade.com/img/news/2025-01/motociclista-provoca-acidente-ao-fugir-de-abordagem-no-centro-de-umuarama-6794bc67ed87a.jpg',

  title: 'Motociclista fugiu da polícia e ecausou acidente no centro de Umuarama',

  link:'https://umuarama.portaldacidade.com/noticias/cidade/motociclista-provoca-acidente-ao-fugir-de-abordagem-no-centro-de-umuarama-2635',
  priceCents:2000,

  
},{
  id: '2' ,
  add: '',

  image: 'https://www.acidadeon.com/ribeiraopreto/wp-content/uploads/sites/3/2025/01/WhatsApp-Image-2025-01-24-at-09.43.49_2025-01-24_12-48-52_jpeg_2025-01-24_12-48-52-696x392.webp',

  title: 'Motociclista morreu em acidente na zona Norte de Ribeirão preto',
  link:'https://www.acidadeon.com/ribeiraopreto/cotidiano/motociclista-morre-acidente-na-zona-norte-de-ribeirao-preto-2/',
  priceCents:1600,

},{
  id: '11' ,
  add: '',
  image: 'https://brainberries.co/wp-content/uploads/2024/11/4-1.webp',

  title: 'Conheça a “mulher cavalo”, mulher que possui comportamento peculiar',

  link:'https://brainberries.co/pt/curiosidades/conheca-a-mulher-cavalo/?utm_medium=cpc&utm_source=brainberries.co_mob_br&utm_campaign=brainberries.co_mob_br&utm_term=58056507&utm_content=21404344&adclid=241dfd48b854ba59f744a90b3ec83a19',

  priceCents:1000,
},{
  id: '20' ,
  add: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKizqJau_Riod1fgZauyP6kEyRi5M78G_pNMffnlC0Rg93irvRZ4h7RiJJ8N9PeXDPf9FykmD5bSlwDXKDtHCPrYpkruTDfHc8xeINPDZNZJcbfhFK3adY-s2GBSPYFmT735Pqs8j3EeHQ/s1600/VW-Golf-2018+%25285%2529.jpg",
  image: "",

  title: "A nova completa linha Volkswagen já está disponível e a pronta entrega, comfira",

  link:'https://brainberries.co/pt/curiosidades/conheca-a-mulher-cavalo/?utm_medium=cpc&utm_source=brainberries.co_mob_br&utm_campaign=brainberries.co_mob_br&utm_term=58056507&utm_content=21404344&adclid=241dfd48b854ba59f744a90b3ec83a19',

  priceCents:1000,

  type: 'ad',
},{
  id: '3' ,
  add: '',

  image: 'https://rwtv.com.br/wp-content/uploads/2025/01/IMG-20250125-WA0047.jpg',
  title: 'Acidente de trânsito mobiliza Bombeiros na BR-470 em Pouso Redondo',

  priceCents:1040,

},{
  id: '4' ,
  add: '',

  image: 'https://s2-g1.glbimg.com/ZgZXwen52-is90SotazzBNZn-GY=/0x0:1700x1062/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/Y/b/rlBeB0TcWxuqnw5kATHQ/acidente-1-.png',
  title: 'Acidente deixa carro partido ao meio e mata dois jovens em Goiânia',
  link: 'https://g1.globo.com/go/goias/transito/noticia/2025/01/24/acidente-deixa-carro-partido-ao-meio-e-mata-dois-jovens-em-goiania.ghtml',
  priceCents:1000,
  
},{
  id: '6' ,
  add: '',

  image: 'https://ondapocos.com.br/wp-content/webp-express/webp-images/uploads/2025/01/yuri.jpg.webp',

  title: 'Amigos e familiares fazem vaquinha para apoiar agente vítima de acidente em Poços de Caldas',
  link: 'https://ondapocos.com.br/amigos-e-familiares-fazem-vaquinha-para-apoiar-agente-vitima-de-acidente-em-pocos-de-caldas/',
  priceCents:1700,

},{
  id: '7' ,
  add: '',

  image: 'https://s2-g1.glbimg.com/8t39KC9eedB8LnkJiNZ4Kq1SmxY=/0x0:1206x1189/640x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/j/s/qdV40KQlyz8NGTuk8JVw/whatsapp-image-2025-01-28-at-10.31.05-1-.jpeg',
  title: 'Técnica de enfermagem morre a caminho do trabalho após carro dela ser arrastado por carreta e cair em barranco no Paraná.',
  link: 'https://g1.globo.com/pr/oeste-sudoeste/noticia/2025/01/28/tecnica-enfermagem-morre-a-caminho-trabalho-apos-acidente-carro-ficar-embaixo-carreta-carregada-parana.ghtml',
  priceCents:1700,

},{
  id: '12',
  add: `${foto.addimagem} `,
  image:'' ,

  title: 'Semana especial AliExpress com descontos senssassionais de até 40% OFF',

  link:'https://brainberries.co/pt/curiosidades/conheca-a-mulher-cavalo/?utm_medium=cpc&utm_source=brainberries.co_mob_br&utm_campaign=brainberries.co_mob_br&utm_term=58056507&utm_content=21404344&adclid=241dfd48b854ba59f744a90b3ec83a19',

  priceCents:1000,
},{
  id: '8' ,
  add: '',

  image: 'https://cdn.tnonline.com.br/img/Instant-Article/950000/500x300/Helicoptero-de-matricula-PR--TIB-pertencente-a-emp-00954843-0-202501281443-ScaleDownProportional-2.webp?fallback=https%3A%2F%2Fcdn.tnonline.com.br%2Fimg%2FInstant-Article%2F950000%2FHelicoptero-de-matricula-PR--TIB-pertencente-a-emp-00954843-0-202501281443.png%3Fxid%3D1422068%26resize%3D1000%252C500%26t%3D1738086319&xid=1422068',

  title: 'O que já se sabe sobre acidente com helicóptero que matou três em MG',
  link: 'https://tnonline.uol.com.br/noticias/cotidiano/o-que-ja-se-sabe-sobre-acidente-com-helicoptero-que-matou-tres-em-mg-954843',
  priceCents:1700,

},{
  id: '9' ,
  add: '',

  image: 'https://www.bandab.com.br/wp-content/uploads/2025/01/engavetamento-cinco-veiculos-pr-407-litoral-2-960x592.jpg.webp',

  title: 'Engavetamento entre cinco veículos deixa uma pessoa ferida na PR-407, no litoral do Paraná',

  link: 'https://www.bandab.com.br/transito/engavetamento-cinco-veiculos-pr-407-litoral-parana/',
  priceCents:1700,

},{
  id: '10' ,
  add: '',

  image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/01/28/acidente-1k1zjohpriqly.png',

  title: 'PM dirige embriagado, dorme ao volante e causa acidente com morte de jovem no litoral de SP',

  link: 'https://www.terra.com.br/noticias/brasil/cidades/pm-dirige-embriagado-dorme-ao-volante-e-causa-acidente-com-morte-de-jovem-no-litoral-de-sp,c999f572f88a62fb351de1b0d340e071uyza8leq.html',
  priceCents:1700,

},{
  id: '13' ,
  add: "https://i.ytimg.com/vi/Qh_u-oeND5k/maxresdefault.jpg",

  image: '',

  title: "Chevrolet Equinox agora com 20% OFF na semana especial de Natal, acesse agora o site e saiba mais. s",

  link: 'https://www.terra.com.br/noticias/brasil/cidades/pm-dirige-embriagado-dorme-ao-volante-e-causa-acidente-com-morte-de-jovem-no-litoral-de-sp,c999f572f88a62fb351de1b0d340e071uyza8leq.html',
  priceCents:1700,

},{
  id: '14' ,
  add: '',

  image: 'https://sampi.net.br/dir-arquivo-imagem/2025/01/2006940c7d80fe115e263d314d2dc5f3.jpeg',

  title: 'Mulher morre após acidente entre moto e carro em Bauru',

  link: 'https://sampi.net.br/bauru/noticias/2881674/policia/2025/01/mulher-morre-apos-acidente-entre-moto-e-carro-em-bauru',
  priceCents:1700,

},{
  id: '15' ,
  add: '',

  image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/01/30/trump-eua-rh506aqyz78h.jpeg',

  title: "Sem provas, Trump relaciona acidente nos EUA com programas de diversidade e inclusão de Biden: 'Horrível'",

  link: "https://www.terra.com.br/noticias/mundo/estados-unidos/sem-provas-trump-relaciona-acidente-nos-eua-com-programas-de-diversidade-e-inclusao-de-biden-horrivel,d133423c2e91aebc1770fcb8c7309db3h6j3uv1w.html",
  priceCents:1700,

},{
  id: '20' ,
  add:  "",
  image:"https://s2-g1.glbimg.com/94SNpbWLJTk0CjCwQz8n2KlhTIk=/0x0:3000x1998/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/w/0/hrKsBAS5qSb3EVOO1AKw/asp20220711020.jpg",

  title: "Petrobras anuncia aumento de R$ 0,22 no preço do litro do diesel para as distribuidoras",

  link:"https://g1.globo.com/economia/noticia/2025/01/31/petrobras-anuncia-aumento-do-preco-do-diesel-para-as-distribuidoras.ghtml",

  priceCents:1000,
},].map((linkDetails) =>{
  if (linkDetails.type === 'ad') {
    return new Ad(linkDetails)
  }
  return new Links(linkDetails);
})


