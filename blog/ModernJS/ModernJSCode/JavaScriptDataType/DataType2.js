// 숫자형 => int와 bigInt

let a = 1e9;
console.log(a);

let a1 = 2e-1;
console.log(a1);

let a2 = 300;
console.log(typeof a2.toString()); 

let a3 = 40000;
Math.floor(a3);
console.log(a3);

let a4 = 50.12345;
console.log(a4.toFixed(2));

// toString() => 숫자를 문자로 바꿔주는 메서드
// toFixed() => 숫자의 소수점을 정하고 문자열로 반환하는 메서드

// Math 빌트인 객체
let b = 1234.1234;
console.log(+Math.random().toFixed(1)*10); // random 0~1사이의 랜덤한 난수를 반환
console.log(Math.floor(b)); // 소수점 내림
console.log(Math.ceil(b)); // 소수점 올림
console.log(Math.round(b)); // 소수점 반올림
console.log(Math.trunc(b)); // 소수점 무시
console.log(Math.max(a,a1,a2));
console.log(Math.min(a,a1,a2)); 
console.log(Math.pow(2,10)); // 거듭제곱

// isNaN => NaN이면 true
// isInfinity => 일반 숫자면 true nan이나 infinity면 false를 반환하는 메서드


//paresInt(), ParesFloat()
// => 문자열+숫자에서 숫자만 가져와서 number타입으로 반환해주는 메서드이다.

let c = '10나는';
let c1 = parseInt(c);
console.log(c1); //10

let c2 = '19나는20';
let c3 = parseInt(c2);
console.log(c3); 

let c4 = '너는10'; // => 앞에 문자열이 있다면 무조건 NaN을 반환한다
console.log(parseInt(c4)); //NaN




