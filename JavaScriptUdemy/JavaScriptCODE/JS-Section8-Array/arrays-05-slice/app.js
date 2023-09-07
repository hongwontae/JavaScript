
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.slice(2);
const a1 = testResults.slice(1);
const a2 = testResults.slice(1,5);
const a3 = testResults.slice(-3);

testResults.push(5.91);

console.log(testResults);
console.log(storedResults);
console.log(a1);
console.log(a2);
console.log(a3);