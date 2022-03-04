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

// new
// playerForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     playerX = e.target.playerX.value 
//     playerZ = e.target.playerZ.value 
    
//     showPage(animation)
//     createGame();
//     playerForm.reset()
//     })
    
//     let showPage = (page, pos)=>{
//         section.forEach((section)=>{
//             section.style.display = 'none'
    
//             page.style.display = 'flex'
    
//             if(page === 'animationa'){
//                 setTimeout(()=>{
//                     showCards()
//                 }, 2500)
//             }
//             if(page.id === 'results'){
//                 showResult()
//             }
//         })
//     }
    
//     const createGame =() => {
//         let newCards = []
//         let template = ''
//         let active = ''
//         let j = 0
//         let sum = 0
//         let random = ''
//         let save = false 
    
//         while(newCards < 6){
//             random = Math.round(Math.random() * data.length)
//             if(newCards.indexOf(data[random]) == -1){
//                 newCards.push(data[random])
//             }
//         }
    
    
//         sthCards = newCards
    
//         newCards.forEach((card, index) =>{
//             if(index === 0) active = 'active'
//             else active = ''
    
    
//         template +=  `
//           <div class="carousel-item ${active}" id="card${index+1}" data-number="${index+1}">
//           <img src="${card.img}" class="d-block" alt="${card.name}">
//           <h5>${card.name}</h5>
//               <p> ${card.description}</p>
//           </div>`
    
//         sum += card.match
//         })
    
//         if(sum % 2 === 0){
//             match = true
//         }else match = false
    
//         carouselInner.innerHTML = template
        
//         cardsPlayer.innerHTML  = `Card 1/3 of ${playerX}`
    
//     } 