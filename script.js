/* =====================================================================
   ESTRUTURA DE DADOS — edite/adicione produtos, cupons e posts aqui.
   Substitua "link: '#'" pelos links de afiliado reais quando disponíveis.
===================================================================== */

const CATEGORIES = [
  { id:'casa',      label:'Casa & Decoração', icon:'🏠' },
  { id:'beleza',     label:'Beleza',           icon:'💄' },
  { id:'moda',       label:'Moda',             icon:'👗' },
  { id:'tech',       label:'Tecnologia',       icon:'📱' },
  { id:'cozinha',    label:'Cozinha',          icon:'🍳' },  
  { id:'acessorios', label:'Acessórios',       icon:'👜' },
  // { id:'momento',    label:'Do momento',       icon:'✨' },
];

// PRODUCTS: cada item pode aparecer em "destaque" e/ou "popular" via flags.
// image: null -> mostra espaço reservado para você adicionar a foto do anúncio depois.
// Para adicionar uma imagem: image: 'assets/nome-da-imagem.jpg'
// PRODUCTS: cada item pode aparecer em "destaque" e/ou "popular" via flags.
// image: caminho da imagem dentro da pasta imgs/

const PRODUCTS = [
  {
    id: 1,
    name: 'Bolsa Preta Minimalista',
    desc: 'Design elegante e versátil para o dia a dia.',
    cat: 'acessorios',
    icon: '👜',
    price: 'R$ 43,99',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/3LQJmiqG7k',
    image: 'imgs/bolsa-preta.webp',
    featured: true,
    popular: true,
    tag: '🧡 Queridinho'
  },

  {
    id: 2,
    name: 'Ferro Portátil de Viagem',
    desc: 'Compacto e prático para passar roupas onde estiver.',
    cat: 'casa',
    icon: '🧳',
    price: 'R$ 27,99',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/6AkIusvrEX',
    image: 'imgs/ferro-portatil.jpg',
    featured: true,
    tag: '🔥 Salva na viagem'
  },

  {
    id: 3,
    name: 'Air Fryer sem Óleo',
    desc: 'Prepare suas receitas de forma prática e com pouco ou nenhum óleo.',
    cat: 'cozinha',
    icon: '🍳',
    price: '12x R$ 19,90',
    market: 'Mercado Livre',
    selo: 'Imperdível',
    link: 'https://meli.la/2wucBWz',
    image: 'imgs/air-sem-oleo.webp',
    featured: true,
    popular: true,
    tag: '🔥 Imperdível'
  },

  {
    id: 4,
    name: 'Conjunto Legging Fitness',
    desc: 'Conjunto fitness confortável para treinar com liberdade.',
    cat: 'moda',
    icon: '🩳',
    price: 'R$ 67,80',
    oldPrice: 'R$ 77,80',
    discount: '-13%',
    market: 'Mercado Livre',
    selo: 'Promoção',
    link: 'https://meli.la/1VM7oto',
    image: 'imgs/conjunto-legging.webp',
    featured: true
  },

  {
    id: 5,
    name: 'Sérum Facial',
    desc: 'Sérum facial para complementar sua rotina de cuidados com a pele.',
    cat: 'beleza',
    icon: '🧴',
    price: 'R$ 38,98',
    oldPrice: 'R$ 60,00',
    discount: '-35%',
    market: 'Shopee',
    selo: 'Oferta relâmpago',
    link: 'https://s.shopee.com.br/4Az1lLNkO3',
    image: 'imgs/serum.webp',
    featured: true,
    popular: true,
    tag: '💕 Favorito',
    isOffer: true,
    offerTag: 'OFERTA RELÂMPAGO'
  },

  {
    id: 6,
    name: 'Conjunto de Linho Feminino',
    desc: 'Conjunto leve e elegante para um visual confortável.',
    cat: 'moda',
    icon: '👗',
    price: 'R$ 124,45',
    oldPrice: 'R$ 131,00',
    discount: '-5%',
    market: 'Mercado Livre',
    selo: 'Achadinho',
    link: 'https://meli.la/2Ee1iFv',
    image: 'imgs/conjunto-linho.webp',
    featured: true
  },

  {
    id: 7,
    name: 'Conjunto Fitness Flare',
    desc: 'Conjunto fitness com calça flare para treinar com estilo.',
    cat: 'moda',
    icon: '🩱',
    price: 'R$ 82,00',
    oldPrice: 'R$ 96,33',
    discount: '-15%',
    market: 'Mercado Livre',
    selo: 'Achadinho',
    link: 'https://meli.la/2WmGWrp',
    image: 'imgs/fitness-flare.webp',
    featured: true
  },

  {
    id: 8,
    name: 'Conjunto de 19 Peças para Cozinha',
    desc: 'Kit completo com utensílios para facilitar sua rotina na cozinha.',
    cat: 'cozinha',
    icon: '🍴',
    price: 'R$ 59,90',
    market: 'Mercado Livre',
    selo: 'Achadinho',
    link: 'https://meli.la/1nJgpbT',
    image: 'imgs/conjunto-19pecas.webp',
    featured: true
  },

  {
    id: 9,
    name: 'Pijama de Coração',
    desc: 'Pijama confortável e delicado para sua rotina de descanso.',
    cat: 'moda',
    icon: '❤️',
    price: 'R$ 34,36',
    market: 'Shein',
    selo: 'Achadinho',
    link: 'https://onelink.shein.com/48/5zcywzcy4k0m?ismg_ol=DmFxnfyrDkO_01_KOC-C',
    image: 'imgs/pijama-coracao.png',
    featured: true
  },

  {
    id: 10,
    name: 'Organizador de Geladeira',
    desc: 'Deixe sua geladeira organizada e facilite o dia a dia.',
    cat: 'cozinha',
    icon: '🧊',
    price: 'R$ 35,90',
    market: 'Shopee',
    selo: 'Mais vendido',
    link: 'https://s.shopee.com.br/6VMxMeDEal',
    image: 'imgs/organizador-geladeira.webp',
    featured: true,
    popular: true,
    tag: '🔥 Mais vendido'
  },

  {
    id: 11,
    name: 'Luminária Decorativa',
    desc: 'Iluminação sofisticada para deixar o ambiente mais aconchegante.',
    cat: 'casa',
    icon: '💡',
    price: 'R$ 41,99',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/AUtKdDUYMi',
    image: 'imgs/luminaria.webp',
    featured: true
  },

  {
    id: 12,
    name: 'Conjunto Bicolor Fitness',
    desc: 'Conjunto esportivo confortável e estiloso para seus treinos.',
    cat: 'moda',
    icon: '🩳',
    price: 'R$ 66,00',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/50YCsJGBbh',
    image: 'imgs/conjunto-bicolor.webp',
    featured: true
  },

  {
    id: 13,
    name: 'Conjunto Fitness em Promoção',
    desc: 'Conjunto esportivo com desconto especial por tempo limitado.',
    cat: 'moda',
    icon: '⚡',
    price: 'R$ 56,99',
    oldPrice: 'R$ 189,99',
    discount: '-70%',
    market: 'Mercado Livre',
    selo: 'Oferta relâmpago',
    link: 'https://meli.la/1JBDHHr',
    image: 'imgs/conjunto-social.webp',
    featured: true,
    popular: true,
    tag: '✨ Em alta',
    isOffer: true,
    offerTag: 'OFERTA RELÂMPAGO'
  },

  {
    id: 14,
    name: 'Kit com 4 Conjuntos Masculinos',
    desc: 'Kit com camisetas e shorts para o dia a dia.',
    cat: 'moda',
    icon: '👕',
    price: 'R$ 121,60',
    discount: '-67%',
    market: 'Mercado Livre',
    selo: 'Achadinho',
    link: 'https://meli.la/1x1VPBW',
    image: 'imgs/conjunto-masculino.webp',
    featured: true,
    isOffer: true,
    offerTag: 'ACHADINHO'
  },

  {
    id: 15,
    name: 'Relógio Unissex Dourado',
    desc: 'Relógio com design elegante para complementar qualquer visual.',
    cat: 'acessorios',
    icon: '⌚',
    price: 'R$ 448,00',
    oldPrice: 'R$ 558,00',
    discount: '-20%',
    market: 'Shopee',
    selo: 'Oferta',
    link: 'https://s.shopee.com.br/904EgSGmmf',
    image: 'imgs/relogio-unissex.webp',
    featured: true,
    isOffer: true,
    offerTag: 'OFERTA'
  },

  {
    id: 16,
    name: 'Escova de Silicone para Vaso Sanitário',
    desc: 'Praticidade e higiene para a limpeza do banheiro.',
    cat: 'casa',
    icon: '🚽',
    price: 'R$ 16,99',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/gPYjANTG1',
    image: 'imgs/escova-silicone.webp',
    featured: true
  },

  {
    id: 17,
    name: 'Moedor Elétrico',
    desc: 'Prático para moer temperos, café e outros ingredientes.',
    cat: 'cozinha',
    icon: '☕',
    price: 'R$ 36,89',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/6L3vMh2WG2',
    image: 'imgs/moedor-eletrico.webp',
    featured: true
  },

  {
    id: 18,
    name: 'Expositor de Perfumes',
    desc: 'Organize seus perfumes e deixe sua coleção sempre à vista.',
    cat: 'beleza',
    icon: '💄',
    price: 'R$ 38,39',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/AAGVk0bXjn',
    image: 'imgs/expositor-perfumes.webp',
    featured: true
  },

  {
    id: 19,
    name: 'Porta-Pincéis Giratório',
    desc: 'Organizador giratório para deixar seus pincéis sempre à mão.',
    cat: 'beleza',
    icon: '🖌️',
    price: 'R$ 19,90',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/2VqwxCS4nd',
    image: 'imgs/porta-pinceis.webp',
    featured: true
  },

  {
    id: 20,
    name: 'Organizador Giratório de Maquiagem',
    desc: 'Organizador prático para deixar maquiagens e cosméticos em ordem.',
    cat: 'beleza',
    icon: '💅',
    price: 'Consulte o valor no link',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/7VFbRuDawa',
    image: 'imgs/organizador-maquiagem.webp',
    featured: true
  },

  {
    id: 21,
    name: 'Multiprocessador Elétrico',
    desc: 'Facilite o preparo de alimentos e agilize sua rotina na cozinha.',
    cat: 'cozinha',
    icon: '🍽️',
    price: 'R$ 78,99',
    oldPrice: 'R$ 109,00',
    discount: '-28%',
    market: 'Mercado Livre',
    selo: 'Achadinho',
    link: 'https://meli.la/1JeHCPj',
    image: 'imgs/multiprocessador.webp',
    featured: true
  },

  {
    id: 22,
    name: 'Kit com 6 Potes Herméticos',
    desc: 'Potes práticos para organizar alimentos e manter a cozinha em ordem.',
    cat: 'cozinha',
    icon: '🥫',
    price: 'R$ 38,90',
    market: 'Mercado Livre',
    selo: 'Achadinho',
    link: 'https://meli.la/1jertvX',
    image: 'imgs/kit-6potes.webp',
    featured: true
  },

  {
    id: 23,
    name: 'Kit de Cozinha em Bambu',
    desc: 'Itens de bambu para deixar sua cozinha mais organizada e bonita.',
    cat: 'cozinha',
    icon: '✨',
    price: 'R$ 53,09',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/4Az7PnOQ53',
    image: 'imgs/kit-cozinha-bambu.webp',
    featured: true
  },

  {
    id: 24,
    name: 'Prateleira Preta para Cozinha',
    desc: 'Prateleira funcional para organizar utensílios e otimizar espaço.',
    cat: 'cozinha',
    icon: '🗄️',
    price: 'A partir de R$ 22,90',
    oldPrice: 'R$ 45,00',
    market: 'Shopee',
    selo: 'Promoção',
    link: 'https://s.shopee.com.br/8V852r8yGZ',
    image: 'imgs/prateleira-preta.webp',
    featured: true
  },

  {
    id: 25,
    name: 'Organizador de Salada',
    desc: 'Deixe frutas e verduras organizadas e sempre à disposição.',
    cat: 'cozinha',
    icon: '🥗',
    price: 'R$ 29,90',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/5Arc6j6AUq',
    image: 'imgs/organizador-geladeira.webp',
    featured: true
  },

  {
    id: 26,
    name: 'Relógio Technos',
    desc: 'Relógio masculino com visual sofisticado e moderno.',
    cat: 'acessorios',
    icon: '⌚',
    price: 'R$ 58,90',
    oldPrice: 'R$ 69,90',
    discount: '-16%',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/7VFsvFAJad',
    image: 'imgs/relogio-technos.webp',
    featured: true
  },

  {
    id: 27,
    name: 'Relógio Vintage Digital',
    desc: 'Relógio retrô com pulseira de aço inoxidável, alarme e luz noturna.',
    cat: 'acessorios',
    icon: '⌚',
    price: 'R$ 15,50',
    oldPrice: 'R$ 29,50',
    discount: '-47%',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/4LIOgp3cLJ?share_channel_code=1',
    image: 'imgs/relogio-vintage.webp',
    featured: true,
    popular: true,
    tag: '❤️ Favorito'
  },

  {
    id: 29,
    name: 'Carregador Turbo para iPhone',
    desc: 'Carregador turbo para iPhone com carregamento rápido.',
    cat: 'tech',
    icon: '🔌',
    price: 'R$ 46,00',
    oldPrice: 'R$ 99,90',
    discount: '-54%',
    market: 'Mercado Livre',
    selo: 'Oferta',
    link: 'https://meli.la/2Ws9HoA',
    image: 'imgs/carregador-tipo-c.webp',
    featured: true,
    popular: true,
    tag: '🔥 Carga rápida'
  },

  {
    id: 30,
    name: 'Power Bank Turbo',
    desc: 'Bateria portátil para carregar seus dispositivos onde estiver.',
    cat: 'tech',
    icon: '🔋',
    price: 'R$ 91,72',
    oldPrice: 'R$ 159,90',
    discount: '-43%',
    market: 'Mercado Livre',
    selo: 'Oferta',
    link: 'https://meli.la/22nP7AL',
    image: 'imgs/portatil-power-bank.webp',
    featured: true,
    popular: true,
    tag: '🔥 Power Bank'
  },

  {
    id: 31,
    name: 'Seladora Portátil de Sacos',
    desc: 'Seladora recarregável com ímã para deixar na geladeira e fechar embalagens.',
    cat: 'tech',
    icon: '🧲',
    price: 'R$ 15,99',
    oldPrice: 'R$ 26,65',
    discount: '-40%',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/19qWlDbu3',
    image: 'imgs/selador-saco.webp',
    featured: true,
    popular: true,
    tag: '🧡 Achadinho'
  },

  {
    id: 32,
    name: 'Carregador Portátil Universal',
    desc: 'Carregador portátil universal para ter bateria extra sempre à mão.',
    cat: 'tech',
    icon: '🔌',
    price: 'R$ 95,59',
    market: 'Mercado Livre',
    selo: 'Achadinho',
    link: 'https://meli.la/198B6UY',
    image: 'imgs/carregador-gold.webp',
    featured: true
  },

  {
    id: 33,
    name: 'Carregador Portátil',
    desc: 'Carregador portátil com 3 entradas diferentes para facilitar o carregamento.',
    cat: 'tech',
    icon: '🔋',
    price: 'R$ 64,00',
    oldPrice: 'R$ 170,00',
    discount: '-62%',
    market: 'Mercado Livre',
    selo: 'Oferta',
    link: 'https://meli.la/2PemaQn',
    image: 'imgs/carregador-3tech.webp',
    featured: true,
    popular: true,
    tag: '⚡ Carga garantida'
  },

  {
    id: 34,
    name: 'Carregador de Carro Turbo',
    desc: 'Carregador turbo para carro com carregamento rápido durante suas viagens.',
    cat: 'tech',
    icon: '🚗',
    price: 'R$ 39,90',
    oldPrice: 'R$ 90,00',
    discount: '-56%',
    market: 'Mercado Livre',
    selo: 'Oferta',
    link: 'https://s.shopee.com.br/7fZG0Ke4zQ',
    image: 'imgs/carregador-carro.webp',
    featured: true,
    popular: true,
    tag: '🔥 Turbo'
  },

  {
    id: 35,
    name: 'Carregador para Iphone',
    desc: 'Achadinho de tecnologia por apenas R$ 19,90.',
    cat: 'tech',
    icon: '⚡',
    price: 'R$ 19,90',
    market: 'Shopee',
    selo: 'Achadinho',
    link: 'https://s.shopee.com.br/5ArW6VA0G0',
    image: 'imgs/carregador-iphone.webp',
    featured: true,
    popular: true,
    tag: '⚡ Não perca'
  },
  
];

