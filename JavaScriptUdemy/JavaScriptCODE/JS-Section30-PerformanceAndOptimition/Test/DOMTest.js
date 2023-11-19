const topDiv = document.querySelector('#topDiv');
console.dir(topDiv)

const button = document.querySelector('button');


button.addEventListener('click',()=>{
    const div = document.createElement('div');
    div.textContent = '1';
    topDiv.append('koala3121');
})