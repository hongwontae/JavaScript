const btn = document.querySelector('button');
console.dir(btn);
console.dir(document.URL);

btn.addEventListener('click',function(e){
    console.log(this);
    console.log(e.currentTarget)
    console.log(e.target)
    console.log(e.type)
})

const ul = document.querySelector('#ul');
console.log(ul);

ul.addEventListener('click',function(event){
    console.log(event.target);
})