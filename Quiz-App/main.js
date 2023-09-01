const quizData = [
  {
    question: `The meaning of KMA?`,
    a: `Kyaw Min Aye`,
    b: `Khin Mya Aye`,
    c: `Khant Min Aung`,
    d: `Khin Maung Aye`,
    correct: `c`,
  },
  {
    question: `What is js?`,
    a: `JSON`,
    b: `Jhon Son`,
    c: `Joe Set`,
    d: `Javascript`,
    correct: `d`,
  },
  {
    question: `What is the meaning of HTML?`,
    a: `Hyper test market language`,
    b: `Hyper text markup language`,
    c: `Hyper text market language`,
    d: `Hyper text markup league`,
    correct: `b`,
  },
];

const question = document.querySelector(".question");
const btn = document.querySelector(".submit");

let currentQuiz = 0;

getQuizData();

function getQuizData() {
  deSelected()
  let currentQuizData = quizData[currentQuiz];

  question.innerHTML = currentQuizData.question;
  document.querySelector(".answer-a").innerHTML = currentQuizData.a;
  document.querySelector(".answer-b").innerHTML = currentQuizData.b;
  document.querySelector(".answer-c").innerHTML = currentQuizData.c;
  document.querySelector(".answer-d").innerHTML = currentQuizData.d;
}

let score = 0;

function getSelected() {
  let answer = undefined;
  const answers = document.querySelectorAll(".answer-check");
  answers.forEach((ans) => {
    if (ans.checked) {
      answer = ans.value;
    }
  });
  return answer;
}

function deSelected() {
  const answers = document.querySelectorAll(".answer-check");
  answers.forEach((ans) => {
    ans.checked = false;
  });
}

btn.addEventListener('click', () => {
  let answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      getQuizData();

    } else {
      const result = document.querySelector(".text-box");
      result.innerHTML = `<h2>Your got ${score}/${quizData.length} score</h2>`;
      btn.innerHTML = `<button onclick="location.reload();">Reload</button>`;
    }
  }
})

// function submit() {
//   let answer = getSelected();
//   if (answer) {
//     if (answer === quizData[currentQuiz].correct) {
//       score++;
//     }
//     currentQuiz++;
//     if (currentQuiz < quizData.length) {
//       getQuizData();

//     } else {
//       const result = document.querySelector(".text-box");
//       result.innerHTML = `<h2>Your got ${score}/${quizData.length} score</h2>`;
//       btn.innerHTML = `<button onclick="location.reload();">Reload</button>`;
//     }
//   }
// }
