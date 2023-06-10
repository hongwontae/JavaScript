const nums = [1,2,54,65,23,87,564,987987,345,123,123]
console.log(nums)
console.log(...nums)

console.log("starX")
console.log(..."starX")
// string 또한 객체이기에 펼쳐서 전개한다.

const cat =[1,2,3,4,5]
const dog = [10,20,30,40]

const animals = [...cat , ...dog]
console.log(animals)

console.log("--------------------------------------------------------------")


const str = ["hello"]
console.log(str)

const str1 = [..."hello"]
console.log(str1)
