const a = document.getElementById('main-box');
console.log(a);

const cssAll = a.getBoundingClientRect();
console.log(cssAll);

const cssTop = a.offsetTop;
console.log(cssTop); // x값이며, 요소가 왼쪽 상단 위에서 얼마나 떨어져 위치하는지 알려준다.

const cssLeft = a.offsetLeft;
console.log(cssLeft); // y값이며, 요소가 왼쪽에서 얼마나 떨어져서 위치하는지 알려준다.

const cssWIdth = a.offsetWidth;
console.log(cssWIdth); // 해당 dom의 크기를 알려준다.

const cssHeight = a.offsetHeight;
console.log(cssHeight); // 해당 dom의 높이를 알려준다.

const scrolls = a.scrollHeight;
console.log(scrolls); // 스크롤을 포함한 높이를 알려준다.

const cTop = a.clientTop;
console.log(cTop); // 컨텐츠와 요소의 사이 탑

const cLeft = a.clientLeft;
console.log(cLeft); // 컨텐츠와 요소의 사이 레프트

const cWidth = a.clientWidth;
console.log(cWidth); // 해당 콘텐츠의 크기 => 요소 전체의 넓이가 아니다.

const cHeight = a.clientHeight
console.log(cHeight); // 해당 컨텐츠의 넓이 => 요소 전체의 높이가 아니다.


const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
console.log(windowHeight);
console.log(windowWidth);
// 이 둘은 문서 전체의 높이와 넓이를 반환하지만 스크롤이 있다면 그것까지 포함해서 알려준다.

const notScrollWithd = document.documentElement.clientWidth;
const notScrollHeight = document.documentElement.clientHeight;
console.log(notScrollWithd);
console.log(notScrollHeight);
// 이 둘은 스크롤을 계산하지 않고 문서 전체의 높이와 넓이를 알려준다.

const scrollA = document.getElementById('p1');
const scrollB = document.getElementById('p2');

scrollB.scrollIntoView({behavior:"smooth"}); 
// 스크롤에서 해당 dom으로 포커싱한다.
// 객체를 주어서 효과를 줄 수 있다. ex) smooth => 부드럽게 이동한다.

// scrollTo() => 해당 요소를 어디에 위치시킬거니? 인자는 두 개이다. x,y값
// scrollBy() => 해당 요소를 얼마만큼 움직일거니? 인자는 두 개이다. x,y값


// dataset은 html의 속성이다. JS와 쉽게 상호작용하기 위해 HTML5에서 업데이트 되었다.
// dataset은 그 자체로는 아무런 효과가 없다.
// 사용법
// => const a =document.querySelector('#main-box'); (<div data-info ="data"><div>)
// => const dataSetA = a.dataset.info;
// => console.log(dataSetA) => "data";

const b = document.querySelector('#main-box');
const dataSetB = b.dataset.info;
console.log(dataSetB) // Parsing data


// template은 보이지 않는 html이다.
// JS와 상호작용하기 위해 HTML5에서 만들어졌으며 JS가 innerHTML, textContent.. 등을 하지 않고 js만의 코드 무결성을 도와준다.

// 사용법
const c = document.querySelector('template');
console.log(c);
const template = document.importNode(c.content, true);
console.log(template);



