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

div.addEventListener('click', event => {
  console.log('CLICKED DIV');
  console.log(event);
});

button.addEventListener('click', event => {
  event.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
});

// DOM의 Event는 캡쳐링, 버블링이 존재한다. 버블링이 기본동작이다.
// 이 버블링은 한 요소에서 핸들러가 작동하면 부모 요소의 핸들러가 작동하고 가장 최상단의 조상요소를 만날떄까지 작동한다.
// 버블링을 무시하고 싶다면 이벤트 객체의 event.stopProgagtion()을 호출하면 된다.
