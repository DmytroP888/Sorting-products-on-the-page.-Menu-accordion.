// ------------------ Data source / Джерело даних ----------------

let descp = `LaModa (Ламода), торгующий изделиями самых разных производителей и торговых марок является одним из крупнейших и популярных в Украине. Кроме обуви здесь можно купить одежду, кожгалантерею и всевозможные аксессуары.`;

let imgProd0 = `https://image.jimcdn.com/app/cms/image/transf/divimension=682x2048:format=jpg/path/sebd3a6cf3ac46dc1/image/ie2454858c0490df1/version/1533590724/image.jpg`;
let imgProd1 = `https://image.jimcdn.com/app/cms/image/transf/divimension=682x2048:format=jpg/path/sebd3a6cf3ac46dc1/image/ie2260c2937e8f65c/version/1533590730/image.jpg`;
let imgProd2 = `https://image.jimcdn.com/app/cms/image/transf/divimension=682x2048:format=jpg/path/sebd3a6cf3ac46dc1/image/i9c32bd736e14151c/version/1533590742/image.jpg`;
let imgProd3 = `https://image.jimcdn.com/app/cms/image/transf/divimension=682x2048:format=jpg/path/sebd3a6cf3ac46dc1/image/iee7cfc8fa75b73ec/version/1533679266/image.jpg`;
let imgProd4 = `https://image.jimcdn.com/app/cms/image/transf/divimension=1920x400:format=jpg/path/sebd3a6cf3ac46dc1/image/ia7efa55598fbc522/version/1573989877/image.jpg`;
let imgProd5 = `https://image.jimcdn.com/app/cms/image/transf/divimension=682x2048:format=jpg/path/sebd3a6cf3ac46dc1/image/ie5f60cbe8f927fac/version/1533590730/image.jpg`;
let imgProd6 = `https://freever.ua/image/cache/catalog/image/cache/catalog/products/8011/8011-1-0-228x340.webp`;
let imgProd7 = `https://img.joomcdn.net/9a4663302a4a3fdef9b17e70223531af751a228e_original.jpeg`;
let imgProd8 = `https://static.staff-clothes.com/uploads/media/image_product/0002/42/d6c3df74d3174ffebbe944666e959343.jpeg`;
let imgProd9 = `https://zorrov.com/uploads/products/2021/08/product/161741/6124c813eb99a.jpg`;
let imgProd10 = `https://images.prom.ua/2489516917_w100_h100_detskij-sportivnyj-kostyum.jpg`;
let imgProd11 = `https://megasport.ua/ua/image/products/12_20211_586196_01_1_1625522673-6034ed8.jpg`;

let hrefProd0 = `https://answear.ua/p/armani-exchange-kedy-185704`;
let hrefProd1 = `https://estro.ua/uk/product/er00105993`;
let hrefProd2 = `https://welfare.ua/ua/female-shoes/high-boots/22-2550823-002-black-antic`;
let hrefProd3 = `https://soccerpoint.com.ua/kedy-converse-chuck-taylor-all-star-132173c-16925/`;
let hrefProd4 = `https://fmf.com.ua/anatomichni-sandali-foot-care-fa-107-r-36-sini/mfp/61-rozm-r,30,36,37,41,42`;
let hrefProd5 = `https://bott.com.ua/p769483419-krossovki-kozhanye-zhenskie.html`;
let hrefProd6 = `https://freever.ua/man/kurtki/kurtka-muzhskaya-zimnyaya-j8865-sinyaya?gclid=CjwKCAjwur-SBhB6EiwA5sKtjiNx3lKdm9IWquIKJ2auO38s294pmSttqOpZy7G9N4Cky4EDpggE7xoCiQAQAvD_BwE`;
let hrefProd7 = `https://www.joom.com/uk/products/5f817c1922e9f00106c5046c`;
let hrefProd8 = `https://www.staff-clothes.com/ua/dzhinsy-staff-all-c2/ffk0290/?utm_source=googleua&utm_source=googleua&utm_medium=cpa&utm_campaign=tovarka_high&utm_content=&utm_term=&target=&placement=&creative=342682437281&network=u&gclid=CjwKCAjwur-SBhB6EiwA5sKtjjI6fqPJx-f8CNEAt2xbqTcn0N4cb7JmDHK9Q1imUG-WjfFIY3-rLxoCoFkQAvD_BwE`;
let hrefProd9 = `https://zorrov.com/product/futbolka-muzhskaia-chernaia-khlopok-elastan-samurai-l?gclid=CjwKCAjwur-SBhB6EiwA5sKtjg2I0umxfKt8N9EWAAipr7in0CBdh9RP5WaZVOriQISpJ3DMnQtJtRoCPcgQAvD_BwE`;
let hrefProd10 = `https://polinline.com.ua/p1217953761-detskij-sportivnyj-kostyum.html`;
let hrefProd11 = `https://megasport.ua/ru/product/modern-sports-shorts_586196-01/?gclid=CjwKCAjwur-SBhB6EiwA5sKtjs84rxYKOVl-Gbgs3e83WCwq56fmbhC9G6AOjDdwgzmm_sot6xyhKhoC0_EQAvD_BwE`;


// ---------------- Data array / Массив даних ----------------
const products = [
    { id: 'prod0', type: 'взуття', category: 'кросівки', season: 'осінь', sex: 'чоловічі', description: '${descp}', img: `${imgProd0}`, href: `${hrefProd0}` },
    { id: 'prod1', type: 'взуття', category: 'черевики', season: 'осінь', sex: 'чоловічі', description: '${descp}', img: `${imgProd1}`, href: `${hrefProd1}` },
    { id: 'prod2', type: 'взуття', category: 'чоботи', season: 'осінь', sex: 'жіночі', description: '${descp}', img: `${imgProd2}`, href: `${hrefProd2}` },
    { id: 'prod3', type: 'взуття', category: 'кросівки', season: 'літо', sex: 'чоловічі', description: '${descp}', img: `${imgProd3}`, href: `${hrefProd3}` },
    { id: 'prod4', type: 'взуття', category: 'босоніжки', season: 'літо', sex: 'жіночі', description: '${descp}', img: `${imgProd4}`, href: `${hrefProd4}` },
    { id: 'prod5', type: 'взуття', category: 'туфлі', season: 'осінь', sex: 'чоловічі', description: '${descp}', img: `${imgProd5}`, href: `${hrefProd5}` },
    { id: 'prod6', type: 'одяг', category: 'куртка', season: 'зима', sex: 'чоловічі', description: '${descp}', img: `${imgProd6}`, href: `${hrefProd6}` },
    { id: 'prod7', type: 'одяг', category: 'куртка', season: 'зима', sex: 'жіночі', description: '${descp}', img: `${imgProd7}`, href: `${hrefProd7}` },
    { id: 'prod8', type: 'одяг', category: 'джинси', season: 'літо', sex: 'чоловічі', description: '${descp}', img: `${imgProd8}`, href: `${hrefProd8}` },
    { id: 'prod9', type: 'одяг', category: 'футболка', season: 'літо', sex: 'чоловічі', description: '${descp}', img: `${imgProd9}`, href: `${hrefProd9}` },
    { id: 'prod10', type: 'одяг', category: 'костюм', season: 'літо', sex: 'дитячий', description: '${descp}', img: `${imgProd10}`, href: `${hrefProd10}` },
    { id: 'prod11', type: 'одяг', category: 'шорти', season: 'літо', sex: 'чоловічі', description: '${descp}', img: `${imgProd11}`, href: `${hrefProd11}` }
];