const button = document.querySelector('button');

button.addEventListener('click',()=>{
    const template = document.querySelector('template');
    const realTemplate = document.importNode(template.content,true);
    console.log(realTemplate);
    document.body.append(realTemplate);
})