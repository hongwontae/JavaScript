let a = Number.MAX_SAFE_INTEGER;
console.log(a);
let a1 = Number.MIN_SAFE_INTEGER;
console.log(a1);
let a2 = Number.MAX_VALUE;
console.log(a2);

console.log('Math을 이용한 최대값 최소값')

let a3 = Math.pow(2,53)-1;
console.log(a3);

let a4 = Math.pow(-2,53)+1
console.log(a4);


const random = Math.round(Math.random()*10);
console.log(random);

function productDescription(a,b,c){
    console.log(a)
    console.log(b)
    console.log(c)
    return 'This is a product'
}

const prod = 'JavaScript Code';
const price = 3000;

const productOutput = productDescription`This product (${prod}) is {${price}}.`; // 이 형태가 호출된 형태이다.
