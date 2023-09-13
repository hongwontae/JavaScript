const a = {k : 'hwt', k1 : function(){console.log(this)}}
a.k1();

console.log('Arrow this')

let obj = {
    strValue: 'Hello',
    normalFunc: function() {
      let arrowFunc = () => { console.log(this) }
      arrowFunc();
    }
  }
  
  obj.normalFunc();