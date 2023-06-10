const prices = [
    9.99, 1.50, 19.99, 49.99, 30.50
]

let total = 0;
for(let price of prices){
    total+=price;
}
console.log(total)

const total1 =  prices.reduce((x,y) => {
    return x+y
})
// 두 개가 같은 작업을 한 것이다.

const minPrices = prices.reduce((min, price)=>{
    if(price<min){
        return price;
    } 
    return min;
})

const evens = [2,4,6,8,10,12,14,16,18,20];
evens.reduce((sum,num)=>sum+num,100)