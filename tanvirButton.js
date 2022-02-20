let button = document.getElementsByClassName('logo')[0];
let loginForm = document.getElementsByClassName('loginSection')[0];
button.addEventListener('click',()=>{
    loginForm.classList.toggle('Enable');
});