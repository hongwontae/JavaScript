// window
let a = ()=>{
    console.log('aaa')
}

function aa(){
    console.log('KKK')
}

var oo = 1;

// Scope

if(1==1){
    let i = 10;
    console.log(i);
}

// console.log(i); => 불가능하다. 블록 스코프에 접근불가

let a2 = function(){
    let psg = 1000;
    console.log(`${psg} 이강인`);
}

a2();

// console.log(psg); // => 불가하다. 함수 스코프에 접근불가



if(!false){
    var kkkWhite = '100';
    console.log(kkkWhite)
}
 kkkWhite = 1000000;

console.log(kkkWhite);






