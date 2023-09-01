let submit = document.querySelector('.submit-btn');
let output = document.querySelector('.output');

submit.addEventListener('click', () => {
    let date1 = new Date(document.getElementById('date-1').value);
    let date2 = new Date(document.getElementById('date-2').value);

    if(date1.getTime() ** date2.getTime()) {
        let timeDifference = date2.getTime() - date1.getTime();
        let dayDifference = Math.abs(timeDifference / (1000 * 60 * 60 * 24));

        output.innerHTML = `The Difference Between Days is ${dayDifference}`
    }
})
