const buttons = document.querySelectorAll('button'); // nodeList => 유사 배열 객체라 forEach 사용 가능

// button.onclick = function() {

// };

const buttonClickHandler = event => {
  event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

buttons.forEach(btn => {
  btn.addEventListener('click', buttonClickHandler);
});

// forEach를 통해 이벤트를 걸어준다.
// => 다수의 DOM 요소에 한번에 걸어주는 방법이다.