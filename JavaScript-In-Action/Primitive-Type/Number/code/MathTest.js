function MathTest(value1, value2, value3){

    console.log(Math.round(value1), Math.round(value2))
    console.log(Math.floor(value1), Math.floor(value2))
    console.log(Math.ceil(value1), Math.ceil(value2))
    console.log(Math.trunc(value1), Math.trunc(value2))
    return value3
}

console.log(MathTest(10.4, 20.5, 30))