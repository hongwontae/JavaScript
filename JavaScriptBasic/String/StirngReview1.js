// charAt(); 
let a = 'Szobo';
let a1 = a.charAt(0);
console.log(a1); //'S'
// 해당 인덱스에 일치하는 문자열 하나 가져오기

// IndexOf();
let a2 = 'Alister';
let a3 = a2.indexOf('i');
console.log(a3); // 2
// 해당 문자열에 일치하는 인덱스 가져오기

// lastIndexOf()
let a4 = 'Alisong Alisong';
let a5 = a4.lastIndexOf('n'); 
console.log(a5) //13
// indexOf의 로직인데 뒤쪽부터 시작

// subString();
let a6 = 'Alexander';
let a7 = a6.substring(0,5);
let a8 = a6.substring();
let a9 = a6.substring(2);
console.log(a7); //Alexa
console.log(a8); //Alexander
console.log(a9); //exander
// 원하는 문자열 가져오기.

// repeat();
let a10 = 'Robertson ';
let a11 = a10.repeat(3);
console.log(a11); // RobertSon x 3
// 인자의 숫자만큼 반복한다.

// replace();
let a12 = 'Lallana';
let a13 = a12.replace('La','Godd La');
console.log(a13);
// 첫 번쨰 인자와 두 번쨰 인자를 교체한다.

// slice();
let a14 = 'Cline';
let a15 = a14.slice();
let a16 = a14.slice(2);
console.log(a15);
console.log(a16);
// 복사하는 메서드

let a17 = 'Ager';
let a18 = a17.includes('A');
console.log(a18); //true;
// 포함되는지 Boolean으로 나타낸다.

let a19 = 'good game bad game soso';
let a20 = a19.split(' ',4);
console.log(a20);
// 쪼꺠서 배열을 만드는 메서드이다.

let a21 = 'Lukas Moura';
let a22 = a21.endsWith('a');
console.log(a22);

let a23 = 'Back And Go';
console.log(a23.startsWith('B'));

let a24 = new String('Rambert');
let a25 = 'Rambert';
console.log(a24 === a25); //false

console.log(a25 === a25.valueOf()); // valueOf
console.log(a25 === a25.toString()); // valueOf

