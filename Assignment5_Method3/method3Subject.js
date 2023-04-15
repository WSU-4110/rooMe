
let questions = ["question1", "question2", "question3"]; 

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