// 재귀 Introduce

// function powerOf(x,n){
//     let result = 1;

//     for(let i=0; i<n; i++ ){
//         result*=x
//     }

//     return result;
// }

// console.log(powerOf(2,3));

function powerOf(x,n){

    // if(n===1){
    //     return x;
    // }
    // return x*powerOf(x, n-1);

    return n===1 ? x : x*powerOf(x,n-1); //2,2
}

console.log(powerOf(2,3));