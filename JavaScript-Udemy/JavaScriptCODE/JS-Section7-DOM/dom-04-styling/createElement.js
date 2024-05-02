const li = document.createElement('li')
const ul = document.querySelector('ul')

ul.appendChild(li,'koala3121') // koala3121는 택스트 노드라 불가능
li.innerHTML = '<h2> kkk </h2>' // 태그 작성가능

const li2 = document.createElement('li')
ul.append(li2,'알론소') // 텍스트 노드 받아들임
li2.innerText = '<h2> korae monster </h2>' // 태그 작성 불가능

const li3 = document.createElement('li')
ul.prepend(li3,'kkddk')
li3.innerHTML = '<h1> li3입니다. </h1>'

