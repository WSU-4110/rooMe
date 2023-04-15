
describe("showCurrentQuestion", function() {
    let div;

    afterEach(function() {
        document.body.removeChild(div);
    });

    it("testing to see if it displays the first question and hides all others when currentQuestion is 0 using afterEach Method", function() {
        // Define questions and currentQuestion
        let questions = ["question1", "question2", "question3"];
        let currentQuestion = 0;

        // Create the questions elements
        div = document.createElement("div");
        document.body.appendChild(div);

        questions.forEach(function(question) {
            const element = document.createElement("div");
            element.id = question;
            div.appendChild(element);
        });

        // Show the current question
        showCurrentQuestion();

        // Check that the first question is displayed and all others are hidden
        questions.forEach(function(question, index) {
            const element = document.getElementById(question);
            if (index === currentQuestion) {
                expect(element.style.display).toBe("block");
            } else {
                expect(element.style.display).toBe("none");
            }
        });
    });
     });