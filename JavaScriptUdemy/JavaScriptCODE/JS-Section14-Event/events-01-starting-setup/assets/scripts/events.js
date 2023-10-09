const button = document.querySelector('button'); // nodeList = 유사배열객체
// console.log(buttons)

// // button.onclick = function() {

// // };


const buttonClickHandler = (e) => {
   //e.target.disabled = true;
   console.log(e)
};

// const anotherButtonClickHandler = () => {
//   console.log('This was clicked!');
// };

// // button.onclick = buttonClickHandler;
// // button.onclick = anotherButtonClickHandler;

// const boundFn = buttonClickHandler.bind(this);

// // button.addEventListener('click', buttonClickHandler);

// // setTimeout(() => {
// //   button.removeEventListener('click', buttonClickHandler);
// // }, 2000);

// buttons.forEach((btn) => {
//     btn.addEventListener('mouseenter',buttonClickHandler);
// })


// window.addEventListener('scroll', event => {
//     console.log(event)
// });

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)
})

const div = document.querySelector('div');
div.addEventListener('click', event => {
    console.log('clicked div')
    console.log(event);
})

button.addEventListener('click',(event) => {
    event.stopPropagation();
    console.log('clicked click me button')
    console.log(event);
})




