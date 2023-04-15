const questions = ["question-0", "question-1", "question-2"];

function showCurrentQuestion(index) {
  for (let i = 0; i < questions.length; i++) {
    const question = document.getElementById(questions[i]);
    if (i === index) {
      question.style.display = "block";
    } else {
      question.style.display = "none";
    }
  }
}