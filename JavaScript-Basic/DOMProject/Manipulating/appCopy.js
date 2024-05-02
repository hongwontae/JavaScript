const h1 = document.querySelector('h1');
// js style 객체가 css 외부 스타일 시트를 읽지 못한다.


const allLinks = document.querySelectorAll('a');
for(let link of allLinks){
    link.style.color='cyan'
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
} // => 이 작업은 html의 인라인 요소에 붙기 떄문에 좋은 방법은 아니다.

// 인라인 요소에 있기 때문에 스타일이 적용된 것을 알아내기 힘들다.

console.log(h1.style.fontSize)
// 이것이 그 예

// 그래서 스타일이 적용된 객체를 알고 싶다면
//console.log(window.getComputedStyle(h1))

// 상세히 알고 싶다면?
console.log(window.getComputedStyle(h1).fontSize)
console.log(window.getComputedStyle(h1).border)
console.log(window.getComputedStyle(h1).color)
// 출력되는 값은 문자열이다.

// const h2 = document.querySelector('h2')
// h2.getAttribute('class')
// 클래스가 있는지 getAttribute로 물어본다.
// h2.setAttribute('class','purple')
// h2.setAttribute('class','border')

const h2 = document.querySelector('h2')
// h2 문서 객체를 생성한다.
h2.getAttribute('class')
// h2의 클래스의 여부를 확인한다.
h2.setAttribute('class','purple')
// h2의 class purple를 집어넣는다.
h2.setAttribute('class', 'border')
// h2의 class border를 집어넣는다.
// => h2의 class는 border이다. 이 방식은 뒤에 클래스가 앞의 클래스를 잡아 먹는다.

// 클래스 두 개 유지하는 방법
let currentClasses = h2.getAttribute('class')
// 
currentClasses
// "border"가 나온다.
h2.setAttribute('class',`${currentClasses} purple`)
// 템플릿 리터럴를 이용해서 문자열을 일반으로 바꾸고 purple과 함꼐 위치시킨다.

const h22 = document.querySelector('h2')
console.log(h22)
h22.classList.add('coutinew') // 클래스 잡아먹지 않고 추가한다.
h22.classList.remove('border') // border 클래스를 삭제한다.
const h222 = h22.classList.contains('purple') // class purple이 있는지 확인한다.
console.log(h222)

const h2222 = h22.classList.toggle('purple')
console.log(h222) // 왔다 갔다 가능






