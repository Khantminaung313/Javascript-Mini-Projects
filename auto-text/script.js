const text = document.querySelector('.heading');

let prog1 = [`I'm web designer`, `I'm web developer`];

// let prog = 'We have finished mini javascripts projects😍'
let index = 0;

getText()


function getText () {
    prog1.forEach(prog => {
        let idx = 1;
        
        function writeText() {
            text.innerHTML = prog.slice(0,idx);
            idx++
        
            // if(idx > prog.length) {
            //     setTimeout(() => {
            //     idx = 0;
            //     }, 800);
            // }
        }

        setInterval(() => {
            writeText()
        }, 150);
    });
}






