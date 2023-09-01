let textbox = document.querySelector('.textbox')
let reset = document.querySelector('.reset')

reset.addEventListener('click', () => {
    textbox.innerHTML = "Press any key to detect keypress"
})

window.addEventListener('keydown', (e) => {
    textbox.innerHTML = `The press key is <h2>${e.key}</h2> <p>the key code is ${e.keyCode}</p> `
})

