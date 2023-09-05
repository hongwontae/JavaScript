const ul = document.querySelector('ul');
ul.innerHTML = '<h2>koala3121</h2>';

const h1 = document.querySelector('h1');
h1.textContent = '<h1>ooo</h1>' // 태그 입력 불가능

ul.innerHTML = ul.innerHTML + '<p> 나는 전설이다. </p>'
// 성능의 저하

ul.insertAdjacentHTML("beforeend",'<h1>나는 beforeend이다.</h1>')
ul.insertAdjacentHTML("beforebegin",'<h1>나는 beforebegin이다.</h1>')
ul.insertAdjacentHTML("afterbegin",'<h1>나는 afterbegin이다.</h1>')
ul.insertAdjacentHTML("afterend",'<h1>나는 afterend이다.</h1>')

