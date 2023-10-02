// 유데미 1
const a = document.querySelector('div');
console.log(a);

const a1 = document.createElement('div');
a1.textContent = 'good Job'
a.append(a1);

const a2 = document.querySelector('.hwt');
console.log(a2);

const a3 = document.querySelector('#ss');
console.log(a3);


// 유데미 2
console.log(a3.id);
console.log(a2.className);
console.log(a1.tagName);

// 자식노드와 형제노드 선택하는 방법
const b = a2.children;
console.log(b[0]); // htmlCollectio으로 가져온다.

const b2 = a2.childNodes;
console.log(b2); // nodeList로 가져온다.

const b3 =a2.firstChild;
console.log(b3); // 첫 번쨰 자식의 노드를 가져온다.

const b4 = a2.firstElementChild;
console.log(b4); // 첫 번쨰 자식의 element를 가져온다.

// 라스트는 맨 마지막 노드나 element를 가져온다.

// 부모 노드나 요소에 접근하기
const b5 = a3.parentElement; // 부모 요소에 접근한다.
console.log(b5);

const b6 = a3.parentNode; // 부모 노드에 접근한다. => 요소에 접근하는 거랑 틀린것은 거의 없다.
console.log(b6);



