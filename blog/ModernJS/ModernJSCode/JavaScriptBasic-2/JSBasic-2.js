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
console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(undefined == NaN); // 동등연산자나 일치연산자에서 피연산자가 undefined나 null이면 형변환하지 않고 비교한다.

console.log('1' == 1); // true
console.log('1' === 1); // false
console.log(true == '1'); //true => 서로 다른 자료형끼리의 비교는 Number타입으로 치환해서 변환한다.



console.log('-----------------------JSBasic-2.4------------------------------')

// let d = prompt('자바스크립트의 공식 이름은 무엇일까요?', '');
// if(d == 'ECMAScript'){
//     alert('정답입니다.')
// } else{
//     alert('모르셨나요? 정답은 ECMAScript입니다.')
// }

// let player = 'Hong Won Tae';

// let playerTeam = player === prompt('정답을..','') ? 'RiverPool' : 'Manchester City';
// console.log(playerTeam)



console.log('-----------------------JSBasic-2.5------------------------------')

let k1 = undefined || null || 1 || false || 3;
console.log(k1); //1

let k2 = 1 && 0 && 'HWT' && null;
console.log(k2);  



let korea = 'korea';
let NorthKorea = null;

let k = NorthKorea ?? korea;
console.log(k);

console.log(true + 'koala3121');


console.log('-----------------------JSBasic-2 test------------------------------')
console.log(true+true); //2
console.log(true + +"10"); //11
let zk = 1;
zk+=5;
console.log(zk)

let zk1 = null || 3 || undefined;
console.log(zk1);
let zk2 = 3 && 4 && 5 && false;
console.log(zk2);




