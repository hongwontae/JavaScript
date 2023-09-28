class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = 'Max';

  constructor() {
    // super();
    this.age = 30;
    // this.greet = function() { ... }
  }

  // greet = () => {
  //   console.log(
  //     'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
  //   );
  // };

  greet() {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  }
}

// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   // this.greet = function() { ... };
// }

// Person.prototype.greet = function() {
//   console.log(
//     'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//   );
// };

// Person.describe = function() {
//   console.log('Creating persons...');
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

// Person.prototype.printAge = function() {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.length);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype.__proto__);

// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p);

// const button = document.getElementById('btn');
// button.addEventListener('click', p.greet.bind(p));

const course = {
  // new Object()
  title: 'JavaScript - The Complete Guide',
  rating: 5
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function() {
    console.log(`${this.rating}/5`);
  }
});

const student = Object.create({
  printProgress: function() {
    console.log(this.progress);
  }
}, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Max',
    writable: true
  }
});

// student.name = 'Max';

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});

student.printProgress();

console.log(student);

course.printRating();

const music = Object.create({add : function(a,b){
  return a+b;
}},
  {
    name : {
      configurable : true,
      enumerable : true,
      writable : true,
      value : 'Max'
    }
  }
);
console.log(music);
let mu = music.add(1,2);
console.log(mu)

let a = {name : 'hwt', age : 20};
console.log(a);

function Cool(){
  this.name = 'hwt';
  this.age = 20;
  this.AI = function(){
    console.log('good')
  }
}
const cool = new Cool();
console.log(cool);
const cool1 = Object.getPrototypeOf(cool);
console.log(cool1);


Object.setPrototypeOf(cool1, {
  ...Object.getPrototypeOf(cool1),
  print : function(){
    console.log(this.name);
  }
})

console.log(cool1);


