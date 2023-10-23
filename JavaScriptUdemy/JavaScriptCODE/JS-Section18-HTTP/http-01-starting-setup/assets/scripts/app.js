const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');


const xhr = new XMLHttpRequest();

xhr.open('GET','https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json';

xhr.addEventListener('load',()=>{
    const listOfPosts = xhr.response;
    console.log(listOfPosts);
})
xhr.send();





