// let a = '

// ' => 이렇게 사용하면 오류가 발생한다. 큰 따옴표나 작은 따옴표 둘 다 오류 발생
let a1 = 'sti'

let a  = `

${a1}

`;

console.log(a); // => 행을 여러개 사용하여 묶을 수 도 있고 해당 값을 그대로 사용할 수 도 있다.

let a3 = true;
let a4 = false;
let a2 = `${a4 ? 'ko':'k2'}`;
console.log(a2); // => 삼항 연산자가능