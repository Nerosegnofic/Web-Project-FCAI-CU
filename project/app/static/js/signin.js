import {User} from './localStorage.js';


const signin = document.getElementById('signin');
    signin.addEventListener('submit', function(event){
        console.log("clicked");
            event.preventDefault();
            const username = document.getElementById("inusername").value;
            const password = document.getElementById("inpassword").value;

            let users=JSON.parse(localStorage.getItem("Users"))||[];
            let ok=false;
            let isAdmin=false;
            users.forEach(user => {
                if(user.username ==username && user.password==password){
                   ok=true;
                   isAdmin=user.adminBool;
                   return;
                }
            });

            if(ok){
                if(isAdmin){
                    alert("Login Successful!");
                    window.location.href="admin.html";
                }
                else{
                    alert("Login Successful!");
                    window.location.href="second_main.html";
                }

            }

    });