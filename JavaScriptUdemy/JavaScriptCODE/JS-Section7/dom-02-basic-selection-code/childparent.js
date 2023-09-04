console.log('-------------------------------parent')

const a1 = document.querySelector('li');
const a2 = a1.parentElement
const a3 = a1.parentNode
const a4 = document.parentNode;

console.log(a2);
console.log(a3)
console.log(a4)

console.log('--------------------노드와 요소의 차이점을 설명해주는--------------------------')

const a5 = document.documentElement.parentElement;
const a6 = document.documentElement.parentNode;

console.log(a5)//null
console.log(a6); //document Node


console.log('----------------------------child')


const a7 = document.querySelector('ul');
const a8 = a7.children;
const a9 = a7.childNodes;

console.log(a8);
console.log(a9);
