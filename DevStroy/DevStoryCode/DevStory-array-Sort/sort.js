let a = [1,10,2,20,3,30,4,100];

a.sort(function func1(a,b){
    return a-b;
});

console.log(a);

a.sort((a,b) => {
    return b-a;
})

console.log(a);



