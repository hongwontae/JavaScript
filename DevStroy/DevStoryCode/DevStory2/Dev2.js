let a = 'ss'; // let a = new String('ss');

console.log(a.indexOf('s')); // new String

console.log('String' === 'String');
console.log(true === true);
console.log(new String('JavaScript') === 'JavaScript'); // => 객체 === Stirng => false

console.log('-------------------------------------------------------------')

console.log(1=='1'); // true
console.log(1 === '1'); // false

let a2 = new String('java');
a2.name = 'koala3121';
console.log(a2.name); // 명시적으로 객체를 생성한다. => new 연산자를 사용한다. => typeOf object이다. 그럼으로 프로퍼티 추가가능

console.log(a);
console.log(a2);
console.log(typeof a);
console.log(typeof a2);


let b = 'str1';
console.log(typeof b);

let b2 = 'sss';
b2.name = 'dd';
console.log(b2.name);


let b3 = 1000n;
console.log(b3);
console.log(typeof b3);

console.log(typeof typeof b3);

let b4;
console.log(typeof b4);


