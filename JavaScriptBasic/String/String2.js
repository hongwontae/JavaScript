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
// 
