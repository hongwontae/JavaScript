function hwt(num1, num2=10) {
    return num1*num2
}
console.log(hwt(10));

const add = function hwt2(...param) {
    console.log(param)
}
add(1,1,1,1,1,1) // 동적으로 배열을 만드는 rest연산자