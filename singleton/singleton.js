import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js"; 
class FirebaseConnection{
    static #instance = null;
    static #firebaseConfig = {
        apiKey: "AIzaSyClqbgmtcPuED7LE3-2XXSooypjXiHQj38",
        authDomain: "roome-5bfa9.firebaseapp.com",
        databaseURL: "https://roome-5bfa9-default-rtdb.firebaseio.com",
        projectId: "roome-5bfa9",
        storageBucket: "roome-5bfa9.appspot.com",
        messagingSenderId: "564378590257",
        appId: "1:564378590257:web:6e18a1d7269d83af318910"
    };

    #FirebaseConnection(){
        this.#instance = initializeApp(this.#firebaseConfig);
    }

    static getFirebaseConnection(){
        if(this.#instance === null){
            this.#instance = this.#FirebaseConnection();
        }
        return this.#instance;
    }
}

const app = FirebaseConnection.getFirebaseConnection();