const xhr = new XMLHttpRequest();
xhr.open('get','https://jsonplaceholder.typicode.com/posts/1')
xhr.send();

xhr.onload = ()=>{
    const res = JSON.parse(xhr.response);
    console.log(res);
}