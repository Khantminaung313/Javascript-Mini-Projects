function clock(){
    let seconds = document.querySelector('.seconds')
    let minutes = document.querySelector('.minutes')
    let hour = document.querySelector('.hour')
    let ampm = document.querySelector('.ampm')

    let s = new Date().getSeconds();
    let m = new Date().getMinutes();
    let h = new Date().getHours();
    var am = 'AM';

    if(h>12) {
        h = h-12;
        var am = 'PM'
    }

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    seconds.innerHTML = s;
    minutes.innerHTML = m;
    hour.innerHTML = h;
    ampm.innerHTML = am;
}

let interval = setInterval(clock,1000)