// OFFERS: puxa automaticamente os produtos marcados com isOffer:true acima
// (os achadinhos com os maiores descontos / ofertas relâmpago).
const OFFERS = PRODUCTS.filter(p => p.isOffer).map(p => ({
  name:p.name, tag:p.offerTag, discount: p.discount || '🔥', icon:p.icon, market:p.market, link:p.link, image:p.image
}));

// COUPONS
const COUPONS = [

  {
    name: 'Cupom para Todo o App',
    code: 'Confira no link',
    market: 'Shopee',
    discount: 'Cupom de desconto',
    validade: 'Confira no link',
    link: 'https://s.shopee.com.br/4qEzvpGQwY'
  },

  {
    name: 'Cupom de Desconto Shopee',
    code: 'Confira no link',
    market: 'Shopee',
    discount: 'Cupom de desconto',
    validade: 'Confira no link',
    link: 'https://s.shopee.com.br/7AcZraaQtF'
  }
];

// INSTAGRAM
// img: caminho da imagem do post (coloque os arquivos na pasta imgs/)
const INSTA_POSTS = [
  { title:'Achei esse organizador incrível 🧺', link:'https://www.instagram.com/', img:'imgs/post1.jpeg' },
  { title:'Sua cozinha merece o melhor', link:'https://www.instagram.com/reel/Db8O4PtRctN/', img:'imgs/post2.jpeg' },
  { title:'O queridinho da semana 💗', link:'https://www.instagram.com/p/Db6qOmHxoy9/', img:'imgs/post3.jpeg' },
  { title:'Achadinho de cozinha imperdível 🍳', link:'https://www.instagram.com/p/Db317sfJtms/', img:'imgs/post4.jpeg' },
];

