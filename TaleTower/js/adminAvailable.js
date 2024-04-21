document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('admin_available').innerHTML = '';
    let books=JSON.parse(localStorage.getItem("Books"))||[];
    books.forEach((book,index) => {
    const title =book.title;
    const author=book.author;
    const category=book.category;
    let img=book.imgUrl;
    const description=book.description;
    const isAvailable=book.isAvailable;

    if(isAvailable){
        const sendQuery = new URLSearchParams();
        sendQuery.append('img',img);
        sendQuery.append('title',title);
        sendQuery.append('author',author);
        sendQuery.append('category',category);
        sendQuery.append('description',description);
        img='img/'+img;
        const bookDiv=document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML=`
        <a href="admin_details.html" class="adminLink" target="_blank">
        <div class="hiddenDetails">
        <p class="title">${title}</p>
        <p class="author">${author}</p>
        <p class="category">${category}</p>
        <p class="description">${description}</p>
        </div>
        <img src="${img}" alt="book image">
        </a>
        <button class="deleteBook">Delete Book</button>
        `;
        document.getElementById('admin_available').appendChild(bookDiv);
        const deleteBook = bookDiv.querySelector('.deleteBook');
        deleteBook.addEventListener('click', function (event) {
            books.splice(index, 1);
            bookDiv.remove();
            localStorage.setItem("Books", JSON.stringify(books));
        });

        const link = bookDiv.querySelector('.adminLink');
        link.addEventListener('click',function(){
            const title =book.title;
            const author=book.author;
            const category=book.category;
            const img=book.imgUrl;
            const description=book.description;
            const isAvailable=book.isAvailable;
            const sendQuery = new URLSearchParams();
            sendQuery.append('img',img);
            sendQuery.append('title',title);
            sendQuery.append('author',author);
            sendQuery.append('category',category);
            sendQuery.append('description',description);
            const baseHref='admin_details.html';
            link.href=baseHref + '?'+ sendQuery.toString();
        });
    }
});
});