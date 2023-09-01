const colors = ['#a74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#f2e335', '#ef4a92'];

const container = document.querySelector('.container');

const SQUARE_NR = 300;

for( let i = 0; i < SQUARE_NR ; i++) {
    let square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColorEl(square);
    })

    square.addEventListener('mouseout', () => {
        removeColorEl(square);
    })
    container.appendChild(square);
}

function setColorEl(el) {
    let color = getColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 4px ${color}, 0 0 4px ${color}`;
}

function removeColorEl(el) {
    el.style.backgroundColor = `#000`;
    el.style.boxShadow = `0 0 2px #fff`;
}

function getColor () {
    return colors[Math.floor(Math.random() * colors.length)]
}