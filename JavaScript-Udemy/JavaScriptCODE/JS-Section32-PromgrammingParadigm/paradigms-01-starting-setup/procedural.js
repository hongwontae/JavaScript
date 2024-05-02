const form = document.getElementById('user-input');

function signUpHandler(e){
    e.preventDefault();
    const userNameInput = document.getElementById('username');
    const enteredUserName = userNameInput.value;

    const passwordInput = document.getElementById('password');
    const enteredPassword = passwordInput.value;

    if(enteredUserName.trim().length === 0){
        return;
    }
    if(enteredPassword.trim().length <=5){
        return; 
    }

    const user = {
        userName : enteredUserName,
        password : enteredPassword
    };
    console.log(user);
}

form.addEventListener('submit',signUpHandler);