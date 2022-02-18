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
            resultIterate()
        }
}

let resultIterate = ()=>{
pic1.setAttribute('src', results[0].img)
pic2.setAttribute('src', results[1].img)
pic3.setAttribute('src', results[2].img)
text1.innerHTML = results[0].name
text2.innerHTML = results[1].name
text3.innerHTML = results[2].name
desc1.innerHTML = results[0].description
desc2.innerHTML = results[1].description
desc3.innerHTML = results[2].description
}
let resetAndPlay =()=>{
    games = 0
    results = []
    play()
}

luck.addEventListener('click', () => {
    home.style.display = 'none';
    carousel.style.display= 'none';
    animation.style.display= 'flex'
    setTimeout(() => {
        animation.style.display= 'none'
        carousel.style.display= 'flex'
    }, 3000)
    resetAndPlay()
})