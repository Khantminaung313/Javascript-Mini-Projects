const inputext = document.querySelector('.textarea');
const wCount = document.querySelector('.word-count');
const cCount = document.querySelector('.chars-count');

inputext.addEventListener('input', () => {
    cCount.textContent = inputext.value.length;

    let txt = inputext.value.trim();
    wCount.textContent = txt.split(/\s+/).filter((item) => item).length;
})