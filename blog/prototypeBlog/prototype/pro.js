const obj = {
    a : 1,
    b : function(){
        console.log('b입니다.')
    }
}

console.log('obj.__proto__ === Object.prototype');
console.log(obj.__proto__ === Object.prototype);

console.log('Object.prototype.__proto__ === null');
console.log(Object.prototype.__proto__ === null);

console.log(obj);


console.log(typeof Object);
console.log(typeof obj);
console.log(obj.prototype);