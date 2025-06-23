function Test(z){
   console.log('a'.charCodeAt(0))
   console.log('b'.charCodeAt(0))
   console.log('z'.charCodeAt(0))

   console.log('A'.charCodeAt(0))
   console.log('B'.charCodeAt(0))
   console.log('Z'.charCodeAt(0))
}

Test('ello');


function Test2(a,b){
    let case1 = BigInt(a) + BigInt(b);
    return `${case1}`;
}

console.log(Test2("18446744073709551615", "287346502836570928366"))