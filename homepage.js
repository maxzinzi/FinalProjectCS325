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

//pop up stats stuff
const highScoresBtn = document.getElementById('frogger-scores-btn');
const highScoresContainer = document.getElementById('frogger-scores-container');

highScoresBtn.addEventListener('click', () => {
  highScoresContainer.style.display = 'block';
});
highScoresContainer.addEventListener('mouseleave', () => {
  highScoresContainer.style.display = 'none';
});
