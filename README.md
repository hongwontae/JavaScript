# JavaScript Mastery Repository
JavaScript의 기초, 개념, 이론 등 전반을 마스터하기 위한 종합 자료 모음입니다.


## Project Structure
- **[JavaScript-Thoery](https://github.com/hongwontae/JavaScript/tree/main/JS-Theory)** : JavaScript에 관한 이론에 대한 텍스트 파일과 코드
- **[JavaScript-In-Action](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action)** : 실용적인 JavaScript 개념과 코드에 대한 텍스트 파일과 코드
- **[JavaScript-High](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-High)** : 조금 어려운 개념이나 약한 부분에 대한 텍스트 파일
- **[JavaScript-Udemy](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-Udemy)** : Udemy에서 학습한 JavaScript 코드와 텍스 파일


## Highlights
1. **Array**
```javascript
let a1 = ['H','h',1,2,3,true];
console.log(a1.includes(2));
// includes(value) 해당 배열내에 해당 값이 존재여부 boolean

let a2 = [1,2,3,4,5];
a2.reverse();
console.log(a2);
// reverse => 배열을 뒤집는 메서드
// 기존의 배열의 값을 뒤집는다.


let a3 = [10,20,30,40,50];
let a4 = a3.reduce((acc, cur, idx, arr)=>{
    return acc+arr[idx]
}, 1000);
console.log(a4);
// reduce(초기값(누적값), 순회하는값, index, Array);


let a5 = 'Hong Won Tae Koala3121 q2tlxm123@daum.net';
let a6 = a5.split(' ');
console.log(a6);
// split 문자열을 배열로 split(구분자)


let a7 = a6.join(' ');
console.log(a7);
// join은 배열을 문자열로 join(구분자)
```
**(Text-File)[https://github.com/hongwontae/JavaScript/blob/main/JavaScript-In-Action/Array/ArrayMethod.txt]**
