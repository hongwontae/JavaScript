const buttons = document.querySelectorAll('button');

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

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', buttonClickHandler);
});

window.addEventListener('scroll', event => {
  console.log(event);
});

// 특이한 Event triger들이 존재한다.
// mouseenter => 마우스 포인터가 해당 DOM을 가르킬 때 이벤트 핸들러가 작동한다.
// scroll => 스크롤을 할 떄마다 이벤트 핸들러가 작동한다.
// event OBJ => 브라우저에서 자동 생성하고 이벤트가 트리거 되면 함수에 자동으로 전달되는 객체이다.
// event obj는 get과 set의 역할이나 이벤트를 관리할 수 있는 프로퍼티나 메서드를 가지고 있다.