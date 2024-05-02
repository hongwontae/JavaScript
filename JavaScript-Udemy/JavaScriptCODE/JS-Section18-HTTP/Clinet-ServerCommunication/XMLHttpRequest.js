const xhr = new XMLHttpRequest();
console.dir(XMLHttpRequest)
console.dir(xhr)

xhr.open('get','https://jsonplaceholder.typicode.com/posts');
xhr.responseType = 'json'
xhr.onload = function(){
    console.log(xhr.response)
    console.log(typeof xhr.response)
}

xhr.send();

