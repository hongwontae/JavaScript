// 형변환
let pro = prompt('Hello world',100);
console.log(`${pro} type은 ${typeof pro}`)
// 모든 걸 String으로 처리 => 암시적 형변환

// 증감 연산자
let a = 10;
++a
// a++
console.log(a);


// 논리 연산자
let a1 = 1 || 2;
console.log(a1);

if(a || a1){
    console.log(a+a1)
}

let b = 10;
let c = 20;

let d = b||c ? 'true' : 'false';
console.log(`${d} type은 ${typeof d}`);


// nullish 병합 연산자 ??
let height;
height = height ?? 100;
console.log(height)