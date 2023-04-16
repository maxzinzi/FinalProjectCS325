import { createUser, checkExistingUser } from './dbController.js';

document.getElementById('createAccountForm').addEventListener('submit', function(event) {
event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(checkExistingUser(username)) {
        alert(`Account with username: ${username} already exists!`)
    }
    else {
        createUser(username, password);
    }
});

