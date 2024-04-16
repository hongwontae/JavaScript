var a = 'HWT';
function add(){
    return 10;
}

function sumAll(n){
    if(n == 1) return n; 
    return n + sumAll(n - 1); 
}

let kkk = sumAll(3);
console.log(kkk);

console.log('ddd');

