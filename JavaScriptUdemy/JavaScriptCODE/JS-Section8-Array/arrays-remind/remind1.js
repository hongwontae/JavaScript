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


console.log('-------------------------------------------------------------------')
console.log('slice()')

const d = [1,2,3,4,5,6,7,8,9,10]
const d1 = d.slice() // 배열을 복사하여 다른 변수에 대입한다.
console.log(d);
console.log(d1);

d.push(100);
d1.push(1000);
console.log(d);
console.log(d1);
// 복사하여 값을 넣었다. / 각자의 배열에 push를 했다./ 상호작용하지 않는다./ => 각자 다른 참조값을 가지고 있다는 뜻이다.

const d2 = d.slice(2); // 2인덱스부터 끝까지 복사한다. 그니까 3부터
console.log(d2);

const d3 = d.slice(2,8); // 2인덱스부터 3부터/ 전체의 배열길이 - 첫 번째 매개변수 6개를 오른쪽부터 반환한다.
console.log(d3);

const d4 = d.slice(3,10); // 7개 반환/  3인덱스부터 시작해서
console.log(d4)


console.log('-------------------------------------------------------------------')
console.log('concat()')

const e = [1,2,3,4,5,6,7,8,9,10]
console.log(e.concat(1,2,3,4,5,6))
console.log(e.concat([11,12,13,14]))
// concat의 매개변수에 숫자를 넣어도 배열을 넣어도 기존 배열에 더하여 들어간다.
// (16) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6]
// (14) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// ★ 새로운 참조값을 만드는 메서드에 대입할 변수가 없다면 실행하고 끝내버린다. => 기존의 값을 건드리면 안되니까

const e1 = e.concat(1,2,3);
console.log(e1);


console.log('-------------------------------------------------------------------')
console.log('indexOf(), lastIndexOf()')

const f = [1,2,3,4,5,6,7,8,9,10]
const f1 = f.indexOf(2);
console.log(f1);

const f2 = [1,2,3,4,5,1,2,3,4,5]
const f3 = f2.indexOf(2);
console.log(f3);
// f2의 배열에서 2의 값의 인덱스 위치는 두개이다. indexOf의 로직은 왼쪽에서 일치하는 값을 찾으면 인덱스를 반환하고 종료한다.
const f4 = f2.indexOf(2,2);
console.log(f4) 
// 일치하는 값을 정확하게 찾기 위해 두 번쨰 매개변수가 있는 것이다. 두 번쨰 매개변수는 그 인덱스 이후부터 일치하는 값을 찾으라는 뜻이다.

const f5 = f2.lastIndexOf(3);
console.log(f5); // indexOf와 로직이 같지만 lastIndexOf는 왼쪽부터 찾는다.

const f6  = f2.indexOf(111);
console.log(f6); // 매개변수 값에 일치하는 인덱스가 없으면 indexOf는 -1를 반환한다.







