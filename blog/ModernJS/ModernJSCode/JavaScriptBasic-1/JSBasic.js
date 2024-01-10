// JS의 값은 특정한 타입이 존재한다.
// 타입 = 자료형
// 8가지 존재 string, number, bigInt, boolean, null, undefined, Object, symbol
// JS는 동적타입이다. => 변수에 저장되는 값의 타입은 언제든지 바뀌거나 바꿀 수 있다.

// typeof, typeof() => 아무거나 사용해도 같은 결과값이 반환된다.

let a = 'Alonse';
a = 3;
console.log(a); // 동적 타입

let a1 = 30000000n;
console.log(a1); // bigInt

let a2 = true
console.log(!a2); //false

let a3 = function(){console.log('a3')};
console.log(typeof a3);

let b = confirm();
console.log(b); //true

console.log(typeof null);