/* ===================== RENDER HELPERS ===================== */
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];

function categoryLabel(id){
  const c = CATEGORIES.find(c => c.id === id);
  return c ? c.label : id;
}

function productCard(p){
  const mediaContent = p.image
    ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">`
    : `<span>${p.icon}</span><span class="ph-label">📷 adicione a imagem do anúncio aqui</span>`;
  return `
  <article class="card" data-cat="${p.cat}">
    <a href="${p.link}" target="_blank" rel="noopener" class="card-media" style="background:linear-gradient(150deg,var(--peach-soft),var(--pink-soft));">
      ${mediaContent}
      <span class="badge-selo">💗 ${p.selo}</span>
      ${p.discount ? `<span class="badge-desconto">${p.discount}</span>` : ''}
    </a>
    <div class="card-body">
      <span class="card-market">${p.market}</span>
      <h3 class="card-name">${p.name}</h3>
      <p class="card-desc">${p.desc}</p>
      <div class="card-prices">
        ${p.oldPrice ? `<span class="price-old">${p.oldPrice}</span>` : ''}
        <span class="price-new">${p.price}</span>
      </div>
      <a href="${p.link}" target="_blank" rel="noopener" class="card-cta">Ver oferta →</a>
    </div>
  </article>`;
}

function renderCategories(){
  const wrap = $('#catScroller');
  wrap.innerHTML = `<button class="cat-pill active" data-cat="all"><span class="icon">🛍️</span><span class="label">Todos</span></button>` +
    CATEGORIES.map(c => `<button class="cat-pill" data-cat="${c.id}"><span class="icon">${c.icon}</span><span class="label">${c.label}</span></button>`).join('');

  $$('.cat-pill', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.cat-pill', wrap).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterFeatured(btn.dataset.cat);
      document.getElementById('achadinhos').scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
}

let currentFilter = 'all';
function filterFeatured(cat){
  currentFilter = cat;
  const grid = $('#featuredGrid');
  const list = PRODUCTS.filter(p => p.featured && (cat === 'all' || p.cat === cat));
  grid.innerHTML = list.length ? list.map(productCard).join('') : `<p style="color:var(--brown-soft)">Nenhum achadinho nessa categoria ainda — volte em breve! 💕</p>`;
  $('#clearFilter').style.display = cat === 'all' ? 'none' : 'inline-flex';
}

function renderPopular(){
  const grid = $('#popularGrid');
  const list = PRODUCTS.filter(p => p.popular);
  grid.innerHTML = list.map(p => productCard(p).replace('badge-selo">💗', `badge-selo">${p.tag ? p.tag.split(' ')[0] : '💗'}`)).join('');
}

function renderOffers(){
  const grid = $('#offerGrid');
  grid.innerHTML = OFFERS.map(o => {
    const media = o.image
      ? `<img src="${o.image}" alt="${o.name}" style="width:100%;height:100%;object-fit:cover;border-radius:16px;">`
      : `<span>${o.icon}</span>`;
    return `
    <a href="${o.link}" target="_blank" rel="noopener" class="offer-card">
      <div class="offer-media" style="background:linear-gradient(150deg,var(--peach-soft),var(--pink-soft));">
        <span class="offer-ribbon">${o.discount}</span>
        ${media}
      </div>
      <div class="offer-info">
        <span class="offer-tag">${o.tag}</span>
        <h3 class="offer-name">${o.name}</h3>
        <span style="font-size:0.78rem;color:var(--brown-soft);">${o.market}</span>
      </div>
      <span class="btn btn-outline btn-sm">Ver oferta</span>
    </a>`;
  }).join('');
}

function renderCoupons(){

  const grid = $('#couponGrid');

  grid.innerHTML = COUPONS.map(c => `

    <div class="coupon-card">

      <div class="coupon-top">

        <div>
          <span class="coupon-market">${c.market}</span>
          <h3 class="coupon-name">${c.name}</h3>
        </div>

        <span class="coupon-off">${c.discount}</span>

      </div>

      <div class="coupon-divider"></div>

      <div class="coupon-bottom">

        <div class="coupon-code-row">

          <span class="coupon-code">${c.code}</span>

          <button
            class="coupon-copy"
            data-link="${c.link}"
          >
            Copiar
          </button>

        </div>

        <span class="coupon-valid">${c.validade}</span>

        <a
          href="${c.link}"
          target="_blank"
          rel="noopener"
          class="btn btn-primary btn-sm btn-block"
        >
          Usar cupom
        </a>

      </div>

    </div>

  `).join('');

  $$('.coupon-copy', grid).forEach(btn => {

    btn.addEventListener('click', async () => {

      try {

        await navigator.clipboard.writeText(btn.dataset.link);

        const original = btn.textContent;

        btn.textContent = 'Copiado ✓';

        setTimeout(() => {
          btn.textContent = original;
        }, 1600);

      } catch(e) {
        console.error('Não foi possível copiar o link:', e);
      }

    });

  });

}
function renderInstagram(){
  const grid = $('#instaGrid');
  grid.innerHTML = INSTA_POSTS.map(post => `
    <a href="${post.link}" target="_blank" rel="noopener" class="insta-card">
      <div class="insta-image">
        <img src="${post.img}" alt="${post.title}">
      </div>
      <div class="insta-content">
        <span class="insta-icon">📷</span>
        <p>${post.title}</p>
        <span>Ver no Instagram →</span>
      </div>
    </a>`).join('');
}

/* ===================== INIT ===================== */
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  filterFeatured('all');
  renderPopular();
  renderOffers();
  renderCoupons();
  renderInstagram();

  $('#statProdutos').textContent = PRODUCTS.length;
  $('#year').textContent = new Date().getFullYear();

  $('#clearFilter').addEventListener('click', () => {
    $$('.cat-pill').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
    filterFeatured('all');
  });

  // navbar scroll shadow
  const nav = $('#navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  });

  // mobile menu
  const toggle = $('#navToggle');
  const links = $('#navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  $$('#navLinks a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  // reveal on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold:0.15 });
  $$('.reveal').forEach(el => io.observe(el));
});