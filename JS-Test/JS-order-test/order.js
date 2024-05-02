console.log('first start')

function oo(callback1, callback2){
    callback1(4,4);
    callback2(10,10);
};

function add(a,b){
    console.log('dd1')
    return a+b
}


function multi(a,b){
    console.log('dd2')
    return a*b
}

oo(add, multi);

console.log('Love ++ ');

function rest(...args){
    console.log(args)
};

rest(1,2,3,4,5);




