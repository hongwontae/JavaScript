const a = 'koala3121\nkoala3121'
console.log(a);

const a1 = `koala3121
koala3121`
console.log(a1);
console.log(a1 === a);

const a2 = 'Killing Star Killng Star';
const a3 = a2.charAt(2);
console.log(a3); // 'l'

const a4 = a2.indexOf('S');
console.log(a4) //8

console.log(a2.length) //12, 25;

const a5 = a2.lastIndexOf('S'); 
console.log(a5); //21

const a6 = a2.substring(2); // 첫 번쨰 인자 인덱스부터 2 번쨰 인자 인덱스까지 가져와라
console.log(a6); // K

const a7 = a2.slice(0,5); // 음수로직이 되는 SubString/ slice는 복사의 의미로 많이 사용된다.
const a8 = a2.slice() // 전체 복사
console.log(a7);
console.log(a8);

const a9 = a2.includes('K');
console.log(a9);

const a10 = a2.startsWith('K')
console.log(a10);
