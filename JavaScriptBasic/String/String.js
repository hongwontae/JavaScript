let a = 'HWT';
console.log(a.length); // length => 3 길이를 알려주는 String 객체의 프로퍼티이다.

// string 객체의 모든 메서드는 새로운 값을 반환한다. => 원시값은 immutable한 값이기 때문이다.

let a1 = 'Xavi Alonse';
let a2 = a1.charAt(3); // charAt => 인자의 인덱스에 대한 문자열을 반환한다. => i
console.log(a2);

let a3 = 'Jorden Henderson';
let a4 = a3.indexOf('d'); // indexOf => 인자의 문자열에 대한 인덱스를 반환한다. => 3
let a44 = a3.indexOf('x'); // 해당하는 문자열이 없다면 -1를 반환한다.
console.log(a4);
console.log(a44);

let a5 = 'Alexander Aronld'; 
let a6 = a5.lastIndexOf('l'); // indexOf와 같은데 뒤에서부터 찾는다.
console.log(a6);

let a7 = 'Adem Lallana';
let a8 = a7.replace('Adem', 'Adam'); // replace => 첫 번쨰 매개변수의 문자열을 두 번쨰 매개변수 문자열로 교체한다.
console.log(a7);
console.log(a8);
