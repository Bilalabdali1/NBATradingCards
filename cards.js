let cards;
async function renderCards(filter){
const cardsWrapper = document.querySelector(".cards");
cardsWrapper.classList += ' cards__loading'
if(!cards){
cards=await getCards();

}
   cardsWrapper.classList.remove('cards__loading')

console.log(cards);
if(filter=="LOW_TO_HIGH"){
    cards.sort((a, b) => (a.salePrice||a.originalPrice) - (b.salePrice||b.originalPrice));
}
else if(filter=="HIGH_TO_LOW"){
cards.sort((a, b) => (b.salePrice||b.originalPrice) - (a.salePrice||a.originalPrice));

}
else if(filter=="RATING"){
    cards.sort((a, b) => (b.rating) - (a.rating));

}
 
const cardsHTML=cards.map(card=>{
    checkSaleHTML(card);
  return`
 <div class="card">
     <figure class="card__img--wrapper">
     <img src="${card.url}" class="card__img" alt="">
     </figure>
     <div class="card__title">
    <p>${card.title}</p> 
     
     </div>

     <div class="card__rating">
   ${ratingHTML(card.rating)}
     </div>
     <div class="card__price">
     ${checkSaleHTML(card)}
     </div>
      
     
     </div>
 
`
}).join('');
cardsWrapper.innerHTML=cardsHTML;
// booksWrapper.innerHTML= 

}
setTimeout(()=>{
renderCards();
console.log(ratingHTML(4.5));
});



function getCards(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
       {
            id:1,
            title:"2008 Topps NBA Russell Westbrook RC #199 PSA 10",
            url:"./assets/westbrookCard.jpg",
            originalPrice:90.99,
            salePrice:50.55,
            rating:4.5,
        },
         {
            id:2,
            title:"1986 Fleer Stickers #8 Michael Jordan RC PSA 7",
            url:"./assets/jordanCard.jpg",
            originalPrice: 105.95,
            salePrice: null,
            rating:5,
        },
         {
            id:3,
            title:"2022 NBA Mosaic #9 Kevin Durant PSA 9.5",
            url:"./assets/durantCard.jpg",
            originalPrice:45.99,
            salePrice:30.99,
            rating:4,
        },
         {
            id:4,
            title:"2019 KAWHI LEONARD GAME 7 RAPTORS PSA 9",
            url:"./assets/kawhi.jpg",
            originalPrice:50.99,
            salePrice:34.99,
            rating:5,
        },
         {
            id:5,
            title:"2021-22 Mosaic Purple Scottie Barnes",
            url:"./assets/scottie.jpg",
            originalPrice:24.99,
            salePrice:20.99,
            rating:4.5,
        },{
            id:6,
            title:"2019-20 Panini Kyle Lowry #155 PSA 8",
            url:"./assets/lowry.jpg",
            originalPrice:55.55,
            salePrice:15.99,
            rating:5,
        },
        {
            id:7,
            title:"LeBron James Panini Instant 2020 Lakers PSA 9",
            url:"./assets/lebron.jpg",
            originalPrice:35.99,
            salePrice:7.99,
            rating:4,
        },{
            id:8,
            title:"2017-18 Panini Instant Jayson Tatum 1st RC Rookie",
            url:"./assets/tatum.jpg",
            originalPrice:109.99,
            salePrice:25.99,
            rating:4,
        },
         {
            id:9,
            title:"DeMar DeRozan Signed 2009 Panini RC #309 (PSA)",
            url:"./assets/deozan.png",
            originalPrice:145.99,
            salePrice: null,
            rating:5,
        }, {
            id:9,
            title:"2020-21 Mosaic LaMelo Ball RC #262 PSA 9",
            url:"./assets/lamelo.jpg",
            originalPrice:5.99,
            salePrice: null,
            rating:4,
        }, {
            id:9,
            title:"1996 KOBE BRYANT Rookie RC PSA 10 ",
            url:"./assets/kobe.png",
            originalPrice:215.99,
            salePrice: null,
            rating:4.5,
        }, {
            id:9,
            title:"2018 Panini Optic LUKA DONCIC #177 RC",
            url:"./assets/luka.png",
            originalPrice:45.55,
            salePrice: null,
            rating:4.5,
        }, 
      ]);
    }, 1000);
  });
}

function filterCards(event){
        renderCards(event.target.value);
 }

function ratingHTML(rating){
let ratingHTML="";
 
for( let i=0;i<Math.floor(rating);i++){
    ratingHTML+=`<i class="fas fa-star"></i> \n`;
}
if(!Number.isInteger(rating)){
ratingHTML+=`<i class="fas fa-star-half-alt"></i>`;
}
return ratingHTML;
}

function checkSaleHTML(card){
    if(card.salePrice!=null){
 return `<span class="card__price--normal"> $${card.originalPrice}</span> $${card.salePrice}`
    }
  else{
    return `<span> $${card.originalPrice}</span>`
  }
 }