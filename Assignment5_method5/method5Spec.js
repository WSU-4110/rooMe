describe("nextQuestion", () => {
  beforeEach(() => {
    // Spy on showCurrentQuestion function
    spyOn(window, "showCurrentQuestion");
    // Create a div element for testing
    const submitBtn = document.createElement("div");
    submitBtn.id = "submit-btn";
    document.body.appendChild(submitBtn);
  });

  afterEach(() => {
    // Remove the div element after each test
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.parentNode.removeChild(submitBtn);
  });

  it("testing to see if it should call showCurrentQuestion if currentQuestion is less than questions length Using the spyOn() method", () => {
    nextQuestion();
    expect(showCurrentQuestion).toHaveBeenCalled();

  });

 
});

