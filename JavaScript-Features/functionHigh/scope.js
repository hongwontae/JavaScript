// 범위는 소위 '변수 가시성'을 참조한다.

// 함수 범위
let bird = 'scarlet Macaw'
function birdWatch() {
    let bird = 'Great Blue Heron' // 만약 함수 내 변수 선언x => 가까운 변수를 찾아 넣는다.
    console.log(bird)
}
console.log(bird)
birdWatch()
// * 두 개의 차이점을 인식하자.

console.log('-----------------------------------------------------------------------------')

// 블락은 함수를 제외하고 기본적으로 중괄호가 있는 모든 곳을 가리킨다.
let radius =8;
if(radius>8){
    const pi =3.141592;
    let msg = 'Hiiii'
}   
    //console.log(pi)
    //console.log(msg)
// 조건문, for문의 블락에서 선언된 변수는 생명주기가 {}안에서 끝난다.
// let이나 const를 사용하면 {}안의 변수의 범위가 블록으로 지정된다.
// var는 아무데서나 접근이 가능하다.

// lexical 범위 (렉시컬 범위)
function bankRobbery(){
    const heroes = ['spiderMan', 'wolverine','black panther','badWomen']
    function cryForHelf(){
        function inner (){
        for(let hero of heroes){
            console.log(`PLEASE HELF US, ${hero.toUpperCase()}`)
        }
    } 
    inner();
}
    cryForHelf();
}
