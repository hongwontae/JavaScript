console.log('-------------------------------JSBasic 3.1-------------------------------------')

let i =0;
while(i<10){
    console.log(i);
    i++
};


let i2 = 0;
while (i2 < 3) { // 0, 1, 2가 출력됩니다.
  console.log( i2 );
  i2++;
}

let i3 = 10;
while(i3){
console.log(i3);
i3--;
}

let i4 = 0;
do{
    console.log(i4);
    i4++
} while(i4<6);

console.log('---------------------------for')

for(let i=0; i<10; i++){
    console.log(i*2);
}

for(let i=0; i<10 ; i++){
    if(i%2 ==0){
        continue
    }
    console.log(i);
}

for(let i=0; i<10; i++){
    if(i ==5){
        break;
    }
    console.log(i)
}

let con = 100;

switch (con) {
    case 100: console.log('100입니다.')
        
        break;

    default: console.log('실패입니다.')
        break;
}


console.log('---------------------------JSBasic3.2~3.4')

function ko(){
    console.log('그댄 많이 힘든가봐요')
} // 함수 선언문

ko();

let ko2 = function(){
    console.log('그래서 그대는 날 잊고 사는지')
} // 함수 표현식

ko2();

let ko3 = [1,2,3,4,5];
ko3.forEach( function (currentValue) {
    console.log(currentValue);
}) // 익명함수, 콜백함수


let ko4 = ['내 아름다운', '사랑아', '머물수 있게'];

let zkzk = ko4.map( (currentValue, idx, arr) => {
    return currentValue;
}) // 화살표 함수 사용

console.log(zkzk);
