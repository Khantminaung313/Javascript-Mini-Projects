const hr = document.querySelector(".hr")
        const mn = document.querySelector(".mn")
        const sc = document.querySelector(".sc")

        const deg = 6;
        setInterval(() => {
            let day = new Date();
            let ms = day.getMilliseconds()*deg;
            let s = day.getSeconds()*deg;
            let m = day.getMinutes()*deg;

            let hh = day.getHours() * 30 + m / 12;
            let mm = day.getMinutes() * deg + s / 60; 
            let ss = day.getSeconds() * deg ;


            hr.style.transform = `rotateZ(${hh}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
        });