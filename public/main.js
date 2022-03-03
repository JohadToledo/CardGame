let form = document.querySelector('#player-form')
let playerZ = ''
let playerX = ''

let section = document.querySelectorAll('.section')
let carousel = document.querySelector('.carousel')
let animation = document.querySelector('.animation')
let btnResult = document.querySelector('.btnResult')
let results = document.querySelector('.results')


let carouselInner = document.querySelector('.carousel-inner')



let allGames = []

const showPage = (page) =>{
    section.forEach((page) =>{
        page.style.display = 'none'
    })
    page.style.display = 'block'

    if(page === animation){
        setTimeout(() => {
            showPage(carousel)
        }, 2500)
    }
}

const startGame = () =>{
    let currentGame = []
    let random = 0
    let slide = ''
    let active = ''
    while (currentGame.length < 6){
        random = Math.floor(Math.random() * data.length)
            if(currentGame.indexOf(data[random]) == -1){
                currentGame.push(data[random])
        }
    }
    
    currentGame.forEach((card, index)=>{
        if(index == 0)active = 'active'
        else active = ''
         
        slide += `<div class="carousel-item ${active}">
                    <img src=${card.img} class="d-block" alt="${card.name}" >
                    <h5>${card.name}</h5>
                    <p> ${card.description}</p>
                </div>`
    })
    
    carouselInner.innerHTML = slide

}



form.addEventListener('submit', (e) => {
e.preventDefault()

playerX = e.target.playerX.value
playerZ = e.target.playerZ.value
showPage(animation)
startGame()
form.reset()
})
