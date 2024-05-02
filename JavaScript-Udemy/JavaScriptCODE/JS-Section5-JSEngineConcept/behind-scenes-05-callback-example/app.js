const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

let person = {name :  'Max'}
person = null; // => person이라는 객체는 어디에서도 쓰이지 않는다. 사용자가 임의로 null로 값을 할당해서 메모리가 절약되었다.
// 이러한 작업이 가비지 컬렉터가 하는 일이다.

function printMessage() {
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}

function addListener() {
  clickableBtn.addEventListener('click', printMessage);
}

addListenerBtn.addEventListener('click', addListener);
