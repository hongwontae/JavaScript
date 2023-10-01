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
// 세 번쨰 인자는 값으로 받고, 두 번쨰 인자에서 삭제된 값에 채워질 값 => n개이다. 여러개를 넣을 수 있다.
// 인자에 하나만 넣으면 지정한 숫자의 길이를 제외하고 다 지워라.
// 첫 인자에 -를 넣으면 뒤에서부터 시작한다. -로직은 무조건 길이로직이다.

// 조금 어려운 메서드임으로 상시 review해야 한다.

let a4 = [1,2,3,4,5];
a4.splice(-2,2,'HWT GOOD','HWT GOOD');
console.log(a4);
// 첫 인자 => 2 배열의 값 4부터 시작해서/ 두 번쨰 인자 => 2개를 지워라/ 세 번쨰 인자 ~ n => 삭제된 구역에 해당 값을 집어넣어라.


let a5 = ['1','2','3','4','5'];
let a6 = a5.slice();
let a7 = a5.slice(1);
let a8 = a5.slice(1,4); // 2,3,4
console.log(a6);
console.log(a7);
console.log(a8);
// slice() => 얕은 복사 => 중첩배열, 객체는 주소값 그대로 따온다.
// 중첩만 아니면 새로운 값을 반환한다.
// 인자x => 전체 반환
// 인자 하나 => 해당 인덱스부터 끝까지 복사하여 반환
// 인자 두개 => 첫 인자의 인덱스부터 두 번쨰 인자의 길이까지 반환한다.

let a9 = ['How','Old'];
let a10 = ['Are','You'];
let a11 = a9.concat(a10);
console.log(a11);
// concat() => 서로 다른 배열을 하나로 합치는 메서드이다.


let a12  = [1,2,3,4,5,1,2,3,4,5]
console.log(a12.indexOf(2)); // 1
console.log(a12.indexOf(2,2)) // 6
// indexOf() => 해당 값에 대한 인덱스를 가져온다. 일치하지 않으면 -1를 가져온다.
// 중첩된 배열이라면? => 두 번쨰 매개변수의 로직은 해당 인덱스 이후부터 indexOf()로직을 실행하라라는 뜻이다.


// find() => 배열을 순환하면서 콜백함수의 조건에 만족하는 첫 번째 배열요소를 반환한다.
// 일치하지 않으면 -1를 반환한다.
// arr.find(callback(element, index, array), thisArg)

let a13 = [{name : 'hwt', age : 20}, {name : 'Coutinew', age : 30}, {name : 'Good Job', age : 40}];

let a14 = a13.find((element, idx, arr) => {
    return element.name == 'hwt'
}); // element는 객체의 이름이다. 그래서 객체.키 = 값

console.log(a14);

console.log('---------------review2day test------------------------------------')

let b = [1,2,3,4,5];
b.splice(-1,1,'good');
console.log(b);

let c = [5,1,2,5,1,2,5];
console.log(c.indexOf(5,4)); //4