const registerBtn = document.querySelector("#register");
const registerForm = document.querySelector(".register");
const loginBtn = document.querySelector("#login");
const loginForm = document.querySelector(".login");


registerBtn.addEventListener('click', () => {
    registerForm.style.transform = "translateX(0)";
    registerForm.style.left = 0;
    registerForm.style.transition = "all .6s ease-in-out";
    
    loginForm.style.transform = "translateX(-200%)"
    loginForm.style.right = "300px"
    loginForm.style.transition = "all .5s ease-in-out";
    
    if(loginBtn.classList.contains('active')) {
        loginBtn.classList.remove('active')
    }
    if(!registerBtn.classList.contains("active")) {
        registerBtn.classList.add('active')
    }

})

loginBtn.addEventListener('click', () => {
    loginForm.style.transform = "translateX(0)";
    loginForm.style.right = "0";

    loginForm.style.transition = "all .6s ease-in-out";
    
    registerForm.style.transform = "translateX(200%)"
    // registerForm.style.right = "400px";

    registerForm.style.transition = "all .5s ease-in-out";
    
    if(registerBtn.classList.contains('active')) {
        registerBtn.classList.remove('active')
    }
    if(!loginBtn.classList.contains("active")) {
        loginBtn.classList.add('active')
    }
    
   
})