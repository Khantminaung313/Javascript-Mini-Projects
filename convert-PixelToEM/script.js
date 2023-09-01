let px = document.querySelector('#pixel')
let em = document.querySelector('#em')
let reset = document.querySelector('.reset')

const pxToEm = () => {
    const pxVal = px.value;
    if(pxVal != 0) {
        em.value = pxVal / 16;
    } else {
        em.value = '';
    }
}

const emToPx = () => {
    const emVal = em.value;
    if(emVal != 0) {
        px.value = emVal * 16 ;
    } else {
        px.value = '';
    }
}

reset.addEventListener('click', () => {
    em.value = '';
    px.value = '';
})

em.oninput = emToPx;
px.oninput = pxToEm; 

