var Email = {
 send: function() {}
};

describe("sendEmail", function() {
 it("should call Email.send method", function() {
   spyOn(Email, "send");
   sendEmail();
   expect(Email.send).toHaveBeenCalled();
 });
});
function sendEmail() {
 Email.send({
   SecureToken : "your_secure_token",
   To : "user@example.com",
   From : "your_email_address",
   Subject : "Email subject",
   Body : "Email body"
 });
}
