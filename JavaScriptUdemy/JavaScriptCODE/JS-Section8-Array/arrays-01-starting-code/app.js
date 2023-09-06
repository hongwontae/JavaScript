const number = [1,2,3,4];
console.log(number)

const moreNumber = new Array('html','alex');
console.log(moreNumber) // 위와 로직과 비슷하다.
const moreMix = new Array(5);
console.log(moreMix) // 빈 배열 5개
const notNewArray = Array(1,2);
console.log(notNewArray); // new를 쓰지 않아도 된다.

const yetMoreNumber = Array.of(1,2);
console.log(yetMoreNumber);

const listItem = document.querySelectorAll('li')
console.log(listItem);
console.log(listItem[0].textContent)

const listItem2 = document.getElementsByTagName('li');
console.log(listItem2)