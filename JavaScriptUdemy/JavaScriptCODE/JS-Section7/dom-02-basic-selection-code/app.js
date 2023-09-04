// DOM 프로퍼티 탐구 및 변경
const h1 = document.querySelector('ul');
console.log(h1)

const h2 = document.querySelector('.list-item')
console.log(h2)

const h3 = document.querySelector('#main-title')
console.log(h3);

const h4 = document.querySelectorAll('.list-item');
console.log(h4)

const h5 = document.getElementById('main-title');
console.log(h5)

const h6 = document.getElementsByClassName('list-item')
console.log(h6);

const h7 = document.getElementsByTagName('li');
console.log(h7);

console.log('---------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------')


// 속성 VS 프로퍼티
const a1 = document.querySelector('h1');
console.log(a1);

a1.style.background = 'black';
a1.style.color = 'white';

const a3 = a1.textContent;
console.log(a3);
a1.textContent = 'Some New Thing!!'

console.log(a1.className)
console.log(a1.id)

const aa1 = document.querySelector('.list-item')
console.log(aa1.className)

aa1.className='koala3121';
console.log(aa1.className) // css class나 id도 변경할 수 있다.

const input = document.querySelector('input');
input.className = 'inp'
console.log(input.className)

console.log(input.value) // html상에서 확인가능