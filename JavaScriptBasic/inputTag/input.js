const input = document.getElementById('input');
const div = document.getElementById('div');
const box = document.getElementById('box');


div.addEventListener('click',()=>{
    const text = input.value;
    console.log(text);
    box.append(text);

})




