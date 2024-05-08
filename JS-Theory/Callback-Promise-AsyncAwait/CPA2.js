console.log("a");


async function fff() {
  let fetchData =  await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await fetchData.json();
  return data;
};

console.log('c');

fff().then(resolve => {
  console.log(resolve)
})


console.log("b");
