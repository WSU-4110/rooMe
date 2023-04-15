describe("showCurrentQuestion", function() {
    let div;

    beforeAll(function() {
        div = document.createElement("div");
        document.body.appendChild(div);

        questions.forEach(function(question) {
            const element = document.createElement("div");
            element.id = question;
            div.appendChild(element);
        });
    });

    afterAll(function() {
        document.body.removeChild(div);
    });

    it(" testing to see if it displays the first question and hides all others when currentQuestion is 0 using the before/afterAll methods", function() {
        currentQuestion = 0;
        showCurrentQuestion();

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
