import { createUser, checkExistingUser } from './dbController.js';

document.getElementById('createAccountForm').addEventListener('submit', function(event) {
event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    checkOrMakeAccount(username, password);
});

async function checkOrMakeAccount(username, password) {
    let existingUserCheck = await checkExistingUser(username);
    if (existingUserCheck) {
        alert(`Account with username ${username} already exists!`);
    } else {
        createUser(username, password);
        sessionStorage.setItem("username", username);
        window.location.href = "LandingPage.html";
    }
}