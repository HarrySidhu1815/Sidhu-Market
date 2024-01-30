export class Users{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password
    }
    about(){
        console.log(`Hi, my name is ${this.name}`)
    }
};

export const User = [];
User.push(new Users("Harry", "harry15@gmail.com", "H@rr#92678"));
User.push(new Users("Harjobanpreet", "harjobanpreet15@gmail.com", "H@rr#300192"));