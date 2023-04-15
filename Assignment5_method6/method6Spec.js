describe("nextQuestion", () => {
  beforeEach(() => {
    // set up the initial state before each test
    currentQuestion = 0;
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("id", "submit-btn");
    document.body.appendChild(submitBtn);
    for (let i = 0; i < questions.length; i++) {
      const question = document.createElement("div");
      question.setAttribute("id", questions[i]);
      document.body.appendChild(question);
    }
  });

  afterEach(() => {
    const submitBtn = document.getElementById("submit-btn");
    if (submitBtn) submitBtn.remove();
    for (let i = 0; i < questions.length; i++) {
      const question = document.getElementById(questions[i]);
      if (question) question.remove();
    }
  });;


  it("testing to see if itshows the submit button when currentQuestion is the last question using the toContain method", () => {
    currentQuestion = questions.length - 1;
    nextQuestion();
    expect(document.getElementById("submit-btn").style.display).toContain("block");
  });
});
