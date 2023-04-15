import {app, auth, db} from "./config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, update, set, ref, remove, push, child, onValue, onChildAdded } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, sendPasswordResetEmail, createUserWithEmailAndPassword, signOut, deleteUser } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

class userAuthentication {
    constructor(auth, email, password) {
        this.auth = auth;
        this.email = email;
        this.password = password;
    }


    signup(){
        result = false;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            set(ref(db, "Users/"+ user.uid),{
            email: email
            })
            .then(()=>{
                result = true;
            })
            .catch((error)=>{
                alert(error);
            });

        })
        
        return result;
    }

   signIn(){
        result = false;    
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                const dt = new Date();
                update(ref(db, "Users/"+ user.uid),{
                    last_login: dt,
                })
                .then(()=>{
                    result = true;
                })
                .catch((error)=>{
                    alert(error);
                });
                
            })
            return result;
   }    
    
    forgotpassword(){
        result = false;
        sendPasswordResetEmail(auth, email)
        .then(() => {
            result = true;
        })
        return result;
    }

}