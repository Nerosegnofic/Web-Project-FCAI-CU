import {User} from './localStorage.js';


const signin = document.getElementById('signin');
    signin.addEventListener('submit', function(event){
        console.log("clicked");
            event.preventDefault();
            const username = document.getElementById("inusername").value;
            const password = document.getElementById("inpassword").value;

            let users=JSON.parse(localStorage.getItem("Users"))||[];
        
            users.forEach(user => {
                if(user.username ==username && user.password==password){
                    alert("Login Successful!")
                    if(user.adminBool){
                        window.location.href="admin.html";
                    }
                    else{
                        window.location.href="second_main.html";
                    }
                    return;
                }
            });
            alert("Login Unsuccessful, Try Again");

    });