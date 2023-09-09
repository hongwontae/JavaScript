// 배열과 Iterable과 유사배열객체
// => 이 3가지 개념은 서로 다른 영역이다.
// Iterable은 나중에 symbol의 개념에서 알아보자
// 유사배열객체는 for-of/ index활용 가능/ length을 사용할 수 있다. 그러나 배열 메서드는 사용하지 못한다.

console.log('-------------------------------------------------------------------')
console.log('배열 생성방식')
// 배열 생성방식
const a = [1,2,3,'hi'] // 일반적으로 많이 사용하는 배열 생성 방식이다.
console.log(a)

const a1 = new Array('H','W','T',function a(){console.log('ko')}) // array 생성자를 통해 배열을 만드는 방식이다.
console.log(a1)

const a2 = Array.of(1,2,3,4,5,6) // 일반적인 배열 생성 방식과 로직이 같다.
console.log(a2)

const a3 = Array.from([1,2,,3,4]) // Iterable이나 유사배열객체는 배열로 만드는 메서드이다. 그냥 배열을 만들 떄 사용해도 된다.
console.log(a3)

const a3EX = Array.from('koala3121') // String은 유사배열객체이다.
console.log(a3EX)


console.log('-------------------------------------------------------------------')
console.log('배열의 값 원칙')
// 배열의 값 원칙
const a4 = [1,2,'asd',true,{kkk : 'ko'},[111,222],function b(){}]; // 아무거나 넣어도 된다. 원시값이든 참조값이든..
console.log(a4) 


console.log('-------------------------------------------------------------------')
console.log('push, unshift, pop, shift')

const b = [1,2,3,4,5,6,7,8,9,10]
b.push(111) // 배열의 마지막에 추가하는 메서드
console.log(b)

b.unshift(0); // 배열의 맨 처음에 추가하는 메서드  
// ★ unshift/shift로직은 맨 처음에 값을 추가하기 위해서 기존의 값들을 한 칸씩 옆으로 치우고 그 자리에 넣는 것이다.
// push와 pop은 마지막에 추가하거나 뺴기만 한다. => push와 pop이 성능이 더 좋다.
console.log(b);

b.pop() // 마지막 배열의 값을 삭제하는 메서드
console.log(b); 

b.shift() // 첫 번쨰 배열의 값을 삭제하는 메서드
console.log(b);


console.log('-------------------------------------------------------------------')
console.log('splice()')

const c = [1,2,3,4,5,6,7,8,9,10]
c.splice(2,2)
console.log(c)

const c1 = [10,20,30,40,50]
c1.splice(1,3,100,200)
console.log(c1)

const c2 = [100,200,300,400,500,600]
c2.splice(3)
console.log(c2)

const c3 = [1000,2000,3000,4000,5000,6000,7000]
console.log(c3);

const c4 = c3.splice(1,2,'aaa')
console.log(c4) // 제거된 배열의 값 배열로 출력

c3.push(100000);
console.log(c3)
console.log(c4[0]) // 제거된 배열의 값 배열 인덱스 값 반환된다.

// 이 결과는 무엇을 의미하는가?
// splice의 메서드를 다른 변수에 넣으면 그 반환값은 splice()로 제거된 배열의 값이 출력된다.
// => splice()는 참조값을 따질것도 없다는 것이다.