function test(data){
    let i = 0;
    switch(data) {
        case 1 :
            i+=1
            break;
        case 2 :
            i+=2
            break;
        case 3 :
            i+=3
            break;
        default :
            console.log('Not Mathced')
            return;
    }
    return i ? i : 'n';
}

console.log(test(10))