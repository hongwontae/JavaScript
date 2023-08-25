function rollDie(numSides){
    if(numSides === undefined){
        numSides=6
    }
    return Math.floor(Math.random()*numSides)+1
}

//default 매개변수
function rollDies (numsides=6){
    return Math.floor(Math.random()*numsides)+1
}

function name (msg,letter){
    console.log(`${msg} - ${letter}`)
}

function name1 (msg=그러나,letter){
    console.log(`${msg} - ${letter}`)
}
// 첫 번쨰 데폴트 값을 자바 스크립트는 언제 넣어야 하는지는 논리 구조에 있다.
// 그래서 순서가 중요하다.

function name2 (msg,letter="그러나"){
    console.log(`${msg} - ${letter}`)
}