const one = ()=>{
    return Promise.resolve('Resolve');
}

async function cool(){    
    console.log('cool-first');
    const data = await one();
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