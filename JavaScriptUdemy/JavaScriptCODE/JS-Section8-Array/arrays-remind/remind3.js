console.log('------------------------------------------------------------------------')
console.log('전개 연산자')

// 배열의 모든 요소를 꺼내 리스트로 만든다.
const b1 = [1,2,3,4,5,6,7,8,9,10]
const b2 = [...b1];
console.log(b1)
console.log(b2)

b1.push(12222)
console.log(b1)
console.log(b2);
// ... 전개연산자는 새로운 참조값을 가진다.

const b3 = [{naming : 'hwt', age : 20}, {naming : 'dnjsxoghd', age : 30}]
const b4 = [...b3];
console.log(b3);
console.log(b4);
// 복사된 것을 확인

b3.push(1000);
console.log(b3);
console.log(b4);
// 배열을 복사하여 새로운 값을 만든것은 맞다. 그렇기에 push에 영향을 받지 않는다.
// 객체의 값을 수정하면?

b3[0].naming = 'kkk';
console.log(b3);
console.log(b4);
// 객체의 값은 서로 상호작용한다.
// 전개연산자를 통해 새로운 배열 참조값이 b4에 적용됐지만 객체는 기존의 참조값을 가지고 있다. 
// => 배열은 새로운 참조값, 객체는 기존의 참조값을 가지고 b4로 온것이다.

const b5 = b3.map(currentValue => ({
    naming : currentValue.naming,
    age : currentValue.age
}))
// 이렇게 작성하면 서로 다른 참조값 갖는다. map은 각 요소들도 새로운 참조값을 부여하기 때문이다.

console.log(b5);

b3[1].age = 1000;
console.log(b3)
console.log(b5);

// const b6 = [1,2,3,4,5]
// const b7 = [b8,...b9];
// console.log(b8);
// console.log(b9);
// => 불가능한 로직이다.


console.log('-----------------------------------------------------------------------------')
console.log('배열 구조 분해')

const c = ['Max','Schemz']
const [c1,c2] = c;

console.log(c1);
console.log(c2);

const c3 = ['a','b','c','d','e','f','g'];
const [c4,...c5] = c3;
console.log(c4);
console.log(c5);

// 배열 구조 분해 할당이다. const [변수명1,변수명2..] = 기존의 배열 변수명 => 기존배열의 값들을 순차적으로 변수명1, 변수명2..에 넣는 로직이다.
// [...]rest연산자를 사용하게 되면 할당하고 남은(or 전체)를 배열 형태로 다 담는다.
// 이 rest연산자는 함수의 인자에 ... 쓰는 것과 같이 마지막에 위치시켜야 한다.
// 새로운 참조값을 가진채 변수에 대입되는 것이다.


console.log('-----------------------------------------------------------------------------')
console.log('전개 연산자와 배열 구조 분해할당')

// 전개 연산자는 