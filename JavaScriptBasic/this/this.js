const a = {k : 'hwt', k1 : function(){console.log(this)}}
a.k1();

console.log('Arrow this')

let k = {
    name : 'hwt',
    k1 : function(){
        let k2 = () => {console.log(this)}
        k2();
    }
}

k.k1();


let b1 = 10;

let b2 = {
    b1 : 1,
    func1 : function(){
        this.b1+=1;
        console.log('func1 ='+this.b1)

        function func2(){
            this.b1+=1;
            console.log('fun2 ='+b1)
        }
        func2();
    }
}

b2.func1();