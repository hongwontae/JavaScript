let a = 'Alonso';
let a1 = new String('Xavi');
console.log(a);
console.dir(a1);

a1.name = 'Korea';
console.log(a1.name); // => String이 객체라 프로퍼티를 추가할 수 있다.
console.log(a1); 
// 원래 String은 유사배열객체이다. 그럼으로 length에 접근할 수 있고 인덱스에 접근할 수 있고 for-of를 사용하여 반환시킬 수 도 있다.

for(i of a1){
    console.log(i)
} // 'X','a','v','i';


let a2 = 'Big Bang';
let a3 = a2.charAt(5);
console.log(a3);


let a4 = 'IDWP IDWP';
let a5 = a4.indexOf('W',2);
console.log(a5);


let a6 = 'Apple Apple';
let a7 = a6.lastIndexOf('A');
console.log(a7);

// IndexOf, lastIndexOf의 로직은 인자로 받은 문자열과 비교하고자 하는 문자열이 일치하면 그대로 종료시킨다.
// 두 번쨰 매개변수를 주면 그 인덱스 다음부터 찾으라는 뜻이다. (인덱스+1)부터 찾아라


let a8 = 'ZkZkZk1234';
let a9 = a8.replace('ZkZkZk','ZERO ZONE ');
console.log(a9);
// replace() => 첫 번쨰 인자는 일치하는 문자열 일부 or 전체, 두 번쨰 인자는 바꿀 문자열
// a9의 값은 ZERO ZONE 1234;


let a10 = 'Zlatan Zlatan Zlatan Elliot';
let a11 = a10.split(' ');
console.log(a11);


let a12 = 'Who Are You??'
let a13 = a12.substring();
let a14 = a12.substring(1,7);
let a15 = a12.substring(3);
console.log(a13);
console.log(a14);
console.log(a15);
// substring() 
// 1. 인자가 없다면 모두 반환
// 2. 인자가 두 개라면 첫 번쨰 인자는 시점시점이고 인덱스 로직이다. 두 번쨰 인자는 몇 개의 문자열을 가져올지 정한다. 길이 로직이다.
// 3. 인자가 하나라면 해당 인덱스부터 끝까지 가져온다.


let a16 = 'showpang';
let a17 = a16.slice();
let a18 = a16.slice(2,4);
let a19 = a16.slice(-2);    

console.log(a17); // 전체
console.log(a18); // 'ow'
console.log(a19); // 'ng'
// slcie()는 substring과 로직은 같지만 인자에 음수를 넣을 수 있다.
// 음수의 로직은 길이 로직이고 뒤에서부터 길이까지 가져온다.


let a20 = 'Steven ';
let a21 = a20.repeat(3);
console.log(a21);
// repeat() => 문자열 반복 메서드


let a22 = 'Not Yet';
let a23 = a22.includes(' ');
console.log(a23);


let a24 = 'Good Game';
let a25 = a24.startsWith('G');
let a26 = a24.endsWith('e');
console.log(a25);
console.log(a26);
// startsWith() => 인자로 준 문자열이 해당 문자열의 시작점이 맞는가? Boolean으로 나타낸다.
// endsWith() => 인자로 준 문자열이 해당 문자열이 마지막이 맞는가? Boolean으로 나타낸다.



