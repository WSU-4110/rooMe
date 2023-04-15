const questions = ["location", "home-type", "roommate-gender", "roommate-sexuality", "ageOfRoomate", "beds", "bathrooms", "rent"];
let currentQuestion = 0;

function showCurrentQuestion() {
  for (let i = 0; i < questions.length; i++) {
    const question = document.getElementById(questions[i]);
    if (question) {
      if (i === currentQuestion) {
        question.style.display = "block";
      } else {
        question.style.display = "none";
      }
    } else {
      console.error(`Element with ID ${questions[i]} not found.`);
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