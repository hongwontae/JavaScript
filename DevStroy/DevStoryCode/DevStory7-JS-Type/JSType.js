
console.log('5'+1);
console.log(1+'5');
console.log('ko'+1)
console.log(1+'ko');

console.log('10'+true);
console.log(true+'10');
// string이 존재하면 + 기호는 무조건 접합한다. (이어 붙인다.)

console.log('10'-5);
console.log('10'%2);
console.log('10'*2);
console.log('10'/2);
console.log('10'-'5');
// -,*,/,% 기호는 string 숫자를 number타입으로 치환하여 계산한다.

console.log('c'-"c"); //NaN
console.log('100'%'s'); //NaN
// 치환이 불가능한 계산을 하려고 할 떄는 NaN이 반환된다.


console.log('1'===true);
console.log('1' == true); // 형 변환이 되어 1 == 1
// 동치 연산자나 ==== 이거나 되도록 형변환을 하여 계산을 하려고 한다.
