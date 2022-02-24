
// screens
let home = document.getElementById("home");
let carousel = document.getElementById("carousel");
let animation = document.getElementById("animation");
let showResults = document.getElementById("showResults");
let sectionResults = document.getElementById("sectionResults");

// all sections
let section = document.querySelectorAll("section");

// Buttons
let startAgain = document.getElementById("startAgain");
let btnResult = document.getElementById("btnResult");
let backToHome = document.getElementById("backToHome");
let saveBtn = document.getElementById("saveBtn");


let luck = document.getElementById("luck");
let pic1 = document.getElementById("pic1");
let text1 = document.getElementById("text1");
let desc1 = document.getElementById("desc1");
let pic2 = document.getElementById("pic2");
let text2 = document.getElementById("text2");
let desc2 = document.getElementById("desc2");
let pic3 = document.getElementById("pic3");
let text3 = document.getElementById("text3");
let desc3 = document.getElementById("desc3");
let pic4 = document.getElementById("pic4");
let text4 = document.getElementById("text4");
let desc4 = document.getElementById("desc4");
let pic5 = document.getElementById("pic5");
let text5 = document.getElementById("text5");
let desc5 = document.getElementById("desc5");
let pic6 = document.getElementById("pic6");
let text6 = document.getElementById("text6");
let desc6 = document.getElementById("desc6");


let cardsPlayer = document.querySelector('cardsPlayer')
let carouselInner = document.querySelector('carouselInner')
let divResults = document.getElementById("div-results");
let matchYN = document.getElementById("matchYN");
let previousGameList = document.getElementById("previous-game-list");
let previousGameUl = document.getElementById("previous-game-ul");
let cardPlayer = document.getElementById("card-player");
let resultPlayers = document.getElementById("resultPlayers");
let resultMatch = document.getElementById("resultMatch");
let playerForm = document.getElementById("player-form");

var games = 0;
let playerZ = ''
let playerX = '';
let previousGames = [];
let results = [];
let match = false;

// new
playerForm.addEventListener("submit", (e)=>{
e.preventDefault();
playerX = e.target.playerX.value 
playerZ = e.target.playerZ.value 

showPage(animation)
createGame();
playerForm.reset()
})

let showPage = (page, pos)=>{
    section.forEach((section)=>{
        section.style.display = 'none'

        page.style.display = 'flex'

        if(page === 'animationa'){
            setTimeout(()=>{
                showCards()
            }, 2500)
        }
        if(page.id === 'results'){
            showResult()
        }
    })
}

const createGame =() => {
    let newCards = []
    let template = ''
    let active = ''
    let j = 0
    let sum = 0
    let random = ''
    let save = false 

    while(newCards < 6){
        random = Math.round(Math.random() * data.length)
        if(newCards.indexOf(data[random]) == -1){
            newCards.push(data[random])
        }
    }


    sthCards = newCards

    newCards.forEach((card, index) =>{
        if(index === 0) active = 'active'
        else active = ''


    template +=  `
      <div class="carousel-item ${active}" id="card${index+1}" data-number="${index+1}">
      <img src="${card.img}" class="d-block" alt="${card.name}">
      <h5>${card.name}</h5>
          <p> ${card.description}</p>
      </div>`

    sum += card.match
    })

    if(sum % 2 === 0){
        match = true
    }else match = false

    carouselInner.innerHTML = template
    
    cardsPlayer.innerHTML  = `Card 1/3 of ${playerX}`

}




let randomNumber = (min, max) => {
  random = Math.round(Math.random() * (max - min) + min);
  return random;
};

let play = () => {
  let cards = data[randomNumber(1, 22)];
  if (results.indexOf(cards) == -1) {
    games++;
    results.push(cards);
  } else {
    console.log("this is repeted: ", cards.name);
  }
  if (games < 6) {
    play();
  } else {
    console.log(results);
    resultIterate(results);
    results.push(
      { playerZ: playerZ.value, playerX: playerX.value },
      { Match: true }
    );
    previousGames.push(results);
  }
};

let resultIterate = (completedGame) => {
  pic1.setAttribute("src", completedGame[0].img);
  pic2.setAttribute("src", completedGame[1].img);
  pic3.setAttribute("src", completedGame[2].img);
  pic4.setAttribute("src", completedGame[3].img);
  pic5.setAttribute("src", completedGame[4].img);
  pic6.setAttribute("src", completedGame[5].img);
  text1.innerHTML = `Card 1/3 of ${playerX.value}`;
  text2.innerHTML = `Card 2/3 of ${playerX.value}`;
  text3.innerHTML = `Card 3/3 of ${playerX.value}`;
  text4.innerHTML = `Card 1/3 of ${playerZ.value}`;
  text5.innerHTML = `Card 2/3 of ${playerZ.value}`;
  text6.innerHTML = `Card 3/3 of ${playerZ.value}`;
  desc1.innerHTML = completedGame[0].description;
  desc2.innerHTML = completedGame[1].description;
  desc3.innerHTML = completedGame[2].description;
  desc4.innerHTML = completedGame[3].description;
  desc5.innerHTML = completedGame[4].description;
  desc6.innerHTML = completedGame[5].description;
};

let playPrevious = (gameN) => {
  resultIterate(previousGames[gameN]);
  showResult();
};

let resetAndPlay = () => {
  games = 0;
  results = [];
  play();
};

let showResult = () => {
  home.style.display = "none";
  carousel.style.display = "none";
  animation.style.display = "flex";
};

luck.addEventListener("click", () => {
  resetAndPlay();
  showResult();
});

let back = () => {
  home.style.display = "none";
  carousel.style.display = "none";
  btnResult.style.display = "flex";
};

let setResult = () => {
  let itemResult = `<div class="card-detail">
                        <h5 class='h5-title'>${playerX.value}</h5>
                        <div >
                            <img src="${results[0].img}" class="icon-img" >
                            <img src="${results[1].img}" class="icon-img" >
                            <img src="${results[2].img}" class="icon-img" >
                        </div>
                       </div>
                       <div class="card-detail">
                        <h5 class='h5-title'>${playerZ.value}</h5>
                        <div>
                            <img src="${results[0].img}" class="icon-img" >
                            <img src="${results[1].img}" class="icon-img" >
                            <img src="${results[2].img}" class="icon-img" >
                        </div>
                       </div>
                        `;
  resultPlayers.innerHTML = itemResult;
};

showResults.addEventListener("click", () => {
  btnResult.style.display = "none";
  sectionResults.style.display = "flex";
  setResult();
  // if(match){
  //     matchYN.innerHTML = 'Si matchean perro de los naranjos'
  // }else{
  //     matchYN.innerHTML = 'No matchean perro de los naranjos'
  // }
});

startAgain.addEventListener("click", () => {
  btnResult.style.display = "none";
  home.style.display = "flex";
});

backToHome.addEventListener("click", () => {
  btnResult.style.display = "none";
  home.style.display = "flex";
});

let saveResults = () => {
  previousGameList.style.display = "block";
  previousGameUl.innerHTML += "PlaterZ and PlayerX    >Go>>";
};

saveBtn.addEventListener("click", () => {
  btnResult.style.display = "none";
  home.style.display = "flex";
  previousGameUl.innerHTML += saveResults();
});
