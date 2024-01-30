const loggedIn = localStorage.getItem("loggedIn");
const userName = localStorage.getItem("userName");

if(loggedIn){
    const button = document.querySelector(".link1")
    console.log(userName);
    button.innerHTML = userName;
}

console.log("Hello");
