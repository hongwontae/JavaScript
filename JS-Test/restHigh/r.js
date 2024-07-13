// 오버라이딩이 js에도 존재한다.

let a1 = {name : 1}

let a = {
    ...a1,
    name : 1000
}
console.log(a);
// 밑에 존재하는 것이 최종 우선순위를 가진다.

const b = [1,2,3];
const b1 = b.reduce((acc, cur)=>{
    return acc+cur
})
console.log(b1);