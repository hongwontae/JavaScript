const inputName = document.getElementById('name')
const inputAge = document.getElementById('age');
const form = document.querySelector('form');

form.addEventListener('onSubmit',()=>{
    console.log(inputName.value);
    console.log(inputAge.value);
})