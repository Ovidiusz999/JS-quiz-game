//variables

let question = document.getElementById("question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let submit = document.getElementById("submit");

//questions

const questions = [
  {
    question: "What's the capital of France?",
    options: ["Berlin", "Paris", "Rome", "Madrid"],
    correctAnswer: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: 0
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Beijing", "Seoul", "Shanghai"],
    correctAnswer: 0
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    correctAnswer: 0
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: 0
  },
  {
    question: "What's the largest mammal on Earth?",
    options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    correctAnswer: 0
  },
  {
    question: "In which year did World War II end?",
    options: ["1945", "1918", "1939", "1941"],
    correctAnswer: 0
  },
];

//Random

let randomIndex = Math.floor(Math.random() * questions.length);
const randomQuestion = questions[randomIndex];

//text changer pre steps

question.innerHTML = randomQuestion.question;
answer1.innerHTML = randomQuestion.options[0];
answer2.innerHTML = randomQuestion.options[1];
answer3.innerHTML = randomQuestion.options[2];
answer4.innerHTML = randomQuestion.options[3];

let x = 99;
console.log(randomQuestion.correctAnswer)

answer1.addEventListener("click", () => {
  answer1.style.backgroundColor = "white";
  answer2.style.backgroundColor = "rgb(54, 25, 82)";
  answer3.style.backgroundColor = "rgb(54, 25, 82)";
  answer4.style.backgroundColor = "rgb(54, 25, 82)";

  answer1.style.color = "rgb(54, 25, 82)";
  answer2.style.color = "white";
  answer3.style.color = "white";
  answer4.style.color = "white";

  x = 0
  console.log(x)
});

answer2.addEventListener("click", () => {
  answer1.style.backgroundColor = "rgb(54, 25, 82)";
  answer2.style.backgroundColor = "white";
  answer3.style.backgroundColor = "rgb(54, 25, 82)";
  answer4.style.backgroundColor = "rgb(54, 25, 82)";

  answer1.style.color = "white";
  answer2.style.color = "rgb(54, 25, 82)";
  answer3.style.color = "white";
  answer4.style.color = "white";

  x = 1
});

answer3.addEventListener("click", () => {
  answer1.style.backgroundColor = "rgb(54, 25, 82)";
  answer2.style.backgroundColor = "rgb(54, 25, 82)";
  answer3.style.backgroundColor = "white";
  answer4.style.backgroundColor = "rgb(54, 25, 82)";

  answer1.style.color = "white";
  answer2.style.color = "white";
  answer3.style.color = "rgb(54, 25, 82)";
  answer4.style.color = "white";

  x = 2
});

answer4.addEventListener("click", () => {
  answer1.style.backgroundColor = "rgb(54, 25, 82)";
  answer2.style.backgroundColor = "rgb(54, 25, 82)";
  answer3.style.backgroundColor = "rgb(54, 25, 82)";
  answer4.style.backgroundColor = "white";

  answer1.style.color = "white";
  answer2.style.color = "white";
  answer3.style.color = "white";
  answer4.style.color = "rgb(54, 25, 82)";

  x = 3
});

//text changer event
submit.addEventListener("click", () => {
  if (x === 99) {
    submit.innerHTML = "You need to choose an answer!";
  } else if (x === randomQuestion.correctAnswer) {
    submit.innerHTML = "Correct answer!";
  } else {
    submit.innerHTML = "incorrect answer!";
  }
});

//new question event

let nextButton = document.getElementById("next");

nextButton.addEventListener("click", () => {

  let randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];

  question.innerHTML = randomQuestion.question;
  answer1.innerHTML = randomQuestion.options[0];
  answer2.innerHTML = randomQuestion.options[1];
  answer3.innerHTML = randomQuestion.options[2];
  answer4.innerHTML = randomQuestion.options[3];
  
  x = 99;
});
