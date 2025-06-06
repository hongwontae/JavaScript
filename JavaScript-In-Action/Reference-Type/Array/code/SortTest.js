function Test(arr){
    let case1 = [...arr].sort((a,b)=>{
        return a-b
    })
    console.log(case1); 
}

Test([10,30,40,100,43,21]);
