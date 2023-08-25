const button = document.querySelector('button')
const h1 = document.querySelector('h1')

button.addEventListener('click',function(){
    
    // const r = Math.floor(Math.random()*255);
    // const g = Math.floor(Math.random()*255);
    // const b = Math.floor(Math.random()*255);
    // const newColor = `rgb(${r},${g},${b})`
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor
    h1.innerText = newColor;
})

const makeRandomColor = ()=>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`
}

//const body = document.querySelector('body') => 이렇게 하는 것보단 위 처럼 하는게 더 나은 엑세스 방법이다.
