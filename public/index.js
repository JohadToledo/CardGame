var games = 0
let results = []
let home = document.getElementById('home')
let carousel = document.getElementById('carousel')
let animation = document.getElementById('animation')
let luck = document.getElementById('luck')
let pic1 = document.getElementById('pic1')
let text1 = document.getElementById('text1')
let desc1 = document.getElementById('desc1')
let pic2 = document.getElementById('pic2')
let text2 = document.getElementById('text2')
let desc2 = document.getElementById('desc2')
let pic3 = document.getElementById('pic3')
let text3 = document.getElementById('text3')
let desc3 = document.getElementById('desc3')
let pic4 = document.getElementById('pic4')
let text4 = document.getElementById('text4')
let desc4 = document.getElementById('desc4')
let pic5 = document.getElementById('pic5')
let text5 = document.getElementById('text5')
let desc5 = document.getElementById('desc5')
let pic6 = document.getElementById('pic6')
let text6 = document.getElementById('text6')
let desc6 = document.getElementById('desc6')
let previousGames = []
let playerX = document.getElementById('playerX')
let playerZ = document.getElementById('playerZ')
let showResults = document.getElementById('showResults')
let startAgain = document.getElementById('startAgain')
let divResults = document.getElementById('div-results')
let matchYN = document.getElementById('matchYN')
let btnResult = document.getElementById('btnResult')
let previousGameList = document.getElementById('previous-game-list')
let cardPlayer = document.getElementById('card-player')
let sectionResults = document.getElementById('sectionResults')
let match = null


let randomNumber = (min, max) => {
    random = Math.round(Math.random() * (max - min) + min)
    return random
}

let play = () => {
    let cards = data[randomNumber(1, 22)]
    if(results.indexOf(cards) == -1){
        games++
        results.push(cards)
    }else{
        console.log("this is repeted: ", cards.name)
    }
        if(games < 6){
            play()
        }else{
            console.log(results)
            resultIterate(results)
            results.push({playerZ: playerZ.value , playerX: playerX.value}, {Match: true})
            previousGames.push(results)
        }
}

let resultIterate = (completedGame)=>{
pic1.setAttribute('src', completedGame[0].img)
pic2.setAttribute('src', completedGame[1].img)
pic3.setAttribute('src', completedGame[2].img)
pic4.setAttribute('src', completedGame[3].img)
pic5.setAttribute('src', completedGame[4].img)
pic6.setAttribute('src', completedGame[5].img)
text1.innerHTML = `Card 1/3 of ${playerZ.value}`
text2.innerHTML = `Card 2/3 of ${playerZ.value}`
text3.innerHTML = `Card 3/3 of ${playerZ.value}`
text4.innerHTML = `Card 1/3 of ${playerX.value}`
text5.innerHTML = `Card 2/3 of ${playerX.value}`
text6.innerHTML = `Card 3/3 of ${playerX.value}`
desc1.innerHTML = completedGame[0].description
desc2.innerHTML = completedGame[1].description
desc3.innerHTML = completedGame[2].description
desc4.innerHTML = completedGame[3].description
desc5.innerHTML = completedGame[4].description
desc6.innerHTML = completedGame[5].description
}

let playPrevious =(gameN)=>{
    resultIterate(previousGames[gameN])
    showResult()
}

let resetAndPlay =()=>{
    games = 0
    results = []
    play()
}

let showResult =()=>{
    home.style.display = 'none';
    carousel.style.display= 'none';
    animation.style.display= 'flex'
    setTimeout(() => {
        animation.style.display= 'none'
        carousel.style.display= 'flex'
    }, 3000)
}

luck.addEventListener('click', () => {
    resetAndPlay()
    showResult()
})

let back =()=>{
    home.style.display= 'none'
    carousel.style.display= 'none'
    btnResult.style.display= 'flex'
}


showResults.addEventListener('click', ()=>{
    console.log('home')
    btnResult.style.display= 'none'
    sectionResults.style.display= 'flex'


    // if(match){
    //     matchYN.innerHTML = 'Si matchean perro de los naranjos'
    // }else{
    //     matchYN.innerHTML = 'No matchean perro de los naranjos'
    // }
})

startAgain.addEventListener('click', ()=>{
    btnResult.style.display = 'none'
    home.style.display= 'flex'
})