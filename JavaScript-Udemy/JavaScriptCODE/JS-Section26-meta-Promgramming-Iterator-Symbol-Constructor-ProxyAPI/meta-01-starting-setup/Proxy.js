const course = {
    title : 'JavaScript The guide'
};

const courseHandler = {
    get(obj, propertyName){
        console.log(propertyName);
        return obj[propertyName] || 'Not Found';
    },
    set(obj, propertyName, newValue){
        if(propertyName === 'rating'){
            return;
        }
        return obj[propertyName] = newValue;
    }
};

const pCouse = new Proxy(course,courseHandler);
console.log(pCouse.title);
pCouse.tt = 'Ready!'
console.log(pCouse.tt);

