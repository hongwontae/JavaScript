let a = 'koala3121';
let a1 = String(a); // 명시적 형변환 원시값 => 원시값
let a2 = new String(a); // 객체를 만드는 것이다. 원시값 => 참조값


console.log(a === a1); // true;
console.log(a === a2); // false

console.log(+false + +true + +null +10+'k'); // 11k
console.log(+false + +true + +null +10+ +'k'); //NaN
console.log(false+true+null+10+'koala3121');

console.log(3 || false || 'k'); // 3
console.log(3 && ' ' && false && null); // false


let b = '';
console.log(!b);

let b1 = null;
console.log(b1 ?? 'null입니다.')

let height = null;
let width = null;
let area = height ?? 100
console.log(area); // 5000

// or => 모두 true면 첫번재 ture값, 모두 false면 마지막 false값, true,false 섞여 있다면 첫 번쨰 true값
// and => 모두 true면 첫 번째 false값, 모두 ture면 마지막 true값, ture와 false가 섞여 있다면 첫 번쨰 false값
// ! => 논리 부정 연산자, 형변환 역할도 한다.
// ?? => 왼쪽 피연산자가 null이나 undefined일 떄 오른쪽 피연산자 값을 대입하는 연산자이다.

// 함수 선언문은 스크립트가 동작하기 전에 호이스팅된다. => 선언하기 전 코드 위에서 사용가능.
// 함수 표현식은 호이스팅되지 않는다.

// 화살표함수에서 중괄호가 있다면 return이 내재된 것이 아님으로 필요시 return을 작성해야 한다.

