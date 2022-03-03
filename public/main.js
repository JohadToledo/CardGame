let form = document.querySelector('#player-form')
let playerZ = ''
let playerX = ''

let pages = document.querySelectorAll('.section')

form.addEventListener('submit', (e) => {
e.preventDefault()

playerX = e.target.playerX.value
playerZ = e.target.playerZ.value

form.reset()
})