import {app, auth, db} from "./config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, update, set, ref, remove, push, child, onValue, onChildAdded } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, sendPasswordResetEmail, createUserWithEmailAndPassword, signOut, deleteUser } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";


class profile {
    constructor(user, email, password) {
        this.user = user;
        this.email = email;
        this.password = password;
    }

    deleteProfile(){
        result = false;
        deleteUser(user).then(() => {
            remove(ref(db, "Users/"+ user.uid)).then(()=>{
                alert("We will miss you!");
            })
            .then(()=>{
                result = true;
            })
        })
        return result;
        
    }

    editProfile(firstName, lastname, city, address, state, zipcode){
        result = false;
        if (user !== null) {
          const uid = user.uid;
          update(ref(db, "Users/"+ uid),{
              firstName: firstName,
              lastName: lastname,
              city: city,
              address:address,
              state: state,
              zip_code: zipcode 
          })
          .then(()=>{
            result = true;
          })
          
        }
        return result;
    }

    sendMessage(message, sender, receiver){    
        result = false;   

        if (sender && receiver) {
          push(ref(db, 'messages/' + sender + receiver), {
            sender: sender, 
            receiver: receive, 
            message: message
          })

          push(ref(db, 'messages/' + receiver + sender), {
            sender: sender, 
            receiver: receiver, 
            message: message
          })

          result = true;
        
        } 
        return result;
    }

}