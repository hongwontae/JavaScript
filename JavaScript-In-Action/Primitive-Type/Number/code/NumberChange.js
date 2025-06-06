function Test(v1, v2, v3){
    console.log(parseInt(v1), parseInt(v2), parseInt(v3))
    console.log(parseFloat(v1), parseFloat(v2), parseFloat(v3))
    console.log(~~v1, ~~v3)
    
}

Test('3.14', '3.14abc', 'abc3.14')