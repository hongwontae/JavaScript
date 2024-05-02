const uuid = Symbol();

user = {
    name : 'hwt',
    [Symbol.toStringTag] : "Object has Unknown"
};
console.log(user.toString());

