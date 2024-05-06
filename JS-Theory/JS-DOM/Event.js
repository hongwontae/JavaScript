const input = document.getElementById('input');
const button = document.querySelector('button');


function fufu(){
    console.log(this)
}

button.addEventListener('click',fufu);


