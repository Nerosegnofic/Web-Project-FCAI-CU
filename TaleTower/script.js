// let count=0;
// let library=[];

let addBookForm = document.getElementById('addBookForm');
addBookForm.addEventListener('submit', function(event){
    event.preventDefault();
    count=count+1;
    let title=document.getElementById('title').value;
    let author=document.getElementById('author').value;
    let category=document.getElementById('category').value;
    let imageURL=document.getElementById('imageURL').value;
    let description=document.getElementById('description').value;
    addBook(title,author,category,imageURL,description);
    console.log('Book added:', book);
});

function addBook(title, author, category, imageURL, description){
    // let book={
    //     id:count,
    //     title:title,
    //     author:author,
    //     category:category,
    //     imageURL:imageURL,
    //     description:description,
    //     status:'A'
    // };
    // library.push(book);
    // console.log(book);
    // console.log(library);
    alert('Added Book Successfully!');
}

function borrowBook(book){
    book.status='B';
}

function returnBook(title, author, category,imageURL, description){
    let book={
        title:title,
        author:author,
        category:category,
        imageURL:imageURL,
        description:description
    };
    borrowed.push(book);
}


//search 

function findCategory(category){
    return library.filter(book=>book.category==category);
}
function findAuthor(author){
    return library.filter(book=>book.author==author);
}

function saveChanges(){

}

