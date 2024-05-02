const course = {
    title : 'JavaScript - The Complet guide'
};

Reflect.setPrototypeOf(course, {toString(){return this.title}});

console.log(course.toString())