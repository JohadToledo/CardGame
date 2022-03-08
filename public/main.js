let form = document.querySelector("#player-form");
let playerZ = "";
let playerX = "";

let section = document.querySelectorAll(".section");
let home = document.querySelector(".home");
let carousel = document.querySelector(".carousel");
let animation = document.querySelector(".animation");
let btnResult = document.querySelector(".btnResult");
let results = document.querySelector(".results");

let carouselInner = document.querySelector(".carousel-inner");
let carouselGame = document.querySelector("#carouselGame");
let carouselPlayerName = document.querySelector("#carouselPlayerName");
let btnContinue = document.querySelector("#btnContinue");

let listX = document.querySelector(".listX");
let listXPlayerName = document.querySelector(".listX h3");
let listXPlayerCards = document.querySelector(".listX ul");
let listZ = document.querySelector(".listZ");
let listZPlayerName = document.querySelector(".listZ h3");
let listZPlayerCards = document.querySelector(".listZ ul");
let matchResult = document.querySelector(".matchResult");
let previousGame = document.querySelector(".previousGame");

let saveBtn = document.getElementById("saveBtn");
let backToHome = document.getElementById("backToHome");

let allGames = [];
let currentGame = [];
let matchBool = false;
let position = 0

const showPage = (page) => {
  section.forEach((page) => {
    page.style.display = "none";
  });
  page.style.display = "block";

  if (page === animation) {
    setTimeout(() => {
      showPage(carousel);
    }, 2500);
  }
};

const startGame = () => {
  currentGame = []
  let random = 0;
  let slide = "";
  let active = "";
  while (currentGame.length < 6) {
    random = Math.floor(Math.random() * data.length);
    if (currentGame.indexOf(data[random]) == -1) {
      currentGame.push(data[random]);
    }
  }
  
  currentGame.forEach((card, index) => {
    if (index == 0) active = "active";
    else active = "";

    slide += `<div class="carousel-item ${active}" data-index='${index + 1}'>
                    <img src=${card.img} class="d-block" alt="${card.name}" >
                    <h5>${card.name}</h5>
                    <p> ${card.description}</p>
                </div>`;
  });
  carouselPlayerName.innerHTML = `Card 1/3 of ${playerX}`;
  carouselInner.innerHTML = slide;
};

carouselGame.addEventListener("slide.bs.carousel", function (e) {
  let cardNumber = e.relatedTarget.getAttribute("data-index");
  if (cardNumber <= 3) {
    carouselPlayerName.innerHTML = `Card ${cardNumber}/3 of ${playerX}`;
  }
  if (cardNumber > 3 && cardNumber <= 6) {
    carouselPlayerName.innerHTML = `Card ${cardNumber - 3}/3 of ${playerZ}`;
  }
});

const showResults = (position) => {
  let sum = 0;
  
  listXPlayerCards.innerHTML = ``
  listZPlayerCards.innerHTML = ``

  if(position){
      currentGame = allGames[position]
  }
  currentGame.forEach((card, index) => {
    if (index < 3) {
      listXPlayerCards.innerHTML += `<li><img class='' src='${card.img}'/></li>`;
    } else {
      listZPlayerCards.innerHTML += `<li><img class='' src='${card.img}'/></li>`;
    }
    sum = sum + card.match;
  });
  if (sum % 2 == 0) {
    //     console.log('match YES')
    matchBool = true;
    matchResult.innerHTML = "💗";
  } else {
    // console.log('match NO')
    matchBool = false;
    matchResult.innerHTML = "💔";
  }
  console.log(sum);
  listXPlayerName.innerHTML = `${playerX}`;
  listZPlayerName.innerHTML = `${playerZ}`;
  
};

const resetScreen = () => {
    listXPlayerCards.innerHTML = ``
    listZPlayerCards.innerHTML = ``
}

previousGame.addEventListener("click", (e)=>{
    if (e.target.getAttribute('data-position')){
        let pos = e.target.getAttribute('data-position');
        playerX = e.target.getAttribute('data-pX');
        playerZ = e.target.getAttribute('data-pZ');
        matchBool = e.target.getAttribute('data-match');

        showResults(e.target.getAttribute('data-position'))
        showPage(results)
    }
})

const saveGame = (playerX, playerZ, matchBool) => {

 allGames.push(currentGame);
 previousGame.innerHTML += `<li>${playerX} & ${playerZ} - '${matchBool}' 
 <button data-pX="${playerX}" data-pZ="${playerZ}" data-match="${matchBool}" data-position="${position++}">See game</button></li>`
 currentGame = []
}

btnContinue.addEventListener("click", (e) => {
  showResults();
  showPage(results);
});

saveBtn.addEventListener("click", (e) => {
  saveGame(playerX, playerZ, matchResult);
  showPage(home)
})

backToHome.addEventListener("click", (e) => {
    showPage(home)
})

form.addEventListener("submit", (e) => {
  e.preventDefault();

  playerX = e.target.playerX.value;
  playerZ = e.target.playerZ.value;
  showPage(animation);
  startGame();
  form.reset();
});
