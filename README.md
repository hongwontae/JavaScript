# JavaScript Mastery Repository
JavaScript의 기초, 개념, 이론 등 전반을 마스터하기 위한 종합 자료 모음입니다.


## Project Structure
- **[JavaScript-Thoery](https://github.com/hongwontae/JavaScript/tree/main/JS-Theory)** : JavaScript에 관한 이론에 대한 텍스트 파일과 코드
- **[JavaScript-In-Action](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action)** : 실용적인 JavaScript 개념과 코드에 대한 텍스트 파일과 코드
- **[JavaScript-High](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-High)** : 조금 어려운 개념이나 약한 부분에 대한 텍스트 파일
- **[JavaScript-Udemy](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-Udemy)** : Udemy에서 학습한 JavaScript 코드와 텍스 파일


## Practical JavaScript
1. **Array** : [ArrayCode](https://github.com/hongwontae/JavaScript/blob/main/JavaScript-In-Action/Array/includes-reverse-reduce-split-join-some-every.js), [Array-Info](https://github.com/hongwontae/JavaScript/blob/main/JavaScript-In-Action/Array/ArrayMethod.txt)
2. **Object** : [Object Code-Info](https://github.com/hongwontae/JavaScript/blob/main/JavaScript-In-Action/object/app.js)
3. **Function** : [Function Code-Info](https://github.com/hongwontae/JavaScript/blob/main/JavaScript-In-Action/function/function1.js)
4. **Loop** : [For Loop Info](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action/Loop)
5. **DOM** : [Dom Info](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action/DOM)
6. **Event** : [Event Info](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action/event)
7. **Destructure and Rest Parameter** : [D and R](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action/DestructorAndRest)
8. **Class** : [Class Info](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action/class)
9. **Callback-Promise-Await/Async** : [CPA Info](https://github.com/hongwontae/JavaScript/tree/main/JavaScript-In-Action/Promise)

- **Preview**
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