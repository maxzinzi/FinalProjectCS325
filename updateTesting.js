import { setDJHighScore, setFroggerHighScore, setSnakeHighScore, getDJHighScore, getFroggerHighScore, getSnakeHighScore } from "./dbController.js";

var frog = document.querySelector("#frogger");
var snake = document.querySelector("#snake");
var DJ = document.querySelector("#dj");

getDBValueTest();

document
  .getElementById("updateTestForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var score = document.getElementById("score").value;
    //this just tests the update functions
    setDJHighScore(username, score);
    setFroggerHighScore(username, score -600);
    setSnakeHighScore(username, score + 789999);
  });


async function getDBValueTest() {
    frog.innerHTML = await getFroggerHighScore("max");
    snake.innerHTML = await getSnakeHighScore("max");
    DJ.innerHTML = await getDJHighScore("max");
}