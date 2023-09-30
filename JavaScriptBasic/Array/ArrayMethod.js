// 배열 => 객체이다.
// const a = [1]/ typeof a => Object

let a = [1,,,,,10]; // 비어있는 값을 배열에 넣고 싶다면 ,만 작성해주면 된다.
console.log(a); 

let a1 = ['HWT','SON','JER'] // 일반적인 객체 생성 방식
let aa1 = new Array(1,2,3); // 생성자 함수를 사용하여 배열을 만드는 방식
let aaa1 = Array.of('a','b','c') // 배열을 만들어 주는 메서드
let aaaa1 = Array.from('a'); // 해당 인자를 배열로 만들어주는 메서드 => Iterable, 유사 배열 객체들을 Real 배열로 만들어준다.


let a2 = [1,2,function add(a,b){return a+b}, 'godd'];
a2.push(3); // => 뒤에 추가
a2.unshift(50); // => 앞에 추가
console.log(a2);

a2.pop(); // => 뒤에 삭제
console.log(a2);

a2.shift(); // => 앞에 삭제
console.log(a2);


let a3 = [1,2,'good',3,4,5];
a3.splice(1,1,'new');
console.log(a3);
// splice() => 기존의 배열에 영향을 준다. 복사의 개념이 아니다. 단순 조작 메서드이다.
// splice()는 세 가지 인자를 받는다.
// 첫 번쨰 인자는 영향을 받을 배열의 값/ 인덱스 로직으로 선택된다.
// 두 번쨰 인자는 해당 인덱스부터 삭제를 할 값
// 세 번쨰 인자는 값으로 받고, 두 번쨰 인자에서 삭제된 값들에 채워넣을 값들
// 인자에 하나만 넣으면 지정한 숫자의 길이를 제외하고 다 지워라.
// 첫 인자에 -를 넣으면 뒤에서부터 시작한다.

// 조금 어려운 메서드임으로 상시 review해야 한다.