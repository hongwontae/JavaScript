let a = 10;
// 증감 연산자 후위형이면 다음 라인부터 적용된다.
console.log(a++);

let a1 = 'HWT'
let a2 = 'Alexander'
console.log(a1+a2);

let a3 = 10;
console.log(a2+a3)


let a4  = null ||  undefined || 4 || 'HWT';
console.log(a4);

if(4 || undefined){
    console.log('true++');
}

let height;
height = height ?? undefined;
console.log(height)