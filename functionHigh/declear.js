function add(x,y){
    return x+y;
} // => 변수 선언문이라고 한다. 기본적인 함수 선언 방식이다.

const add1 = function (x,y) {
    return x*y;
} // => 함수 표현식이라고 한다.

function callTwice(func){
    func();
    func();
}

function callTenTimes(f){
    for(let i=0; i<10; i++){
        f()
    }
}

function rollDie(){
    const roll = Math.floor(Math.random()*6)+1
    console.log(roll)
}

callTwice(rollDie) 



