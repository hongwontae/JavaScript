const btns = document.getElementsByTagName('button');
console.log(btns);
console.log(btns[0]);

const div = document.querySelector('#div');
console.log(div.children);
const cr1 = document.createElement('div');
cr1.textContent = 'Koala3121'
div.append(cr1);

const bbb = document.querySelector('.cla1');
console.log(bbb.classList);
bbb.replaceWith(cr1)