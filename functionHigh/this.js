const cat ={
    name : 'blue steal',
    color : 'grey',
    breed : 'scottish fole',
    meow (){
        console.log("Meow Meow Meow"),
        console.log(this.color),
        console.log("this is", this)
    }
}

const meow2 = cat.meow;