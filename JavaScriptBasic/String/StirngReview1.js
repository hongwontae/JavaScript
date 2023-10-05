// charAt();
let a = 'Szobo';
let a1 = a.charAt(0);
console.log(a1); //'S'

// IndexOf();
let a2 = 'Alister';
let a3 = a2.indexOf('i');
console.log(a3); // 2

// lastIndexOf()
let a4 = 'Alisong Alisong';
let a5 = a4.lastIndexOf('n'); 
console.log(a5) //13

// subString();
let a6 = 'Alexander';
let a7 = a6.substring(0,5);
let a8 = a6.substring();
let a9 = a6.substring(2);
console.log(a7); //Alexa
console.log(a8); //Alexander
console.log(a9); //exander

// repeat();
let a10 = 'Robertson ';
let a11 = a10.repeat(3);
console.log(a11); // RobertSon x 3

// replace();
let a12 = 'Lallana';
let a13 = a12.replace('La','Godd La');
console.log(a13);

// slice();
let a14 = 'Cline';
let a15 = a14.slice();
let a16 = a14.slice(2);
console.log(a15);
console.log(a16);

let a17 = 'Ager';
let a18 = a17.includes('A');
console.log(a18); //true;

let a19 = 'good game bad game soso';
let a20 = a19.split(' ',4);
console.log(a20);

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

