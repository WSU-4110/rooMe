import {userAuthentication} from "../profile.js";
import {app, auth, db} from "config.js";


describe("profileFeatures", function(){
    beforeEach(function() {
        userProfile = new profile(auth.user, "sai@gmail.com", "hello$123");
    });

    it("should be able to delete profile", function() {
        expect(userProfile.deleteProfile()).toEqual(true);
    }); 

    it("should be able to edit profile", function() {
        expect(userProfile.deleteProfile("Dog", "Doggy", "Troy", "WSU", "MI", "48084")).toEqual(true);
    });

    it("should be able to send messages", function() {
        expect(userProfile.sendMessage("How are you?", auth.user, "Monica")).toEqual(true);
    });

});