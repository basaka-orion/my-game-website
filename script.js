const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const imageElement = document.getElementById('image');
const progressElement = document.getElementById('progress');

let currentQuestion = 0;
let score = 0;
const totalQuestions = gameData.length;

function showQuestion() {
  const question = gameData[currentQuestion];
  imageElement.src = `assets/images/${question.image}`;
  questionElement.textContent = question.question;
  choicesElement.innerHTML = '';
  question.choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', selectAnswer);
    choicesElement.appendChild(button);
  });
  progressElement.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
}

function selectAnswer(event) {
  const selectedChoice = event.target.textContent;
  const question = gameData[currentQuestion];
  if (selectedChoice === question.answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < totalQuestions) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  localStorage.setItem('score', score);
  localStorage.setItem('totalQuestions', totalQuestions);
  window.location.href = 'end.html';
}

showQuestion();
