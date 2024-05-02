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


// script 태그를 동적으로 생성하기
// createElement를 통해 script태그를 생성하여 원할 떄 동적으로 부여할 수 있다.
// defer => 다운로드는 하는데 html이 다운되고 실행될 때까지는 스크립트를 실행하지 않는다.

// 타이머 
// setTimeout() => 인자로 두 개를 준다. 하나는 함수(콜백), 하나는 시간이다.(2000 => 2초), 시간에 따라 한번만 함수가 실행된다.
// setInterval() => 인자로 두 개를 준다. 하나는 함수(콜백), 하나는 시간이다. 시간에 따라 연속적으로 함수가 실행된다.
// clearTimeout() => setTimeout의 표현식의 변수를 인자로 넣고 호출하면 타이머가 중지된다.
// clearInterval() => setInterval의 표현식의 변수를 인자로 넣고 호출하면 타이머가 중지된다.


// location
// 브라우저 위치와 관련된 메서드와 프로퍼티들이다.
// location.href = '' => 해당 값의 주소로 브라우저를 이동시킨다.
// locaion.assign('address') => 위와 같다.
// location.replace('address') => 위와 같지만 뒤로 가기 불가
// location.host => 도메인을 반환한다.
// location.origin => 프로토콜을 포함한 도메인을 반환한다.
// locaiton.pathname => 도메인의 뒷 부분을 반환한다.

// history
// 브라우저 기록과 관련된 메서드와 프로퍼티들이다.
// history.back() => 이전 페이지
// history.forward() => 앞의 페이지
// history.length => 사용자가 브라우저 방문 횟수
// history.go() => 인자의 숫자만큼 뒤로 간다.


// navigator
// 브라우저와 사용자의 상호작용을 위한 메서드와 프로퍼티
// navigator.geoloacion.getCurrentPosition() => 사용자와 상호작용하여 사용자의 위치를 반환하는 메서드이다.

// =>이 세 개의 객체들은 window 객체들이다. 어디에서나 호출하여 사용할 수 있다.

// Date() => 빌트인 js객체이다. 객체를 생성하면 날짜와 관련된 메서드와 함수를 사용할 수 있다. 인자에 알맞는 날짜를 전달하면
                // 파싱하여 날짜 객체를 만든다.
// Error() => 빌트인 js객체이다. 객체를 생성하면 오류 메시지와 오류에 관련된 메서드와 함수를 사용할 수 있다.
                // 인자에 문자열을 넣으면 자동으로 message 프로퍼티에 넣는다.





