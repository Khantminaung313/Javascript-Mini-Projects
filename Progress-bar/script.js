let prog = document.querySelectorAll('.progress');


setTimeout(() => {
    prog.forEach(fill => {
        fill.style.width = fill.dataset.width;
        fill.style.opacity = '1';
    });
}, 500);


