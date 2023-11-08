const p = document.getElementById('p');
const div = document.getElementById('div');

p.addEventListener('click', ()=>{
    const text = p.textContent;
    navigator.clipboard.writeText(text).then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })
})