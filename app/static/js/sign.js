import {User} from './localStorage.js';


const signup = document.getElementById('signup');
    signup.addEventListener('submit', function(event){
        console.log("clicked");
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const confirmpass=document.getElementById("confirmPass").value;
            const email = document.getElementById("email").value;
            const isAdmin = document.querySelector('input[name="usertype"]:checked').value;
            let adminBool;

            let users=JSON.parse(localStorage.getItem("Users"))||[];
            let nameFound=false;
            let emailFound=false;
            users.forEach(user => {
                if(user.username ==username){
                   nameFound = true;
                   return;
                }
                else if(user.email==email){
                    emailFound = true;
                    return;
                }
            });

            if(isAdmin=='true'){
                adminBool=true;
            }
            else{
                adminBool=false;
            }
            if(password!=confirmpass){
                alert("Passwords are not matching");
            }
            else if(nameFound){
                alert("Username taken!");
            }
            else if(emailFound){
                alert("Email is taken");
            }
            else{
                const user = new User(username,password,email,adminBool);
                let users=JSON.parse(localStorage.getItem("Users"))||[];
                users.push(user);
                localStorage.setItem("Users",JSON.stringify(users));
                if(user.isAdmin){
                    console.log("is admin");
                    window.location.href="admin.html";
                }
                else{
                    console.log("is not admin");
                    console.log(user.isAdmin);
                    window.location.href="second_main.html";
                }
            }

    });