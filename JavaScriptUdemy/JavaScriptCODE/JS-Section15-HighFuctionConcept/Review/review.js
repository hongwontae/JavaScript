function getget(a){
    function add(b,c){
        console.log(a+b+c)
    }
    return add;
}

let adding = getget(1);
adding(10,10);


function mulArg(b,c){
    function mul(d=10){
        console.log(b*c*d)
    }
    return mul();
}

mulArg(10,10);

let a = {
    name : 'Max',
    class : [
        {name :'zlatan'},
        {name : 'Cavani'},
        {name : 'Lukas'}
    ],
}

let a1 = [];

function showInfo(obj){
    for(const friend of obj.class){
        console.log(friend);
    }
}

showInfo(a);