describe("showCurrentQuestion", function() {
  let questions;
  beforeEach(function() {
    questions = document.createElement("div");
    questions.id = "questions";
    document.body.appendChild(questions);

    for (let i = 0; i < 3; i++) {
      const question = document.createElement("div");
      question.id = "question-" + i;
      question.style.display = "none";
      questions.appendChild(question);
    }
  });

  it("Testing to see if it shows the third question and hides others using BeforeEach method", function() {
    showCurrentQuestion(2);
    expect(document.getElementById("question-0").style.display).toBe("none");
    expect(document.getElementById("question-1").style.display).toBe("none");
    expect(document.getElementById("question-2").style.display).toBe("block");
  });
});