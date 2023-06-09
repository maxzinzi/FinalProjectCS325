import { setSnakeHighScore, getSnakeHighScore} from './dbController.js';
var username = sessionStorage.getItem("username");
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var highScore;
var paused = false;
var scoreDisplayElem = document.querySelector(".scoreboard");
var score = 0;

// sound effects
let eatSound = new Audio("sounds/snake/apple-munch-40169.mp3");
eatSound.volume = 0.5;
eatSound.playbackRate = 2.5;

let gameOverSound = new Audio("sounds/snake/videogame-death-sound-43894.mp3");
gameOverSound.volume = 0.5;
gameOverSound.playbackRate = 2;

var game1Muted = document.getElementById("mute-sounds-snake");

var isMuted = localStorage.getItem("mute-sounds-snake") === "true";
game1Muted.checked = isMuted;

updateSounds(isMuted);

game1Muted.addEventListener("change", function() {
  var isMuted = game1Muted.checked;
  updateSounds(isMuted);
  localStorage.setItem("mute-sounds-snake", isMuted);
});

function updateSounds(isMuted) {
  if (isMuted) {
    eatSound.volume = 0;
    gameOverSound.volume = 0;
  }
  else {
    eatSound.volume = 0.5;
    gameOverSound.volume = 0.5;
  }
}

// the canvas width & height, snake x & y, and the apple x & y, all need to be a multiples of the grid size in order for collision detection to work
// (e.g. 16 * 25 = 400)
var grid = 16;
var count = 0;

var snake = {
  x: 160,
  y: 160,

  // snake velocity. moves one grid length every frame in either the x or y direction
  dx: grid,
  dy: 0,

  // keep track of all grids the snake body occupies
  cells: [],

  // length of the snake. grows when eating an apple
  maxCells: 4,
};
var apple = {
  x: 320,
  y: 320,
};

// get random whole numbers in a specific range
// @see https://stackoverflow.com/a/1527820/2124254
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

async function getScore() {
  highScore = await getSnakeHighScore(username);
  requestAnimationFrame(loop);
}

async function setNewScore(score) {
  highScore = await setSnakeHighScore(username, score);
}

// game loop
function loop() {
  requestAnimationFrame(loop);
  
  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (++count < 4) {
    return;
  }
  if (paused) throwError();

  count = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);

  // move snake by it's velocity
  snake.x += snake.dx;
  snake.y += snake.dy;

  // wrap snake position horizontally on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  // wrap snake position vertically on edge of screen
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({ x: snake.x, y: snake.y });

  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  // draw apple
  context.fillStyle = "red";
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

  // draw snake one cell at a time
  context.fillStyle = "green";
  snake.cells.forEach(function (cell, index) {
    // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      eatSound.play();
      snake.maxCells++;
      scoreDisplayElem.innerHTML = ++score;
    
      // canvas is 400x400 which is 25x25 grids
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    // check collision with all cells after this one (modified bubble sort)
    for (var i = index + 1; i < snake.cells.length; i++) {
      // snake occupies same space as a body part. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        scoreDisplayElem.innerHTML = " 0";
        gameOverSound.play();
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        scoreDisplayElem.innerHTML = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
        if (score > highScore) {
          highScore = score;
          setNewScore(score);
        }
        score = 0;
      }
    }
  });
}

// listen to keyboard events to move the snake
document.addEventListener("keydown", function (e) {
  // prevent snake from backtracking on itself by checking that it's
  // not already moving on the same axis (pressing left while moving
  // left won't do anything, and pressing right while moving left
  // shouldn't let you collide with your own body)

  // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  } else if (e.which == 32) {
    paused = !paused;
    document.querySelector(".pause").innerHTML = paused ? "Play" : "Pause";
  }

  // prevent up or down arrow key from scrolling
  if (e.which === 38 || e.which === 40) {
    e.preventDefault();
  }
});


const pauseButton = document.getElementById("pause");

pauseButton.addEventListener("click", function() {
  paused = !paused;
  document.querySelector(".pause").innerHTML = paused ? "Play" : "Pause";
});

// start the game
getScore();


