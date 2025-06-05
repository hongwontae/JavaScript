console.log("a");


async function fff() {
  let fetchData =  await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await fetchData.json();
  console.log(data+'Hello!');
  return data;
};

console.log('c');

fff().then(resolve => {
  console.log(resolve)
})


console.log("b");
