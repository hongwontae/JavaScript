const button = document.querySelector('button');

// button.onclick = function() {

// };

const buttonClickHandler = event => {
  // event.target.disabled = true;
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

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('mouseenter', event => {
  console.log('CLICKED DIV');
  console.log(event);
  console.log(event.bubbles) // false
});

button.addEventListener('mouseenter', event => {
  event.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
});

// 캡쳐링을 의도적으로 발생시키고 싶다면 addEventListener의 세 번쨰 인자에 true를 주면 된다.
// 캡쳐링 => 이벤트가 발생하면 최상위 조상부터 이벤트 핸들러가 작동하는 효과를 의미한다.
// 캡쳐링이 버블링보다 우선순위를 가지고 있다.
// 이 버블링을 무시하는 이벤트 트리거들이 존재한다. => event.bubbles로 버블링을 받는지 안받는지 알 수 있다.