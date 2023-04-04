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