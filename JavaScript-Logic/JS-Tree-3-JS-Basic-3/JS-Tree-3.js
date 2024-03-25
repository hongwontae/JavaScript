// // while 문
// let i = 10;
// while(i){
//     console.log(i)
//     i--;
// };

// let k = 0;
// while(k<=10){
//     console.log(k*k);
//     k++;
// }

// //do while
// let o = 10;
// do{
//     console.log(o)
//     o--
// }while(o)

// for
for(let i=0; i<=7; i++){
    console.log(`for 반복문의 값 ${i} `)
}

// switch-case
let a = 7;
switch (a) {
    case 6:
        console.log('6과 일치한다.')
        break;
    case 7 : 
    console.log('7과 일치한다.')
    break;
    default: console.log('일치하는 것이 없다.')
        break;
}

// function
add(console.log(add(2,4)));

function add(a,b){
    let c;
    c = a+b
    return c;
} // 함수 선언문 => 호이스팅

let minus = (a,b)=>{
    return a-b
} // 함수 표현식 => 호이스팅x

console.log(minus(10,11))

// ------------callback Basic
function hi(){
    console.log('HI')
    return 1
}

function goodbye(){
    console.log('Good By')
    return 10;
}

function night(a,b){
    a();
    return b()
}

let a1 = night(hi, goodbye)
console.log(a1);


