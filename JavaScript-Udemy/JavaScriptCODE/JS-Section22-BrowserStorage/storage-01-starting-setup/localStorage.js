const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';

const user = {
    name : 'Max',
    age : 30,
    hobbies : ['Sports','Cooking']
};

storeBtn.addEventListener('click',()=>{
    sessionStorage.setItem('uuid',userId);
    localStorage.setItem('user',JSON.stringify(user));
})

retrBtn.addEventListener('click',()=>{
    const extra1 = sessionStorage.getItem('uuid');
    const extra2 = JSON.parse(localStorage.getItem('user'));
    console.log(extra2)
    if(extra1){
        console.log(`${extra1} is real`)
    }else{
        console.log('Could not find id')
    }
});


