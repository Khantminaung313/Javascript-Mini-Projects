const bullets = document.querySelectorAll('.bullet');
const nextbtn = document.querySelector('.next-btn');
const prevbtn = document.querySelector('.prev-btn');

const maxStep = 4;
let current_step = 1;

nextbtn.addEventListener('click', () => {
    let currentBullet = bullets[current_step-1];
    currentBullet.classList.add('completed');
    prevbtn.disabled = false;
    current_step++
    if(current_step === maxStep) {
        nextbtn.disabled = true;
    }
})

prevbtn.addEventListener('click', () => {
    let currentBullet = bullets[current_step-2];
    currentBullet.classList.remove('completed');
    nextbtn.disabled = false;
    current_step--
    if(current_step === 1) {
        prevbtn.disabled = true;
    }
})