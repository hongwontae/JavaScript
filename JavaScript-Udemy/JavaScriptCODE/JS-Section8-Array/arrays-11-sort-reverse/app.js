
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

const sorted = prices.sort((a,b)=>{
  if(a>b){
    return 1;
  } else if(a === b){
    return 0;
  }else{
    return -1;
  }
})

console.log(sorted)


const a1 = prices.sort((a,b)=>{
  if(a<b){
    return 1
  } else if(a === b){
    return 0
  } else{
    return -1
  }
})

console.log(a1)

