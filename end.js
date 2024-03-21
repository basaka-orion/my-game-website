const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart');

// 从本地存储中获取得分
const score = localStorage.getItem('score');
const totalQuestions = localStorage.getItem('totalQuestions');

scoreElement.textContent = `你答对了 ${score} 道题,共 ${totalQuestions} 道题。`;

restartButton.addEventListener('click', () => {
  window.location.href = 'game.html';
});
