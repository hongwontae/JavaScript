let x = 5;

let a = (function(){
    let sum = x+20;
    return sum;
})();
console.log(a);

let a1 = (function(){
    let sum2 = x+30;
    return sum2;
}());

console.log(a1);