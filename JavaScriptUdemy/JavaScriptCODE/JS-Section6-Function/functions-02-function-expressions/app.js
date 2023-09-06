const startGameBtn = document.getElementById('start-game-btn');

const start = function() {
  console.log('Game is starting...');
};
start(); // 정석적인 움직임

ko(); // 호이스팅 된 움직임
function ko(){
  console.log('dnjsxoghd')
}

// const person = {
//   name: 'Max',
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// };

// person.greet();

// console.dir(startGame);

startGameBtn.addEventListener('click', start);
