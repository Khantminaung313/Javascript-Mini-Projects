let counter = document.querySelector('.counter')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let reset = document.querySelector('.reset')

let count = 0;

plus.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
})

minus.addEventListener('click', () => {
    count--;
    counter.innerHTML = count;
})

reset.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count;
})