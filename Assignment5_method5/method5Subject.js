const questions = ["location", "home-type", "roommate-gender", "roommate-sexuality", "ageOfRoomate", "beds", "bathrooms", "rent"];
let currentQuestion = 0;

function showCurrentQuestion() {
  for (let i = 0; i < questions.length; i++) {
    const question = document.getElementById(questions[i]);
    if (i === currentQuestion) {
      question.style.display = "block";
    } else {
      question.style.display = "none";
    }
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    document.getElementById("submit-btn").style.display = "block";
  } else {
    showCurrentQuestion();
  }
}
