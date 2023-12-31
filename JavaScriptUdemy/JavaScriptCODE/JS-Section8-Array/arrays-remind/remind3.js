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

const p = [1,2,3,4,5]
const p1 = [6,7,8,9,10]
const p2 = [...p,...p1]
console.log(p2);
console.log('p2')
// 두 개의 배열값을 복사해서 사용할 수 있다.


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

// 전개 연산자는 기존의 모든 배열값을 복사해서 새로운 참조값을 만들고 다른 변수에 넣는 로직이다.
// 이 때 우변에 사용하는 [...]은 rest연산자는 아니다.
// const 새롭게 복사한 값을 넣을 변수명 = [...기존의 배열값이 들어있는 변수명] => 새로운 값이다.

// 배열 구조 분해 할당은 배열의 값을 각자 다른 변수에 넣어주고 싶을 때 사용하는 것이다.
// const [새롭게 넣을 변수명, 새롭게 넣을 변수명, n~~] = 기존의 배열 변수명;
// 순차적으로 새롭게 넣을 변수명에 들어간다. (새롭게 들어간 값들은 순수한 값들이다. 배열에 둘러싸여 있지 않는다.)
// ex) 기존 배열이 [1,2,3]이 존재하고 새롭게 넣을 변수명이 2개라면 1,2만 들어가고 3은 들어가지 않는다. => 순차적으로 들어간다.
// 나머지 배열을 다 모아서 넣어주고 싶다면 rest연산자를 사용하면 된다. 로직은 함수의 인자에 들어가는 ...rest연산자와 비슷하다.
// ex) const a = [1,2,3,4,5,6,7,8,9,10] const [a1,,..a2] = a => a1=1, a2=[2,3,4,5,6,7,8,9,10] => rest연산자로 묶인 값들은 배열로 전달된다.


console.log('-----------------------------------------------------------------------------')
console.log('set 데이터 구조')
// set메서드를 사용하고 순서를 보장하지 않으며, 중복을 허용하지 않는다. Array.from()에 set을 넣으면 배열로 변한다.

const d = new Set();
d.add('hwt');
d.add(100).add('20000').add('koala3121') // set 이터러블에 값을 넣는 방법

console.log(d);
console.log(d.has('20000')) // set 데이터 구조에 값이 있는지 없는지 확인하는 방법
console.log(d.size); // set size을 확인하는 방법

d.delete('koala3121'); // set의 요소를 지우는 방법
console.log(d.size);

d.clear(); // set을 완전히 비우는 방법
console.log(d.size);

const d1 =new Set([1,2,3,4,5,6,7,8,9,10]);
d1.forEach((currentValue, idx, arr) => {
    console.log(currentValue);
})

// entries, values, key는 map과 상호작용하기 위해 만들어진 메서드이다.

const d2 = [...d1]; // Set 데이턱 구조를 배열로 바꾸는 첫 번쨰 방법
console.log(d2); 

const d3 = Array.from(d1); // Set 데이터 구조를 배열로 바꾸는 두 번째 방법
console.log(d3);


console.log('-----------------------------------------------------------------------------')
console.log('Map 데이터 구조')

// map은 객체와 유사하다. 순서를 보장하고 중복을 허용한다.
// 키를 가진 데이터 구조이다. 다만 객체와 다른 것은 객체는 키로 문자열만 받는데 map은 키의 제약사항이 없다.

const e = new Map();
e.set({name : 'HWT', age : 26},5)
console.log(e); // 키는 객체이고 value는 5인 다소 황당한 데이터를 가질 수 있다.

const e1 = new Map([['hwt',5],['ko','ko']]);
console.log(e1);

// const e2 = new Map([{name : 'd', age : 3},{name : 'koa'}]);
// console.log(e2); Map()의 생성자에 바로 객체를 넣으면 작동하지 않는다.

