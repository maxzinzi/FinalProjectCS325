import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbn7KssU40UHe3TxB44pATKCvnbkrZTfo",
  authDomain: "cs325finalproject.firebaseapp.com",
  projectId: "cs325finalproject",
  storageBucket: "cs325finalproject.appspot.com",
  messagingSenderId: "421194063495",
  appId: "1:421194063495:web:a2b2ecf2f2c473fa206222",
  measurementId: "G-F38ETQ87N5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const db = getDatabase();

const createUser = (userID, password) => {
    set(ref(db, "users/" + userID), {
        uid: userID,
        pwd: password,
        froggerHighScore: 0,
        snakeHighScore: 0,
        DJHighScore: 0
    }).then(() => {
        alert("Account Created!");
    }).catch((error) => {
        alert(error);
    });
}

//  async function checkExistingUser(username) {
      //     const dbref = ref(db);
      //     var bs;
      //     get(child(dbref, "users/" + username))
      //     .then((snapshot)=>{
      //         if(snapshot.exists()){
      //             alert('user exists 1');
      //             bs = true;
      //         } else {
      //             bs = false;
      //         }
      //     })
      //     return bs;
      // }


export {createUser};