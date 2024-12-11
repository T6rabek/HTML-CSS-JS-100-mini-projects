const btn = document.querySelector('.btn')
const hex = document.querySelector('.hex-code')

function randomColor() {
    let letters = '0123456789abcdef'
    let hash = '#'
    for(i = 0; i < 6; i++) {
        hash += letters[Math.floor(Math.random()*16)]
    }

    return hash
}

btn.addEventListener('click', () => {
    document.body.style.background = randomColor()
    hex.innerHTML = randomColor()
})