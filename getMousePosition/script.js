let container = document.querySelector('.container');

window.addEventListener('mousemove', (e) => {
    let xpos = e.clientX;
    let ypos = e.clientY;
    container.innerHTML = `<div> <span>X: </span>${xpos}</div>
                           <div> <span>Y: </span>${ypos}</div>`
})