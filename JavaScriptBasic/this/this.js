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

