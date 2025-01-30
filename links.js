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




export let linksOfPage = [{
  id: '0' ,
  video: '',
  image: 'https://taroba.com.br/api/images/proxy?format=webp&width=800&src=https://s3.amazonaws.com/producao.spayce.com.br/1737792662601_whatsapp_image_2025_01_25_at_07.jpeg',

  title: 'Acidente com Gol quadrado em Imbituva-PR deixa uma vítima fatal e outra gravemente ferida',

  link:'https://taroba.com.br/noticias/parana/acidente-na-br-153-em-imbituva-deixa-uma-vitima-fatal-e-outra-gravemente-ferida',

  priceCents:1000,
},{
  id: '1' ,
  video: '',

  image: 'https://image.portaldacidade.com/unsafe/https://bucket.portaldacidade.com/umuarama.portaldacidade.com/img/news/2025-01/motociclista-provoca-acidente-ao-fugir-de-abordagem-no-centro-de-umuarama-6794bc67ed87a.jpg',

  title: 'Motociclista fugiu da polícia e ecausou acidente no centro de Umuarama',

  link:'https://umuarama.portaldacidade.com/noticias/cidade/motociclista-provoca-acidente-ao-fugir-de-abordagem-no-centro-de-umuarama-2635',
  priceCents:2000,

  
},{
  id: '2' ,
  video: '',

  image: 'https://www.acidadeon.com/ribeiraopreto/wp-content/uploads/sites/3/2025/01/WhatsApp-Image-2025-01-24-at-09.43.49_2025-01-24_12-48-52_jpeg_2025-01-24_12-48-52-696x392.webp',

  title: 'Motociclista morreu em acidente na zona Norte de Ribeirão preto',
  link:'https://www.acidadeon.com/ribeiraopreto/cotidiano/motociclista-morre-acidente-na-zona-norte-de-ribeirao-preto-2/',
  priceCents:1600,

},{
  id: '11' ,
  video: '',
  image: 'https://brainberries.co/wp-content/uploads/2024/11/4-1.webp',

  title: 'Conheça a “mulher cavalo”, mulher que possui comportamento peculiar',

  link:'https://brainberries.co/pt/curiosidades/conheca-a-mulher-cavalo/?utm_medium=cpc&utm_source=brainberries.co_mob_br&utm_campaign=brainberries.co_mob_br&utm_term=58056507&utm_content=21404344&adclid=241dfd48b854ba59f744a90b3ec83a19',

  priceCents:1000,
},{
  id: '3' ,
  video: '',

  image: 'https://rwtv.com.br/wp-content/uploads/2025/01/IMG-20250125-WA0047.jpg',
  title: 'Acidente de trânsito mobiliza Bombeiros na BR-470 em Pouso Redondo',

  priceCents:1040,

},{
  id: '4' ,
  video: '',

  image: 'https://s2-g1.glbimg.com/ZgZXwen52-is90SotazzBNZn-GY=/0x0:1700x1062/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/Y/b/rlBeB0TcWxuqnw5kATHQ/acidente-1-.png',
  title: 'Acidente deixa carro partido ao meio e mata dois jovens em Goiânia',
  link: 'https://g1.globo.com/go/goias/transito/noticia/2025/01/24/acidente-deixa-carro-partido-ao-meio-e-mata-dois-jovens-em-goiania.ghtml',
  priceCents:1000,
  
},{
  id: '6' ,
  video: '',

  image: 'https://ondapocos.com.br/wp-content/webp-express/webp-images/uploads/2025/01/yuri.jpg.webp',

  title: 'Amigos e familiares fazem vaquinha para apoiar agente vítima de acidente em Poços de Caldas',
  link: 'https://ondapocos.com.br/amigos-e-familiares-fazem-vaquinha-para-apoiar-agente-vitima-de-acidente-em-pocos-de-caldas/',
  priceCents:1700,

},{
  id: '7' ,
  video: '',

  image: 'https://s2-g1.glbimg.com/8t39KC9eedB8LnkJiNZ4Kq1SmxY=/0x0:1206x1189/640x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/j/s/qdV40KQlyz8NGTuk8JVw/whatsapp-image-2025-01-28-at-10.31.05-1-.jpeg',
  title: 'Técnica de enfermagem morre a caminho do trabalho após carro dela ser arrastado por carreta e cair em barranco no Paraná',
  link: 'https://g1.globo.com/pr/oeste-sudoeste/noticia/2025/01/28/tecnica-enfermagem-morre-a-caminho-trabalho-apos-acidente-carro-ficar-embaixo-carreta-carregada-parana.ghtml',
  priceCents:1700,

},{
  id: '12',
  video: '',
  image:`${foto.addimagem} ` ,

  title: 'Vende-se colheitadeira ano 2000 John deere 1175 | R$:235.000,00.',

  link:'https://brainberries.co/pt/curiosidades/conheca-a-mulher-cavalo/?utm_medium=cpc&utm_source=brainberries.co_mob_br&utm_campaign=brainberries.co_mob_br&utm_term=58056507&utm_content=21404344&adclid=241dfd48b854ba59f744a90b3ec83a19',

  priceCents:1000,
},{
  id: '8' ,
  video: '',

  image: 'https://cdn.tnonline.com.br/img/Instant-Article/950000/500x300/Helicoptero-de-matricula-PR--TIB-pertencente-a-emp-00954843-0-202501281443-ScaleDownProportional-2.webp?fallback=https%3A%2F%2Fcdn.tnonline.com.br%2Fimg%2FInstant-Article%2F950000%2FHelicoptero-de-matricula-PR--TIB-pertencente-a-emp-00954843-0-202501281443.png%3Fxid%3D1422068%26resize%3D1000%252C500%26t%3D1738086319&xid=1422068',

  title: 'O que já se sabe sobre acidente com helicóptero que matou três em MG',
  link: 'https://tnonline.uol.com.br/noticias/cotidiano/o-que-ja-se-sabe-sobre-acidente-com-helicoptero-que-matou-tres-em-mg-954843',
  priceCents:1700,

},{
  id: '9' ,
  video: '',

  image: 'https://www.bandab.com.br/wp-content/uploads/2025/01/engavetamento-cinco-veiculos-pr-407-litoral-2-960x592.jpg.webp',

  title: 'Engavetamento entre cinco veículos deixa uma pessoa ferida na PR-407, no litoral do Paraná',

  link: 'https://www.bandab.com.br/transito/engavetamento-cinco-veiculos-pr-407-litoral-parana/',
  priceCents:1700,

},{
  id: '10' ,
  video: '',

  image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/01/28/acidente-1k1zjohpriqly.png',

  title: 'PM dirige embriagado, dorme ao volante e causa acidente com morte de jovem no litoral de SP',

  link: 'https://www.terra.com.br/noticias/brasil/cidades/pm-dirige-embriagado-dorme-ao-volante-e-causa-acidente-com-morte-de-jovem-no-litoral-de-sp,c999f572f88a62fb351de1b0d340e071uyza8leq.html',
  priceCents:1700,

},]


