

const form = document.getElementById("create-account-form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const conpassword = document.getElementById("confirm-password");
// console.log(userName)
// // console.log(email)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
    // if (isFormValid() == true){
    //     form.submit()
    // }else{
    //     // event.preventDefault();

    // }
});

function isFormValid (){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.foreach((container) => {
        if(container.classList.contains('error')){
            result = false;
        }
    })
    return result;
}


function validateForm() {
    //username
    if (userName.value.trim() == '') {
        setError(userName, 'Name can not be empty')
    } else if (userName.value.trim().length < 5 || userName.value.trim().length > 15) {
        setError(userName, 'Name must be min 5 and max 15 charcters')
    }else {
        setSuccess(userName)
    }
    //email
    if(email.value.trim() == ''){
        setError(email, 'Provide email address')
    }else if(isEmailValid(email.value)){
        setSuccess(email);
    }else{
        setError(email, "provide valid information")
    }
    
    //password
    if(password.value.trim() == ''){
        setError(password, "password can not be empty")
    }else if (password.value.trim().length < 6 || password.value.trim().length > 20){
        setError(password, "Password min 6 and max 20 charcters")
    }else{
        setSuccess(password)
    }
    //confirm password
    if(conpassword.value !== password.value){
        setError(conpassword, "password does not match");

    }else if(conpassword.value.trim() == ''){
        setError(conpassword, "Password can not be empty")
    }
    else {
        setSuccess(conpassword)
    }
}
function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success')
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error')
    }
    parent.classList.add('success');
}

//email function
function isEmailValid (email){
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return reg.test(email);
    
}