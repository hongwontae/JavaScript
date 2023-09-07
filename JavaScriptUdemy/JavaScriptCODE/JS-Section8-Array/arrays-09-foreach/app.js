
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustPrices = [];

// for(const price of prices){
//   taxAdjustPrices.push(price*(1+tax))
// }
// console.log(taxAdjustPrices)


const a4 = prices.forEach((currentValue, idx, arr) => {
    const a1 = {index:idx, value : currentValue}
    console.log(a1)
})



const a1 = prices.forEach((currentValue, idx, arr) => {
  console.log(currentValue)
})

const a2 = prices.forEach((currentValue, idx, arr) => {
  console.log(idx)
})

const a3 = prices.forEach((currentValue, idx, arr) => {
  console.log(arr)
})