const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER = ROCK;
const GAMEDRAW = 'DRAW'

const input = function(){
  const startGame = prompt(`${ROCK}? ${PAPER}? ${SCISSORS}?`,'').toUpperCase();
  if(startGame !== ROCK && startGame !== PAPER && startGame !== SCISSORS){
    alert(`Invaild choice ${ROCK} default`)
    return DEFAULT_USER;
  }
    return startGame
};

const comInput = function(){
  const num = Math.random();
  if(num<0.3){
    console.log(`num => ${num}`)
    return ROCK;
  } else if(num<0.6){
    console.log(`num => ${num}`)
    return PAPER;
  } else if(num<0.9){
    console.log(`num => ${num}`)
    return SCISSORS;
  }
}





startGameBtn.addEventListener('click', function() {
  console.log('Game is starting...');
  const player = input();
  const com = comInput();
  console.log(player)
  console.log(com)
});
