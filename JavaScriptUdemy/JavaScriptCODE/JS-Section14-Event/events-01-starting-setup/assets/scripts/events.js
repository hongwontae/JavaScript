const button = document.querySelector('button');

// button.onclick = function(){
    
// }

const buttonClickHandler = () => {
    alert('Button was Clicked')
}

button.onclick = buttonClickHandler;

console.dir(button)