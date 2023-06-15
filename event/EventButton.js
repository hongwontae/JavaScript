const makeRandomColor = ()=>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`
}

const buttons = document.querySelectorAll('button');

// for(let button of buttons){
//     button.addEventListener('click', function(){
//         this.style.backgroundColor = makeRandomColor();
//         this.style.color = makeRandomColor();
//     })
// }

for(let button of buttons){
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1')
// for(let h1 of h1s){
//     h1.addEventListener('click',function(){
//         console.log(this)
//         this.style.backgroundColor = makeRandomColor();
//         this.style.color = makeRandomColor();
//     })
// }

for(let h1 of h1s){
    h1.addEventListener('click',colorize)
}

// 이벤트 핸들러 콜백 안 함수 무엇이 대상이든 키워드 this가 참조된다.
// 이벤트가 어디서 일어나든 키워드 this는 그 요소를 참조한다.
// 키원드 this가 실행 컨텍스트나 발동 컨텍스트에 좌우된다.
// this는 항상 요소를 참조한다.
// 즉, 이벤트 핸들러에 의해 발동된 콜백 안에서 this가 사용될 떄 this가 선택요소를 참조한다.
function colorize(){
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}