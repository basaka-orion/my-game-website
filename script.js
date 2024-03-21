const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const imageElement = document.getElementById('image');
const progressElement = document.getElementById('progress');

let currentQuestion = 0;
let score = 0;

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
  progressElement.textContent = `Question ${currentQuestion + 1} of ${gameData.length}`;
}

function selectAnswer(event) {
  const selectedChoice = event.target.textContent;
  const question = gameData[currentQuestion];
  if (selectedChoice === question.answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < gameData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = '游戏结束!';
  choicesElement.innerHTML = `你的得分是 ${score} out of ${gameData.length}`;
  progressElement.textContent = '';
}

showQuestion();
