let a3 = 'str1';
console.log(a3); // 'str1'
console.log(typeof a3); // 'string'

let a4 = 100;
console.log(a4); // 100
console.log(typeof a4); // 'number'

let a5 = 100n;
console.log(a5); // 100n
console.log(typeof a5); // 'bigint'

let a6 = false;
console.log(a6) // false
console.log(typeof a6) // 'boolean'

let a7;
console.log(a7) // undefined;
console.log(typeof a7) // 'undefined'

let a8 = null;
console.log(a8) // null
console.log(typeof a8) // 'object'

let a = 1;
let a1 = 'Str1';
let a2 = true;
let func = function(){
	console.log('Hi')
};

console.log(typeof a); // 'number'
console.log(typeof a1); // 'string'
console.log(typeof a2); // 'boolean'
console.log(typeof func) // 'function';