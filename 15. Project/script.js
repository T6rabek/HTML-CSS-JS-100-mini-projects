// const text = document.querySelector('.typed')
// const cursor = document.querySelector('.cursor')

// const words = ['best', 'awesome', 'true love', 'handsome', 'creative', 'dragon warrior']
// let index = 0;
// let charIndex = 0;

// document.addEventListener('DOMContentLoaded', () => {
//     if(words.length) {
//         setTimeout(type, 2000)
//     }
// })


// function type() {
//     if(charIndex < words[index].length) {
//         text.textContent += words[index].charAt(charIndex)
//         charIndex++;
//         setTimeout(type, 200)
//     } else {
//         setTimeout(erase, 2000)
//     }
// }

// function erase() {
//     if(charIndex > 0) {
//         text.textContent = words[index].substring(0, charIndex-1)
//         charIndex--;
//         setTimeout(erase, 200)
//     } else {
//         index++;
//         if(index >= words.length) {
//             index = 0;
//         }

//         setTimeout(type, 200 + 1100)
        
//     }
// }

const text = document.querySelector('.typed')

const words = ['BEST', 'CREATIVE', 'HANDSOME', 'TOP-G', 'REAL MAN']

let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    if(words.length) {
        setTimeout(type, 2000)
    }
})

function type() {
    if(charIndex < words[index].length) {
        text.textContent += words[index].charAt(charIndex)
        charIndex++;
        setTimeout(type, 50)
    } else {
        setTimeout(erase, 1000)
    }
}

function erase() {
    if(charIndex > 0) {
        text.textContent = words[index].substring(0, charIndex - 1)
        charIndex--;
        setTimeout(erase, 50)
    } else {
        index++;
        if(index >= words.length) {
            index = 0;

        }

        setTimeout(type, 1000)
    }
}