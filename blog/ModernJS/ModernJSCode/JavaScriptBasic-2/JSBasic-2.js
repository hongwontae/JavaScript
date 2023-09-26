console.log('-----------------------JSBasic-2.1------------------------------')
let a = undefined;
a = Number(a);
console.log(a); // NaN

let a1 = "Steven"
a1 = Number(a1);
console.log(a1); // NaN

let a2 = 's12a';
a2 = Number(a2);
console.log(a2); // NaN

let a3 = true;
a3 = Number(a3);
console.log(a3); // 1

let a4 = null;
a4 = Number(a4);
console.log(a4); // 0

let a5 = '12 3';
a5 = Number(a5);
console.log(a5); // NaN

let a6 = ' 1223 ';
a6 = Number(a6);
console.log(a6); //1223


let b = null;
b = Boolean(b);
console.log(b);

let b1 = 0;
b1 = Boolean(b1);
console.log(b1);

let b2 = '';
b2 = Boolean(b2);
console.log(b2);

let b3 = undefined;
b3 = Boolean(b3);
console.log(b3);



console.log('-----------------------JSBasic-2.2------------------------------')

let c = 10;
c= c%2;
console.log(c);

let c1 = 2;

let c2 = 'ko', c3 = 3;
console.log(c2+c3);
console.log('11'+3);
console.log('11'-2);

console.log(+true + +'12')
console.log(+undefined+'11');
// 대전제는 +연산에서 string이 하나라도 있다면 결합시켜버린다.

console.log(+false)
console.log(+undefined);
console.log(+null)
console.log(+'ss')
// +단항 연산자는 숫자로 형변환를 시킨다.

let c5 = 1;
console.log(++c5);
console.log(c5++)
// 증감연산자의 후위형 반환값은 전의 반환값이다.



console.log('-----------------------JSBasic-2.3------------------------------')
