const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Gaming Start...')
}

//startGame(); // 직접실행
startGameBtn.addEventListener('click',startGame); // 

const person  = {
    hel : function greet(){
        console.log('hello There')
    }
}

person.hel();

//spreads(); 불가능 // Uncaught ReferenceError: Cannot access 'spreads' before initialization
const spreads = function(){
    console.log('Xavi Alonso')
} // 익명함수를 사용한다. 이름을 줘도 된다.
