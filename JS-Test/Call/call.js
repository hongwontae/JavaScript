const a = [1,22,'hhh'];
console.log(a['2']);
// 배열의 경우에는 대괄호 표기법으로만 접근할 수 있다.

const b = {name : 'hwt', 2 : '20202', 'sara-bia' : 'Man'};
console.log(b['sara-bia'])
console.log(b.name)
// 객체의 경우 인덱스 접근은 불가능하다. => 기본 특성
// 그러나 키값으로 접근할 떄 대괄호 표기법, dot 표기법 둘 다 가능하다.