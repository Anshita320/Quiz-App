const quizData = [
  {
    question: "1. Which Javascript feature will let you create push notifications",
    a: "Ajax",
    b: "JQuery",
    c: "Event listener",
    d: "Service worker",
    correct: "d"
  },
  {
    question: "2. The latest HTML standard is",
    a: "SGML",
    b: "HTML 5.0",
    c: "XML",
    d: "HTML 4.0",
    correct: "b"
  },
  {
    question: "3. The stylesheet file will not be loaded by the browser if you omit_____",
    a: "REL",
    b: "STYLE",
    c: "BODY",
    d: "HTML",
    correct: "a"
  },
  {
    question: "4. Which HTML tag is used to create a hyperlink?",
    a: "<link>",
    b: "<a>",
    c: "<hyperlink>",
    d: "<href>",
    correct: "b"
},
   {
    question: "5. Which of the following programming languages is commonly used for server-side scripting in web development?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "d"
   },
   {
    question: "6. Which of the following is used to read a HTML page and render it?",
    a: "Web server",
    b: "Web matrix",
    c: "Web browser",
    d: "None of the above",
    correct: "c"
   },
   {
    question: "7. Which of the following is a popular front-end framework for building user interfaces in JavaScript?",
    a: "Django",
    b: "Angular",
    c: "Flask",
    d: "Node.js",
    correct: "b"
   },
   {
    question: "8. What does <td> stand for?",
    a: "Table database",
    b: "Table data",
    c: "Table directory",
    d: "Table direct row",
    correct: "b"
   },
   {
    question: "9. Which element is used to give title to a table?",
    a: "Caption",
    b: "Headline",
    c: "Title",
    d: "Heading",
    correct: "a"
   },
   {
    question: "10. What is Vue JS?",
    a: "Scripting Language",
    b: "A framework",
    c: "Programming Language",
    d: "Directives",
    correct: "b"
   },
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const quiz = document.getElementById("quiz");
const instructions = document.getElementById("instructions");
const questionBlock = document.getElementById("question-block");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  quiz.style.display = "block";
  instructions.style.display = "none";     
  questionBlock.style.display = "block";  
  loadQuiz();  
});

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answersEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answersEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
   if (!answer) {
    alert("Please select an answer!");
    return;
   }

    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly 🎉</h2>
        <button onclick="location.reload()">Restart Quiz</button>
      `;
    }
});