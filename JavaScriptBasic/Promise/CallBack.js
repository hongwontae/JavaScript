function printImmediately(print){
    print();
}

console.log(1)
console.log(2);
setTimeout(()=>{console.log('SetTimeOut의 콜백함수야')},2000)
printImmediately(() => {
    console.log('Hello')
}); // 이 경우 콜백함수가 비동기적으로 처리되지 않는다.

function printWithDelay(print, timeout){
    setTimeout(print, timeout)
}
printWithDelay(() => {console.log('printWithDelay')},2000);


class UserStorage{
    loginUser(id,password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'ellie' && password === 'dream')||
                    (id === 'coder' && password === 'academy')
                ){
                    resolve(id);
                } else{
                    reject(new Error('not found'))
                }
            },2000);
        })

    }

    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'ellie'){
                    resolve({name : 'ellie', role : 'admin'});
                } else{
                    reject(new Error('no Access'))
                }
            },1000)
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id,password)
 .then(userStorage.getRoles)
 .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
 .catch(console.log);