const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log('good')
})

const ul = document.querySelector('#ul');
console.log(ul);
ul.addEventListener('click',(e)=>{
    if(e.target){
        console.log(e.target.innerHTML);
    }
})
