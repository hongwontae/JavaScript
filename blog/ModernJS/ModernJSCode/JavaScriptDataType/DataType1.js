let a = 1; // => 원시값
// 원시값은 변수에 데이터 타입 하나만을 저장할 수 있다.
// JavaScript 원시값에 대해서 프로퍼티와 메서드를 활용할 수 있게 해준다면 효율성이 증대
// 래퍼 객체라는 개념이 탄생합니다.

// 래퍼 객체 === 임시 래퍼 객체 => false;
console.log(typeof a); // number
let a1 = {};
console.log(typeof a1); //Obejct


// 래퍼객체
let b = new String('String');
b.test = 'Lukas Moura';
console.log(b.test); // => 임시래퍼객체가 아니라 래퍼객체 일반 객체이기 때문이다.

// 일반적인 형변환
let c = 5;
let c1 = String(c);
console.log(c1);
console.log(typeof c1);





