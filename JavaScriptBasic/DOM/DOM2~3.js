// udemy 3

// 형제요소선택하기
const a = document.querySelector('#udem1');
const a1 = a.previousElementSibling // 전 형제 요소
console.log(a1);

const a2 = a.nextElementSibling // 앞 형제 요손
console.log(a2);

const a3 = document.querySelector('.udemy').className
console.log(a3);


// udemy4
// innerHTML => 자식요소들의 태그+텍스트요소+보이지않는 텍스트요소
// textContent => 텍스트요소+보이지않는 텍스트요소
// innertText => 진짜 텍스트 요소만

const b = document.querySelector('div');
const b1 = b.innerHTML; // 보안상의 이유로 잘 쓰이지 않는다.
const b2 = b.textContent;
const b3 = b.innerText;
console.log(b1);
console.log(b2);
console.log(b3);

// insertAdjacentHTML => 원하는 곳에 innerHTML을 넣을 수 있게 해주는 메서드이다.
const b4 = b.insertAdjacentHTML('afterbegin','<p>나는 너가 좋다.</p>')


// dom 요소 삽입하기
const b5 = document.querySelector('#divid');
const b6 = document.createElement('div')
b6.textContent = '그대는 누구십니까'
b5.append(b6,'<div>koala3121</div>');
// 자식 맨 나중에 집어넣는다. tag사용 불가, 변수나 텍스트 노드만 가능하다. 인자로 여러개를 받을 수 있다.

const b7 = document.createElement('div');
b7.innerHTML = `<p>나는 누구인가, 그대는 누구인가</p>`
b5.appendChild(b7);

b5.prepend(b7);

const b8 = document.createElement('div');
b8.textContent = 'koalaalalala3121';
b5.before(b8); // 선택된 노드 전에 들어간다.

const b9 = document.createElement('div');
b9.textContent = '그대여 그대여 왜이리 드센가요';
b5.after(b9); // 선택된 노드 앞에 들어간다.

const b10 = document.createElement('div');
b10.innerHTML = '<div>아직도 그댈 사랑하나요?</div>'

b9.replaceWith(b10);

const b11 = document.querySelector('#id1');
const b12 = document.createElement('div');
b12.textContent = '가지마';
b11.insertAdjacentElement('afterbegin',b12); // targetElement의 자식 맨 앞
b11.insertAdjacentElement('afterend',b12); // tartgetElement의 맨 뒤
b11.insertAdjacentElement('beforebegin',b12); // targetElement의 맨 앞
b11.insertAdjacentElement('beforeend',b12); // targetElement의 자식 맨 뒤

const b13 = b11.cloneNode(true); 
// cloneNode => 복사하여 새로운 값을 생성한다. 인자에 true를 주면 모든 노드를 다 가져오고 false를 주면 요소(html tag)만 가져온다.
console.log(b13);

const b14 = b11.cloneNode(false);
console.log(b14);

b11.remove(); // 해당 dom을 삭제한다.
// removeChild() => 해당 자식을 삭제한다.


