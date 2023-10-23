const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const xhr = new XMLHttpRequest();

function sendHttpRequest(method, URL){
    const promise = new Promise((resolve, reject) => {

        xhr.open(method, URL);

        xhr.responseType = 'json';
        
        xhr.onload = function() {
          resolve(xhr.response);
        };
        
        xhr.send();
    })
    return promise;
}

function fetchPosts(){
    sendHttpRequest('GET','https://jsonplaceholder.typicode.com/posts').then(responseData => {
        const listOfPosts = responseData;
        for (const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            listElement.append(postEl);
          }
    })
}

fetchPosts();



