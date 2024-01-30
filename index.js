import { Users, User } from "./createUser.js";

const email = document.querySelector(".email");
const pass = document.querySelector(".pass");
const name1 = document.querySelector(".name");
const submit = document.querySelector(".btn-signIn");
// const button = document.querySelector(".link1");

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    const newname1 = name1.value;
    const newemail = email.value;
    const newpass = pass.value;
    
    if(pass.value === pass.nextSibling.nextSibling.value){
        
        User.push(new Users(newname1, newemail, newpass));
         
        if(window.location.assign("./main.html")){
            const btn = document.querySelector(".link1");
            console.log(btn);
        }
        
    }else{
        const line = document.createElement("p");
        line.textContent = "Password Mismatch! Try again";
        line.style.color = "red";
        line.style.margin = "0";
        const form = document.querySelector(".signup");
        form.append(line);
    }
})


