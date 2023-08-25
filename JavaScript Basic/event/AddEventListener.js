// 가장 좋은 이벤트 방법 => addEventListener()을 이용하는 것이다.
// 감지하고 싶은 어떤 이벤트든 전달할 수 있다.
// (이벤트(문자열), 콜백함수) 파라미터가 두 개이다.

const btn3 = document.querySelector('#v3')
btn3.addEventListener('click',function(){
    alert('i love you')
})

function screen(){
    console.log('찰리 아담')
}
// const btn3 = document.querySelector('#v3')
// btn3.addEventListener('click',screen)
// 이벤트 리스너는 익명함수 대신 일반 함수가 와도 된다.


function twist (){
    console.log('twist')
}

function shout(){
    console.log('shout')
}

const tasButton = document.querySelector('#tas');
// tasButton.onclick = twist;
// tasButton.onclick = shout;
// 이런 일반적인 방법으로는 두 개를 같이 사용할 수 없다.
// 겹치면 덮어버린다는 뜻이다.
tasButton.addEventListener('click',twist, {once:true}) 
tasButton.addEventListener('click',shout)
// but add이벤트리스너는 원하는 만큼 콜백을 넣어 적용시킬 수 있다.
// 그리고 콜백 뒤에 옵션을 줘서 효과를 다양하게 가져갈 수 있다.
// once true => 한번만 실행하고 다음번엔 실행 x


