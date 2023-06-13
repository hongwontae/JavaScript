// DOM 이벤트 속성 => 사용자들이 하는 행동에 반응하는 작업을 뜻한다.
// 코드를 사용해서 클라이언트의 행동을 감지하고 반응을 할 수 있는 코드 => 이벤트 객체

// 이런 이벤트를 작업하는 방식에는 3개가 존재한다.
// 1. 인라인 방법
// 인라인으로 이벤트 속성을 넣어줄 수 있다.
//         1. html 파일에 javasScript 가독성 떨어진다.
//         2. 큰 따옴표, 작은 따옴표 실수 발생할 수 있다.
//         3. 여러 줄을 작성할 떄 세미콜론이 필수이다.-->

const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log('YOU clicked me')
    console.log('i hpe work')
} // 여기에 함수는 정의가 btn에 들어간것이다. 호출을 하면 안된다.

function scream(){
    console.log('aaaaaaaaaa')
    console.log('bbbbbbbbbbbbb')
} 
btn.onmouseenter = scream;

document.querySelector('h1').onclick = function (){
    console.log('tee mo')
} // 실제로 해야 하는 것은 onclick 특성을 함수 자체에 설정하는 것이다. 값은 함수어야 하고 함수를 참조해야 한다.
