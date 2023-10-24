const a = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Done')
    },3000);
});

a.then(data => {
    console.log(data);
    return new Promise((resolve, reject)=>{
        resolve('Done')
    })
}).then(data => {
    console.log(data);
    return 'Moon Jae In'
}).then(data => {
    console.log(data);
})