const xhr = new XMLHttpRequest();

xhr.open('GET','second_main.html');

let books=JSON.parse(localStorage.getItem("Books"))||[];
// console.log(books);
console.log(books[6]);

xhr.onreadystatechange = function(){
    if(xhr.readyState===XMLHttpRequest.DONE){
        if(xhr.status===200){
            console.log("success");
            const responseHTML = xhr.responseText;
            console.log(responseHTML);
            const parser=new DOMParser();
            const dom = parser.parseFromString(responseHTML,'text/html');
            console.log(dom);

            books.forEach(book => {
                const title =book.title;
                const author=book.author;
                const category=book.category;
                let img=book.imgUrl;
                const description=book.description;
                const isAvailable=book.isAvailable;
                img='img/'+img;
            if(!isAvailable){
                const sendQuery = new URLSearchParams();
                sendQuery.append('img',img);
                sendQuery.append('title',title);
                sendQuery.append('author',author);
                sendQuery.append('category',category);
                sendQuery.append('description',description);
                console.log("available");
                const bookDiv=document.createElement('div');
                bookDiv.classList.add('book');
                bookDiv.innerHTML=`
                <a href="book_details.html" class="borrowLink" target="_blank">
                <div class="hiddenDetails">
                <p class="title">${title}</p>
                <p class="author">${author}</p>
                <p class="category">${category}</p>
                <p class="description">${description}</p>
                </div>
                <img src="${img}" alt="book image">
                </a>
                <button class="returnBook">Return</button>
                `;
                document.getElementById('borrowedList').appendChild(bookDiv);
                const returnBook = bookDiv.querySelector('.returnBook');
                returnBook.addEventListener('click', function (event) {
                    bookDiv.style.display='none';
                    console.log("Borrow button clicked for book:", book);
                    book.isAvailable=true;
                    console.log("Return button clicked for book:", book.isAvailable);
                    localStorage.setItem("Books", JSON.stringify(books));
                });
                const link =  bookDiv.querySelector('.borrowLink');
                link.addEventListener('click',function(){
                    const title =book.title;
                    const author=book.author;
                    const category=book.category;
                    let img=book.imgUrl;
                    // img='img/'+img;
                    const description=book.description;
                    const isAvailable=book.isAvailable;
                    const sendQuery = new URLSearchParams();
                    sendQuery.append('img',img);
                    sendQuery.append('title',title);
                    sendQuery.append('author',author);
                    sendQuery.append('category',category);
                    sendQuery.append('description',description);
                    const baseHref='book_details.html';
                    link.href=baseHref + '?'+ sendQuery.toString();

                });


                }}
                );


























            // const availableBooks = dom.querySelectorAll('#available-books .books');
            // console.log(availableBooks);
            // availableBooks.forEach(book=>{
            //     console.log(book.isAvailable);
            //     // if(!(book.isAvailable)){
            //     //     console.log()
            //     // }
                

            // });


            // // borrowButtons.forEach(borrowButton=>{
            // //     borrowButton.addEventListener('click',function(event){
            // //         console.log("Borrow button clicked for book:", borrowButton);
            // //     });
            // // });

        }
    }

}
xhr.send();



// document.addEventListener('DOMContentLoaded', function () {
//     let books=JSON.parse(localStorage.getItem("Books"))||[];
//     // console.log(books);
//     console.log(books);
//     books.forEach(book => {
//         const title =book.title;
//         const author=book.author;
//         const category=book.category;
//         const img=book.imgUrl;
//         const description=book.description;
//         const isAvailable=book.isAvailable;

//     if(!isAvailable){
//         const sendQuery = new URLSearchParams();
//         sendQuery.append('img',img);
//         sendQuery.append('title',title);
//         sendQuery.append('author',author);
//         sendQuery.append('category',category);
//         sendQuery.append('description',description);
//         console.log("available");
//         const book=document.createElement('div');
//         book.classList.add('book');
//         book.innerHTML=`
//         <a href="book_details.html?${sendQuery.toString()}" target="_blank">
//         <div class="hiddenDetails">
//         <p class="title">${title}</p>
//         <p class="author">${author}</p>
//         <p class="category">${category}</p>
//         <p class="description">${description}</p>
//         </div>
//         <img src="${img}" alt="book image">
//         </a>
//         <button class="returnBook">Return</button>
//         `;
//         document.getElementById('borrowedList').appendChild(book);
//         const returnBook = book.querySelector('.returnBook');
//         returnBook.addEventListener('click', function (event) {
//             console.log("Borrow button clicked for book:", book);
//             book.isAvailable=false;
//             console.log("Borrow button clicked for book:", book.isAvailable);
//             localStorage.setItem("Books", JSON.stringify(books));
//         });
//         }}
//         );
//         });
