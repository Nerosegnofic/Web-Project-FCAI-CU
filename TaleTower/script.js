// function addBookUserPage(){
//     const title=localStorage.getItem('title');
//     const author=localStorage.getItem('author');
//     const category=localStorage.getItem('category');
//     const imageURL=localStorage.getItem('imageURL');
//     const description=localStorage.getItem('description');
    
//     let book=document.createElement('div');
//     book.classList.add('book');
//     book.innerHTML=
//     `<a href="Deliverance_book.html" target="_blank">
//     <img src="${imageURL}">
//     </a>`;
//     document.getElementById('available-books').appendChild(book);
//     alert('Added Book Successfully!');
// }

let library=[];
let addBookForm = document.getElementById('addBook');

addBookForm.addEventListener('submit', function(event){
    event.preventDefault();
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const category=document.getElementById('category').value;
    const imageURL=document.getElementById('imageURL').value;
    const description=document.getElementById('description').value;
    let book = {
        title: title,
        author: author,
        category: category,
        image: imageURL,
        description: description
    };
    let libraryString=localStorage.getItem('library');
    if(!libraryString){
        library.push(book);
        saveLocal(library);
    }
    else{
        let libraryStringParse=JSON.parse(localStorage.getItem('library'));
        libraryStringParse.push(book);
        saveLocal(libraryStringParse);
    }
});

function saveLocal(library){
    let libraryStringify=JSON.stringify(library);
    localStorage.setItem('library',libraryStringify);
}

window.addEventListener('storage',function(event){
    if(event.key == 'library'){
        const updatedLibrary = JSON.parse(event.newValue);
        const newItem=updatedLibrary[updatedLibrary.length-1];
        const book=document.createElement('div');
        book.classList.add('book');
        book.innerHTML=`
        <a href="Deliverance_book.html" target="_blank">
           <img src="${newItem.imageURL}">
        </a>
        `;
        document.getElementById('available-books').appendChild(book);
    }

});

// function addBookAdminPage(title, author, category, imageURL, description){
    
// }

// function borrowBook(book){
//     book.status='B';
// }

// function returnBook(title, author, category,imageURL, description){
//     let book={
//         title:title,
//         author:author,
//         category:category,
//         imageURL:imageURL,
//         description:description
//     };
//     borrowed.push(book);
// }


//search 

// function findCategory(category){
//     return library.filter(book=>book.category==category);
// }
// function findAuthor(author){
//     return library.filter(book=>book.author==author);
// }

// function saveChanges(){

// }
//test
function addItem(){
        const book=document.createElement('div');
        book.classList.add('book');
        book.innerHTML=`
        <a href="Deliverance_book.html" target="_blank">
           <img src="deliverance.jpeg">
        </a>
        `;
        document.getElementById('available-books').appendChild(book);
}


function loadButtonText() {
    var buttons = document.getElementsByClassName("sec-main borrowbtn");
    for (var i = 0; i < buttons.length; i++) {
        var buttonText = sessionStorage.getItem("buttonText" + i);
        if (buttonText) {
            buttons[i].innerText = buttonText;
        }
    }
}
function saveButtonText() {
    var buttons = document.getElementsByClassName("sec-main borrowbtn");
    for (var i = 0; i < buttons.length; i++) {
        sessionStorage.setItem("buttonText" + i, buttons[i].innerText);
    }
}
function changeButton(){
var buttons = document.getElementsByClassName("sec-main borrowbtn");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        this.innerText = "Borrowed";
        saveButtonText();
    });
}
}

window.addEventListener("load", function() {
    loadButtonText();
});
