// const input = document.getElementById('input');
// const button = document.querySelector('button');


// function fufu(){
//     console.log(this)
// }

// button.addEventListener('click',fufu);


// // 버블링
// const div1 = document.querySelector('.cDiv');
// const p1 = document.querySelector('.cP');
// const button1 = document.querySelector('.cButton');

// div1.addEventListener('click', function(){
//     alert('div click');

// })

// p1.addEventListener('click', function(){
//     alert('p1 click');

// })


// button1.addEventListener('click', function(e){
//     e.stopPropagation();
//     alert('button1 click');

// })

// 캡쳐링
var divs = document.querySelectorAll('div');

divs[0].addEventListener('click', function(){
	console.log('div0')
}, )

divs[1].addEventListener('click', function(){
	console.log('div1')
}, {capture : true})


divs[2].addEventListener('click', function(){
	console.log('div2')
})


// // e-delegation
// const ul = document.querySelector('.ul');
// ul.addEventListener('click',(event)=>{
// 	console.log('Clcik!');
// 	console.log(event.target);
// 	console.log(event.currentTarget);

// })


// // preventDefault();
// const form = document.querySelector('form');

// form.addEventListener('submit', (e)=>{
// 	e.preventDefault();
// 	console.log('Helo!')
// })


