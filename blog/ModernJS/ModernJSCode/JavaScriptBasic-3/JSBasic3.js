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