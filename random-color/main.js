window.onload = () => {
    addColor();
}

for(let i = 0 ; i < 9 ; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box)
}

function randomHexColor () {
    let chars = '0123456789ABCDEF';
    let clength = chars.length;
    let color = '';

    for(let i = 0 ; i < 6 ; i++) {
        let randomColor = Math.floor(Math.random() * clength);
        color += chars.substring(randomColor, randomColor +1)
    }
    return `#` + color;
}

let btn = document.querySelector('.btn');
let boxs = document.querySelectorAll('.box');

function addColor() {
    boxs.forEach(e => {
        let newColor = randomHexColor();
        e.style.backgroundColor = newColor;
        e.textContent = newColor;
    });
}


