//get reference to p tag where player score will appear
const score = document.querySelector('.score');

//get player's score from the local storage and display it
score.innerText = `${localStorage.getItem('lastScore')}/${localStorage.getItem('overall')}`;

const button = document.querySelector('.btn'); //reference to the play again button
//event listener to handle click event on play again button (this restarts the game)
button.addEventListener('click', () => {
  return window.location.assign('index.html'); //brings up the game
})
