function filterCat(category){
    document.querySelectorAll(".book").forEach(book=>{
        const bookCat =book.getAttribute('data-book-category');
        if(bookCat==category){
            book.style.display='block';
        }
        else{
            book.style.display='none';
        }
    });
}

document.querySelectorAll(".cat").forEach(div=>{
    div.addEventListener('click',function(){
        const selected = this.getAttribute('data-category');
        console.log(selected);
        filterCat(selected);
    });
});

function search(){
    const input=document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll(".book").forEach(book=>{
        const bookCat =book.getAttribute('data-book-category').toLowerCase();
        const bookTitle =book.getAttribute('data-title').toLowerCase();
        const bookAuth =book.getAttribute('data-author').toLowerCase();
        if(bookCat==input || bookTitle==input || bookAuth==input){
            book.style.display='block';
        }
        else{
            book.style.display='none';
        }
    });
}

document.getElementById('searchInput').addEventListener('keypress', function(event){
    if(event.key ==='Enter'){
        search();
    }
});

// function search(){
//     const input=document.getElementById('searchInput').value.toLowerCase();
//     const books=document.getElementsByClassName('book');
//     for(let i=0;i<books.length;i++){
//         const book = books[i];
//         const catVal=book.querySelector('.category').textContent.toLowerCase();
//         const TitleVal=book.querySelector('.title').textContent.toLowerCase();
//         const AuthorVal=book.querySelector('.author').textContent.toLowerCase();
//         if(input==catVal || input==TitleVal || input==AuthorVal ){
//             book.style.display='block';
//         }
//         else{
//             book.style.display='none';
//         }
//     }
// }

