import {userAuthentication} from "../userAuthentication.js";
import {app, auth, db} from "config.js";


describe("userAuthentication", function(){
    beforeEach(function() {
        userAuth = new userAuthentication(auth, "sai@gmail.com", "hello$123");
    });

    it("should be able to signUp", function() {
        expect(userAuth.signUp()).toEqual(true);
    }); 

    it("should be able to signIn", function() {
        expect(userAuth.signIn()).toEqual(true);
    });

    it("should be able to send email to reset password", function() {
        expect(userAuth.forgotpassword()).toEqual(true);
    });

});