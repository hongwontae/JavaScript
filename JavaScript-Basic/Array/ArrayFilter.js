const a = [1,2,3,4,5];

const a1 = a.filter((ele, idx, arr)=>{
    return ele === arr[1]
})

console.log(a1);