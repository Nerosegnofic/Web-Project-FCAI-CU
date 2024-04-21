import {Book} from './localStorage.js';

const addBookForm = document.getElementById('addBookForm');
    addBookForm.addEventListener('submit', function(event){
        console.log("clicked");
            event.preventDefault();
            const title = document.getElementById("title").value;
            const author = document.getElementById("author").value;
            const category = document.getElementById("category").value;
            const description = document.getElementById("description").value;
            const imgUrl = document.getElementById("imageURL").value; 
            const book = new Book(title,author,category,description,imgUrl,true);
            let books=JSON.parse(localStorage.getItem("Books"))||[];
            books.push(book);
            localStorage.setItem("Books",JSON.stringify(books));
    });
