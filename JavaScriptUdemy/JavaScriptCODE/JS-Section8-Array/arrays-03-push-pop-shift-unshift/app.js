const hobbies = ['cooking','sports']
console.log(hobbies);

hobbies.push('Coding'); // 맨 마지막에 추가하는 배열 메서드
console.log(hobbies) 

hobbies.pop(); // 배열의 마지막 요소를 삭제하는 배열 메서드
console.log(hobbies)

const popop = hobbies.pop(); // 변수에 값을 담아도 실행된다. 
console.log(hobbies)

const koala3121 = [1,2,3,4,5]
console.log(koala3121)

koala3121.unshift(0); // 첫 번쨰 요소로 추가된다.
console.log(koala3121) 

koala3121.shift(); // 첫 번쨰 요소를 삭제한다.
console.log(koala3121);

const ind = koala3121[2] // 인덱스로 접근하는 방법
console.log(ind);

koala3121[2] = '5'
console.log(koala3121)

koala3121[10] = 11; // empty공간 만들어진다. 
console.log(koala3121) 
