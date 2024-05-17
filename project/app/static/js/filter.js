function scifi(){
    const books = document.getElementsByClassName('book');
    for(let i=0;i<books.length;i++){
        const book=books[i];
        const category = book.querySelector('.category');
        const categoryVal= category.innerHTML;
        if(categoryVal!="Sci-Fi"){
            book.style.display='none';
        }
        else{
            book.style.display='block';
        }
    }
}

function adventure(){
    const books = document.getElementsByClassName('book');
    for(let i=0;i<books.length;i++){
        const book=books[i];
        const category = book.querySelector('.category');
        const categoryVal= category.innerHTML;
        if(categoryVal!="Adventure"){
            book.style.display='none';
        }
        else{
            book.style.display='block';
        }
    }
}

function fantasy(){
    const books = document.getElementsByClassName('book');
    for(let i=0;i<books.length;i++){
        const book=books[i];
        const category = book.querySelector('.category');
        const categoryVal= category.innerHTML;
        if(categoryVal!="Fantasy"){
            book.style.display='none';
        }
        else{
            book.style.display='block';
        }
    }
}

function history(){
    const books = document.getElementsByClassName('book');
    for(let i=0;i<books.length;i++){
        const book=books[i];
        const category = book.querySelector('.category');
        const categoryVal= category.innerHTML;
        if(categoryVal!="History"){
            book.style.display='none';
        }
        else{
            book.style.display='block';
        }
    }
}

function search(){
    const input=document.getElementById('searchInput').value.toLowerCase();
    const books=document.getElementsByClassName('book');
    for(let i=0;i<books.length;i++){
        const book = books[i];
        const catVal=book.querySelector('.category').textContent.toLowerCase();
        const TitleVal=book.querySelector('.title').textContent.toLowerCase();
        const AuthorVal=book.querySelector('.author').textContent.toLowerCase();
        if(input==catVal || input==TitleVal || input==AuthorVal ){
            book.style.display='block';
        }
        else{
            book.style.display='none';
        }
    }
}

document.getElementById('searchInput').addEventListener('keypress', function(event){
    if(event.key ==='Enter'){
        search();
    }
});