//pop up stats stuff
const highScoresBtn = document.getElementById('snake-scores-btn');
const highScoresContainer = document.getElementById('snake-scores-container');
const highScoresBtn2 = document.getElementById('frogger-scores-btn');
const highScoresContainer2 = document.getElementById('frogger-scores-container');
const highScoresBtn3 = document.getElementById('doodle-scores-btn');
const highScoresContainer3 = document.getElementById('doodle-scores-container');
highScoresContainer.style.display = 'none';
highScoresContainer2.style.display = 'none';
highScoresContainer3.style.display = 'none';

highScoresBtn.addEventListener('click', () => {
  highScoresContainer.style.display = 'block';
});
highScoresContainer.addEventListener('mouseleave', () => {
  highScoresContainer.style.display = 'none';
});
highScoresBtn2.addEventListener('click', () => {
  highScoresContainer2.style.display = 'block';
});
highScoresContainer2.addEventListener('mouseleave', () => {
  highScoresContainer2.style.display = 'none';
});
highScoresBtn3.addEventListener('click', () => {
  highScoresContainer3.style.display = 'block';
});
highScoresContainer3.addEventListener('mouseleave', () => {
  highScoresContainer3.style.display = 'none';
});

// game pop ups
function openPopup(gameId, gameHtml) {
  var popup = document.getElementById("popup");
  var popupContent = document.getElementById("popup-content");
  var game = gameHtml; // use the game HTML file name as the URL
  
  // Set the size of the iframe element to make the popup bigger
  popupContent.innerHTML = '<iframe src="' + game + '" width="800" height="800" tabindex="0"></iframe>';

  popup.style.display = "block";

  // Give focus to the iframe
  var iframe = document.querySelector('iframe');
  iframe.contentWindow.focus();
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
  document.getElementById("popup-content").innerHTML = "";
}

// sound muting for each game
var  game1MuteCheckbox = document.getElementById("mute-sounds-game1");
var  game2MuteCheckbox = document.getElementById("mute-sounds-game2");
var  game3MuteCheckbox = document.getElementById("mute-sounds-game3");

game1MuteCheckbox.checked = localStorage.getItem("game1Muted") === "true";
game2MuteCheckbox.checked = localStorage.getItem("game2Muted") === "true";
game3MuteCheckbox.checked = localStorage.getItem("game3Muted") === "true";
game1MuteCheckbox.addEventListener("change", function() {
  localStorage.setItem("game1Muted", game1MuteCheckbox.checked);
  game1Muted = game1MuteCheckbox.checked;
});
game1MuteCheckbox.addEventListener("change", function() {
  localStorage.setItem("game2Muted", game2MuteCheckbox.checked);
});
game1MuteCheckbox.addEventListener("change", function() {
  localStorage.setItem("game3Muted", game3MuteCheckbox.checked);
});



// Snake
const snakeTutorialBtn = document.getElementById('snake-tutorial');
const snakeTutorialPopup = document.getElementById('snake-tutorial-popup');

snakeTutorialBtn.addEventListener('click', () => {
    snakeTutorialPopup.style.display = 'block';
});

  snakeTutorialPopup.addEventListener('click', () => {
    snakeTutorialPopup.style.display = 'none';
});

snakeTutorialPopup.addEventListener('mouseleave', () => {
    snakeTutorialPopup.style.display = 'none';
  });


// Frogger
const froggerTutorialBtn = document.getElementById('frogger-tutorial');
const froggerTutorialPopup = document.getElementById('frogger-tutorial-popup');

froggerTutorialBtn.addEventListener('click', () => {
    froggerTutorialPopup.style.display = 'block';
});

froggerTutorialPopup.addEventListener('click', () => {
    froggerTutorialPopup.style.display = 'none';
});

froggerTutorialPopup.addEventListener('mouseleave', () => {
    froggerTutorialPopup.style.display = 'none';
  });



// Doodle Jump
const doodleTutorialBtn = document.getElementById('doodle-tutorial');
const doodleTutorialPopup = document.getElementById('doodle-tutorial-popup');

doodleTutorialBtn.addEventListener('click', () => {
    doodleTutorialPopup.style.display = 'block';
});

doodleTutorialPopup.addEventListener('click', () => {
    doodleTutorialPopup.style.display = 'none';
});

doodleTutorialPopup.addEventListener('mouseleave', () => {
    doodleTutorialPopup.style.display = 'none';
  });


