# JavaScript Mastery Repository
JavaScript의 기초, 개념, 이론 등 전반을 마스터하기 위한 종합 자료 모음입니다.


## Project Structure
- **[JavaScript-Thoery](https://github.com/hongwontae/JavaScript/tree/main/JS-Theory)** : JavaScript에 관한 이론에 대한 텍스트 파일과 코드
- **[JavaScript-In-Action](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action)** : 실용적인 JavaScript 개념과 코드에 대한 텍스트 파일과 코드
- **[JavaScript-High](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-High)** : 조금 어려운 개념이나 약한 부분에 대한 텍스트 파일
- **[JavaScript-Udemy](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-Udemy)** : Udemy에서 학습한 JavaScript 코드와 텍스트 파일


## Practical JavaScript
1. **Array** : [ArrayCode](https://github.com/hongwontae/JavaScript/blob/main/JavaScript-In-Action/Array/includes-reverse-reduce-split-join-some-every.js), [Array-Info](https://github.com/hongwontae/JavaScript/blob/main/JavaScript-In-Action/Array/ArrayMethod.txt)
2. **Object** : [Object Code-Info](https://github.com/hongwontae/JavaScript/blob/main/JavaScript-In-Action/object/app.js)
3. **Function** : [Function Code-Info](https://github.com/hongwontae/JavaScript/blob/main/JavaScript-In-Action/function/function1.js)
4. **Loop** : [For Loop Info](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action/Loop)
5. **DOM** : [Dom Info](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action/DOM)
6. **Event** : [Event Info](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action/event)
7. **Destructure and Rest Parameter** : [D and R Info](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action/DestructorAndRest)
8. **Class** : [Class Info](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action/class)
9. **Callback-Promise-Await/Async** : [CPA Info](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action/Promise)

- **Preview(Class)**
```javascript
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function(){
    return `안녕하세요 제 이름은 ${this.name}이고 나이는 ${this.age}입니다.`
} // prototype의 메서드 내의 this는 항상 호출하는 객체를 참조한다.

let person = new Person('HWT',30);

console.dir(person.introduce());

class Person1{
    constructor(name,age){
        this.name = name;
        this.age = age; 
        const btn = document.getElementById('btn');
        btn.addEventListener('click',()=>{
            console.log(this);
        })
        this.dkdk = function(){
            return console.log('hwt')
        }

    }
    introduce(){
        return `이름 : ${this.name} 나이 : ${this.age}`
    }
    getting(){
        this.good = 'HWT';
    }

    height = 10000;

    oooo = function(){
        return 'zlatna'
    } // 인스턴스 객체로 들어간다. prototype이 아닌..
    
}
let person2 = new Person1('HWT',3000);
console.log(person2);
let person3 = new Person1('AJY',4000);
```

## JavaScript Concepts
1. **JavaScript란?** : [JavaScript Info](https://github.com/hongwontae/JavaScript/blob/main/JavaScript-Udemy/JavaScriptMEMO/JavaScript%20Section%201%20(1~14)%20JS%20%EC%9D%B4%EB%A1%A0.txt)
2. **Scope** : [Scope Info](https://github.com/hongwontae/JavaScript/tree/main/JS-Theory/JS-Scope)
3. **This** : [JavaScript Info](https://github.com/hongwontae/JavaScript/tree/main/JS-Theory/JS-This)
4. **Call-Heap-EventLoop** : [CHE Info](https://github.com/hongwontae/JavaScript/tree/main/JS-Theory/JS-CallHeap-EventLoop)
5. **Closure** : [Closure Info](https://github.com/hongwontae/JavaScript/tree/main/JS-Theory/JS-Closure)
6. **Prototype** : [Prototype Info](https://github.com/hongwontae/JavaScript/tree/main/JS-Theory/JS-Prototype)
7. **Data Structure** [Data-Structure Info](https://github.com/hongwontae/JavaScript/blob/main/JS-Theory/JS-Variable-Structure/JS-Variable-Process.txt)
8. **Error** : [Error Info](https://github.com/hongwontae/JavaScript/tree/main/JS-Theory/JS-Error)
9. **DOM (Browser Rendering, Event Handler, Capturing, Bubbling..)** : [DOM.. Info](https://github.com/hongwontae/JavaScript/tree/main/JS-Theory/JS-DOM)
10. **Strict Mode** : [Strict Info](https://github.com/hongwontae/JavaScript/tree/main/JS-Theory/JS-use-strict)


- **Preview**
```javascript
function outerFunc() {
    // 외부 함수의 변수
    let x = 10;
  
    // 내부 함수에서 외부 함수의 변수에 접근할 수 있습니다.
    let innerFunc = function () {
      console.log(x);
    };
  
    return innerFunc;
  }
  
  let inner = outerFunc();
  inner(); // 10
// outerFunc에 선언된 변수가 존재하고 outerFunc의 호출이 완료되어 콜 스택에서 제거되었다.
// 그럼에도 불구하고 내부 함수의 innerFunc이 콜 스택에서 벗어난 외부 함수의 변수에 접근할 수 있다.
// => 선언한 시점의 부모 렉시컬 참조값이 존재하기 떄문이다.
// => 이 개념이 클로저이다.

var xy = 100;
let y = 100;

function a1(){
    let y = 10;
    console.log(y);
    a2();
}

function a2(){
    console.log(y);
};

a1();
```
