
describe("showCurrentQuestion", () => {
  it("Testing to see if it shows the current question and hide all others Using describe & it method", () => {

    const locationQuestion = document.createElement("div");
    const homeTypeQuestion = document.createElement("div");
    locationQuestion.id = "location";
    homeTypeQuestion.id = "home-type";
    document.body.appendChild(locationQuestion);
    document.body.appendChild(homeTypeQuestion);
    // Set the current question to the second question
    currentQuestion = 1;
    // Call the function being tested
    showCurrentQuestion();
    // Assert that only the second question is visible
    expect(getComputedStyle(locationQuestion).display).toBe("none");
    expect(getComputedStyle(homeTypeQuestion).display).toBe("block");
    // Clean up
    document.body.removeChild(locationQuestion);
    document.body.removeChild(homeTypeQuestion);
  });
});