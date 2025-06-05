
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

// async function pickFruits(){
//     const applePromise = getApple();
//     const bananaPromise = getBanana();
//     // 병렬적 처리하는 방법
//     const apple = await applePromise;
//     const banana = await bananaPromise;
//     return `${apple} + ${banana}`
// }

function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '))
}

pickAllFruits().then(console.log)
