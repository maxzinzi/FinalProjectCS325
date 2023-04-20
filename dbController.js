import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbn7KssU40UHe3TxB44pATKCvnbkrZTfo",
  authDomain: "cs325finalproject.firebaseapp.com",
  projectId: "cs325finalproject",
  storageBucket: "cs325finalproject.appspot.com",
  messagingSenderId: "421194063495",
  appId: "1:421194063495:web:a2b2ecf2f2c473fa206222",
  measurementId: "G-F38ETQ87N5",
};

const app = initializeApp(firebaseConfig);

import { getDatabase, set, ref, get, child, update } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const db = getDatabase();

function updateSnakeScore() {
		  // Get username from session storage
		  const username = sessionStorage.getItem("username");

		  // Get high score for user
		  const highScore = getSnakeHighScore(username);

		  // Update span element with high score value
		  document.getElementById("snakeScore").textContent = highScore;
		}

const createUser = async (userID, password) => {
    await set(ref(db, "users/" + userID), {
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

const checkExistingUser = async (username) => {
    const dbref = ref(db);
    var userExists;
    await get(child(dbref, "users/" + username))
    .then((snapshot)=>{
        if(snapshot.exists()){
            userExists = true;
        } else {
            userExists = false;
        }
    })
    return userExists;
}

const checkUserNameAndPassword = async (username, password) => {
  const dbref = ref(db);
  var passwordMatches;
  await get(child(dbref, "users/" + username)).then((snapshot) => {
    if (snapshot.exists()) {
        if(password == snapshot.val().pwd) {
            passwordMatches = true;
        }
        else{
            passwordMatches = false;
        }
    } else {
      passwordMatches = false;
    }
  });
  return passwordMatches;
};

const getUserStats = async (username) => {
    const dbref = ref(db);
    var allStats = [];
    await get(child(dbref, "users/" + username)).then((snapshot) => {
        if(snapshot.exists()) {
            allStats = [snapshot.val().froggerHighScore, snapshot.val().snakeHighScore, snapshot.val().DJHighScore];
        }
        else{
            alert("user doesnt exist lmao?");
        }
    });
    return allStats;
}

const getFroggerHighScore = async (username) => {
    const dbref = ref(db);
    var frogScore;
    await get(child(dbref, "users/" + username)).then((snapshot) => {
      if (snapshot.exists()) {
        frogScore = snapshot.val().froggerHighScore;
      } else {
        alert("user doesnt exist lmao?");
      }
    });
    return frogScore;
}

const getSnakeHighScore = async (username) => {
  const dbref = ref(db);
  var snakeScore;
  await get(child(dbref, "users/" + username)).then((snapshot) => {
    if (snapshot.exists()) {
      snakeScore = snapshot.val().snakeHighScore;
    } else {
      alert("user doesnt exist lmao?");
    }
  });
  return snakeScore;
};

const getDJHighScore = async (username) => {
  const dbref = ref(db);
  var DJscore;
  await get(child(dbref, "users/" + username)).then((snapshot) => {
    if (snapshot.exists()) {
      DJscore = snapshot.val().DJHighScore;
    } else {
      alert("user doesnt exist lmao?");
    }
  });
  return DJscore;
};

const setFroggerHighScore = async (username, newFroggerScore) => {
    await update(ref(db, "users/" + username), {froggerHighScore: newFroggerScore});
}

const setSnakeHighScore = async (username, newSnakeScore) => {
  await update(ref(db, "users/" + username), {
    snakeHighScore: newSnakeScore,
  });
};

const setDJHighScore = async (username, newDJScore) => {
  await update(ref(db, "users/" + username), {
    DJHighScore: newDJScore,
  });
};


export {
  createUser,
  checkExistingUser,
  checkUserNameAndPassword,
  getUserStats,
  setFroggerHighScore,
  setSnakeHighScore,
  setDJHighScore,
  getFroggerHighScore,
  getSnakeHighScore,
  getDJHighScore
};
