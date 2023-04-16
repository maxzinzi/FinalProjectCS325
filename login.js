import { checkUserNameAndPassword } from "./dbController.js";

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    loginCheck(username, password);
});

async function loginCheck(username, password) {
    let correctPassword = await checkUserNameAndPassword(username, password); 
    if(correctPassword) {
        sessionStorage.setItem("username", username);
        window.location.href = "LandingPage.html";
    } else {
        alert("Incorrect username or password!");
    }
}