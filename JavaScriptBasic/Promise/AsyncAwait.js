
async function fetchUser(){

    return 'ellie';

}

const user = fetchUser();
user.then(console.log);
console.log(user);


function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function getApple(){
    await delay(1000);
    return 'Apple';
}

async function getBanana(){
    await delay(1000);
    return 'Banana';
}

// function pickFrutis(){
//     return getApple().then(apple => {
//         return getBanana().then(banana =>`${apple} + ${banana}`)
//     })
// }

// pickFrutis().then(console.log);

async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`
}

let a = pickFruits();
a.then(console.log);
