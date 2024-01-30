import { Users, User } from "./createUser.js";

const login = function(){

    const givenEmail = document.querySelector(".email");
    const givenPassword = document.querySelector(".pass");
    const submit = document.querySelector(".btn-signIn");

    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        for(let User1 of User){
            if(givenEmail.value === User1.email && givenPassword.value === User1.password){
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("userName", User1.name);
                window.location.href = "./main.html";
            }
        }
            const line = document.createElement("p");
            line.textContent = "Wrong Credential! Try again";
            line.style.color = "red";
            line.style.margin = "0";
            const form = document.querySelector(".Signin-form");
            form.append(line);    
    });
}

login();