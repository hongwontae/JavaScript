// 새 요소를 만들어서 그걸 페이지 앞이나 뒤에 추가하고 제거하는 것이다

// dom요소를 기존 html이 아닌 임의로 생성
document.createElement('img') // 태그만
const newImg = document.createElement('img');
console.log(newImg)

newImg.src = 'https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg'

// 이미지가 어디에 들어가야 하는지 정해줘야 한다.
document.body.appendChild(newImg)
// appendChild는 docu가 불러낸 객체의 맨 아래에 들어간다. 
newImg.classList.add('square')

const newH3 = document.createElement('h3')
newH3.innerText = 'i am h3' // h3를 만들었을 뿐 내용이 없기에 
                            // innerText를 이용해 넣어준다.
document.body.appendChild(newH3)

// append() => 한번에 한 개 이상의 요소를 삽입할 수 있게 해준다.
const p = document.querySelector('p');
p.append('i am a groot!!') // document처리 x append활용해서 바로 넣어준다.

p.append('i am a lok','i am a master e','ㅁㄴㅇ') // append로 여러 개 추가가능

// prepend() => 앞에 추가한다.
const newB = document.createElement('b')
newB.append('i like the moving moving')
p.prepend(newB)

// AdjacentElement() => 요소를 삽입하려는 위치가 특정 요소 앞인지 뒤인지
// 또는 특정 요소 내에서 첫 자식 앞인지, 요소 내에서 마지막 자식 뒤인지를 선택하여 보여준다.
const h2 = document.createElement('h2') // h2태그를 생성한다.
h2.append('are you serious?') // 내용을 넣어준다. innerText로도 가능
const h1 = document.querySelector('h1') // 요소의 기준점을 잡아줄 selector를 선택한다.
h1.insertAdjacentElement('afterend',h2) // insertA~ => 어디에 넣어줄지 선택하는 특성제공
// afterend => 요소 뒤에 넣어준다.즉 태그 뒤에 넣어준다.

const h3 = document.createElement('h3')
h3.innerText='i am bootex'
h1.after(h3) // 간단하게 h1 뒤에 넣어주는 메서드이다./ before은 반대이다.