let a = {
    myName : 'HWT',
    func : function(){
        console.log(this)
        console.log(this.myName)
    }
}

a.func();

let b = {
    myName : 'bbbb',
    ffff : function(){
    }
}

b.ffff = a.func;

b.ffff();
console.dir(b.ffff)




