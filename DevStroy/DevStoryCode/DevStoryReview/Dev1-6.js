// Dev1

// null => 의도적으로 값이 없다는 것을 나타내는 값이자 타입이다.
// undefined => 값이 할당되지 않았음을 알리는 값이자 타입이다.

// typeof => 해당 변수의 타입을 알려준다. 7개로 나타낸다. 반환값은 string이다.
// number, undefined, boolean, object, function, string, symbol

let a = [1];
console.log(typeof a); // object

let a1 = () => {console.log('k')};
console.log(typeof a1); // function => 타입으로 함수를 구분할 수 있게 해줬다.

let a2 = null;
console.log(typeof a2); //object => JS버그이다. 


// Dev2

// primitive type => string, number, bigInt, boolean, null, undefined, symbol 7가지가 존재한다.
// 메모리 상에서 값 자체가 저장된다. => 불변이다. 재할당은 가능하다.
// valueOf() => 특정 객체의 원시값을 반환한다.
// 래퍼 객체 => 원시값을 객체값으로 변환한다. 5개의 원시타입을 래핑한다.
// == => 값만 비교한다./ === 값과 타입을 같이 비교한다.

let b = 1;
let b1 = new Number(1);
console.log(b1);
console.log(b1+1);

console.log(b == b1);
console.log(b === b1); // => 원시값인 number와 객체타입인 Object랑 비교임으로 false
console.log(b1.valueOf());


