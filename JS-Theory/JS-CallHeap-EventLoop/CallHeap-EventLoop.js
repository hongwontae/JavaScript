const one = ()=>{
    return Promise.resolve('Resolve');
}

async function cool(){    
    console.log('cool-first');
    const data = await one();
    // await의 promise가 resolve가 되면 멈추지 않고 함수 자체가 마이크로 큐에 가게 된다.
    console.log(data);
    console.log('SSS')
}

console.log('111')
cool();
console.log('222');
console.log('222');
console.log('222');
console.log('222');
console.log('222');
console.log('222');
console.log('222');
console.log('222');
console.log('222');
console.log('222');
console.log('222');
console.log('222');