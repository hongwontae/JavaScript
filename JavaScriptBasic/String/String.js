let a = 'HWT';
console.log(a.length); // length => 3 길이를 알려주는 String 객체의 프로퍼티이다.

// string 객체의 모든 메서드는 새로운 값을 반환한다. => 원시값은 immutable한 값이기 때문이다.

let a1 = 'Xavi Alonse';
let a2 = a1.charAt(3); // charAt() => 인자의 인덱스에 대한 문자열을 반환한다. => i
console.log(a2);

let a3 = 'Jorden Henderson';
let a4 = a3.indexOf('d'); // indexOf() => 인자의 문자열에 대한 인덱스를 반환한다. => 3
let a44 = a3.indexOf('x'); // 해당하는 문자열이 없다면 -1를 반환한다.
console.log(a4);
console.log(a44);

let a5 = 'Alexander Aronld'; 
let a6 = a5.lastIndexOf('l'); // indexOf와 같은데 뒤에서부터 찾는다.
console.log(a6);

let a7 = 'Adem Lallana';
let a8 = a7.replace('Adem', 'Adam'); // replace() => 첫 번쨰 매개변수의 문자열을 두 번쨰 매개변수 문자열로 교체한다.
console.log(a7);
console.log(a8);


let a9 = 'Andrew Robertson';
let a10 = a9.split(' ');
let a11 = a9.split('');
let a12 = a9.split('e'); 
// split() => 첫 번쨰 매개변수를 기준으로 나눠서 배열에 넣는다.
// a12를 보면 e가 기준자이다. 기준자는 제거된다. a12 = [Andr, w Rob, rtson]
console.log(a10);
console.log(a11);
console.log(a12);


let a13 = 'Abrahima Konate';
let a15 = a13.substring(0,2);
let a16 = a13.substring(0,5);
let a17 = a13.substring(2,10);
let a177 = a13.substring();
// 첫번째 인수로 전달한 인덱스에 해당하는 문자부터 두번째 인자에 전달된 인덱스에 해당하는 문자의 바로 이전 문자까지를 모두 반환한다.


console.log(a15); // Ab
console.log(a16); // Abrah
console.log(a17); // rehima K
console.log(a177); // 아무것도 전달하지 않으면 모든 문자열을 반환한다.


let a18 = 'Mac Alistrt';
let a19 = a18.slice(-1);
 // slice() => substirng과 같은 로직이지만 음수를 전달하여 사용할 수 있다.
 // 음수는 뒤에서부터 가져온다는 뜻이고 인덱스가 아니라 길이 로직으로 받아들인다.
 // 음수 로직은 매개변수가 하나여야만 작동된다.
let a20 = a18.slice(-5);

console.log(a19);
console.log(a20);

let a21 = 'Coutinew ';
console.log(a21.repeat(2)); // repeat() => 해당 문자열을 반복해주는 메서드이다. 숫자를 넣으면 그 숫자만큼 반복한다.

let a22 = 'Lovren';
console.log(a22.includes('L')); // includes() => 인자의 문자열이 해당 문자열에 존재하는 Boolean으로 반환한다.

let a23 = 'QuanSa';
console.log(a23.startsWith('Q')); // startsWith() => 인자의 문자열로 해당 문자열이 시작하는지 Boolean으로 반환한다.
console.log(a23.startsWith('q'));

let a24 = 'Cutis Jones';
console.log(a24.endsWith('s')); // endsWith() => 인자의 문자열로 해당 문자열의 마지막이 맞는지 Boolean으로 반환한다.
console.log(a24.endsWith('S'));


let a25 = new String('Firmino');
let a26 = 'Firmino';
console.log(a25 == a26);
console.log(a25 === a26);

a25 = a25.valueOf();
console.log(a25 === a26); // true 
// a25는 객체, a26은 원시값이다. 일치 연산자는 false => valueOf로 객체의 값을 원시값으로 바꾸고 일치 연산자 사용 => true;



