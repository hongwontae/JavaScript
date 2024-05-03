document.querySelector('button').addEventListener('click',function(evt){
    // alert('who are you>')
    console.log(evt)
})
// 이벤트 객체라는 것은 콜백 함수에 자동적으로 전달이 된다.

const input = document.querySelector('input');
input.addEventListener('keydown',function(evt){
    //console.log(evt.key) // 겂먼 나온다
    //console.log(evt.code) // 키보드에서의 실제 위치를 표시한다.
})


// input.addEventListener('keyup',function(evt){
//     console.log('keyUp')
// })
// keydown => 누르면 발동 
// leyUP => 떼면 발동

window.addEventListener('keydown', function(e){
    switch (e.code){
        case 'ArrowUp' : 
        console.log("UP!");
        break;

        case 'ArrowDown' : 
        console.log("DOWN!");
        break;

        case 'ArrowLeft' : 
        console.log("LEFT!");
        break;

        case 'ArrowRight' : 
        console.log("RIGHT!");
        break;
        default : console.log('Ignored you are message')
    }
})

// 이벤트 객체는 모든 이벤트 핸들러에 접근하고 자동으로 콜백함수의 매개변수에 전달된다.
