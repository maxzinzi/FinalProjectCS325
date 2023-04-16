import { createUser } from './dbController.js';

document.getElementById('createAccountForm').addEventListener('submit', function(event) {
event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    //alert(`${username}, ${password}`);\
    createUser(username, password);
});

