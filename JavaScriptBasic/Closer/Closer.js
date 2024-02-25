let x = 'Global Scope';

function a1(){
    a2();
}

function a2(){
    console.log(x)
};

a1();