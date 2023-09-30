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

    