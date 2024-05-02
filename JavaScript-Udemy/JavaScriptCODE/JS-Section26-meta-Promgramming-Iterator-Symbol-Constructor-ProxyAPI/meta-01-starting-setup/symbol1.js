const uid = Symbol('uid');
console.log(uid);

const user = {
    [uid]: 'p1',
    name : 'Max',
    age : 30,
};

user[Symbol('uid')] = 'p2';
console.log(user);

console.log(Symbol('uid') === Symbol('uid'))

user[uid] = parseInt('1000');
console.log(user);
