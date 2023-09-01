const container = document.querySelector('.container');

let circleArr = [];
let rows = 15;
let cols = 15;

for(let i = 0; i < rows; i++) {
    circleArr[i] = [];
    for(let j = 0; j < cols; j++) {
        let circle = document.createElement('div');
        circle.classList.add('circle');
        container.appendChild(circle);
        circleArr[i].push(circle);
    }
}

circleArr.forEach((cols, i) => {
    cols.forEach((circle, j) => {
        circle.addEventListener('click', () => {
            circleGrow(i,j);
        })
    })
})

function circleGrow(i, j) {
    if(circleArr[i] && circleArr[i][j] && !circleArr[i][j].classList.contains('grow')) {
        circleArr[i][j].classList.add('grow');

        setTimeout(() => {
            circleGrow(i - 1, j)
            circleGrow(i + 1, j)
            circleGrow(i, j - 1)
            circleGrow(i, j + 1)
        }, 100); 

        setTimeout(() => {
            circleArr[i][j].classList.remove('grow');
        }, 250);
    }
}






















// let circleArr = [];
// let rows = 15;
// let cols = 15;

// for(let i = 0; i < rows; i++){
//     circleArr[i] = [];
//     for(let j = 0; j < cols; j++) {
//         const circle = document.createElement('div');
//         circle.classList.add('circle');
//         container.appendChild(circle);
//         circleArr[i].push(circle);
//     }
// }

// circleArr.forEach((cols,i) => {
//     cols.forEach((circle,j) => {
//         circle.addEventListener('click', () => {
//             growCircle(i, j)
//         })
//     })
// })

// function growCircle(i,j) {
//     if(circleArr[i] && circleArr[i][j] && !circleArr[i][j].classList.contains('grow')){
//         circleArr[i][j].classList.add('grow');
//         setTimeout(() => {
//             growCircle(i - 1, j);
//             growCircle(i + 1, j);
//             growCircle(i, j - 1);
//             growCircle(i, j + 1);
//         }, 100);

//         setTimeout(() => {
//         circleArr[i][j].classList.remove('grow');
//         }, 400);
//     }
// }