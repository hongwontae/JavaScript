const fs = require('fs');

fs.readFile('uesr-data.txt',(err,data)=>{
    if(err){
        console.log(err)
        return;
    } else{
        console.log(data.toString());
    }
})

fs.writeFile('uesr-data.txt','username=Max',err => {
    if(err){
        console.log(err);
    } else{
        console.log('Wrote to file')
    }
});