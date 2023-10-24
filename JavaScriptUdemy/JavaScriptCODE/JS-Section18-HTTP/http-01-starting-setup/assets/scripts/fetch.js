fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log(response.json())
})
  .then((data) => console.log(data))