let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function countdown() {
    let newYear = '1 jan 2024';
    let newYearDate = new Date(newYear);
    let currentDate = new Date();

    const milisec = Math.floor(newYearDate - currentDate) / 1000;
    const m = Math.floor(milisec / 60) % 60;
    const h = Math.floor(milisec / 3600) % 24;
    const d = Math.floor(milisec / 3600 / 24);
    const s = Math.floor(milisec) % 60;


    days.innerHTML = diffFormat(d);
    hours.innerHTML = diffFormat(h);
    minutes.innerHTML = diffFormat(m);
    seconds.innerHTML = diffFormat(s);

    function diffFormat(time) {
        return time < 10 ? `0${time}` : time;
    }
}

countdown();

setInterval(() => {
    countdown()
}, 1000);