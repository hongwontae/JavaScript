const d1 = document.querySelector('a')
console.log(d1)
// js 객체가 출현한다.

const d2 = document.querySelector('a').innerText
console.log(d2)

console.log("----------------------------------------------------------------------------")

const d3D = document.querySelector('p').innerText
console.log(d3D)

const d3 = document.querySelector('p').textContent
console.log(d3)

const d4 = document.querySelector('p').innerHTML
console.log(d4) //태그 모두 포함

//const c1 = document.querySelector('h1').innerText = '<i>asd</i>'
// 태그 사항 포함되지 않고 그대로 출력만 된다.

//const c2 = document.querySelector('h1').textContent = '<i>asd</i>'
// 마찬가지이다.

const c3 = document.querySelector('h1').innerHTML = '<i>Slikie Chickens</i>'
// 태그에 맞게 사항이 반영된다.

document.querySelector('img').id
// id를 반환한다.
document.querySelector('img').id = '#asd'
// asd로 id가 변환된다.

document.querySelector('img').src
// src가 출력된다.
document.querySelector('img').src = 'https://www.google.com'
// src가 변경된다.

document.querySelector('a').href
// 주소가 출력된다.
document.querySelector('a').href = 'https://www.naver.com'
// 주소가 변경된다.

const g1 = document.querySelector('input')
g1.getAttribute('type')

const g2 = document.querySelector('#tt1')
g2.getAttribute('type')
// 가져온다.

const s2 = document.querySelector('#tt1')
s2.setAttribute('type','password')
// 값을 변경했다.


