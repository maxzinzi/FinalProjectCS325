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
const highScoresBtn = document.getElementById('snake-scores-btn');
const highScoresContainer = document.getElementById('snake-scores-container');
highScoresContainer.style.display = 'none';

highScoresBtn.addEventListener('click', () => {
  highScoresContainer.style.display = 'block';
});
highScoresContainer.addEventListener('mouseleave', () => {
  highScoresContainer.style.display = 'none';
});

const highScoresBtn2 = document.getElementById('frogger-scores-btn');
const highScoresContainer2 = document.getElementById('frogger-scores-container');
highScoresContainer.style.display = 'none';

highScoresBtn2.addEventListener('click', () => {
  highScoresContainer2.style.display = 'block';
});
highScoresContainer2.addEventListener('mouseleave', () => {
  highScoresContainer2.style.display = 'none';
});

const highScoresBtn3 = document.getElementById('doodle-scores-btn');
const highScoresContainer3 = document.getElementById('doodle-scores-container');
highScoresContainer3.style.display = 'none';

highScoresBtn3.addEventListener('click', () => {
  highScoresContainer3.style.display = 'block';
});
highScoresContainer3.addEventListener('mouseleave', () => {
  highScoresContainer3.style.display = 'none';
});
