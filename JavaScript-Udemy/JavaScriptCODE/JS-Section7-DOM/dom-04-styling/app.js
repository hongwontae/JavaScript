const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');

// section.style.background = 'blue'  // 1순위로 CSS가 적용된다.

section.className = ''; // 해당 css class가 사라진다.
section.classList = 'red-bg'

const button = document.querySelector('button')

// button.addEventListener('click', () => {
//   if(section.className === 'red-bg visible'){
//     section.className = 'red-bg invisible'
//   } else {
//     section.className = 'red-bg visible'
//   }
// })

button.addEventListener('click', () => {
  section.classList.toggle('invisible')
})  
