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
