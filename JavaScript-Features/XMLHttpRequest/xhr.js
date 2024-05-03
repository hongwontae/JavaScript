const xhr = new XMLHttpRequest();
xhr.open('post','https://jsonplaceholder.typicode.com/posts')
xhr.setRequestHeader('Content-type','application/json')
xhr.send(JSON.stringify({
    title : 'foo',
    body : 'bar',
    userId : 1
}));

xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    console.log(data);
}

const xhr2 = new XMLHttpRequest();
xhr2.open('get','https://jsonplaceholder.typicode.com/posts');
xhr2.send();

xhr2.onload = ()=>{
    const data2 = JSON.parse(xhr2.response);
    console.log(data2);
    console.log(this);
}
