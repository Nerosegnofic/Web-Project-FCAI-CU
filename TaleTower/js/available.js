
    let books=JSON.parse(localStorage.getItem("Books"))||[];

    console.log(books);


        for(let i=0;i<books.length;i++){
            const title =books[i].title;
            const author=books[i].author;
            const category=books[i].category;
            let img=books[i].imgUrl;
            const description=books[i].description;
            const isAvailable=books[i].isAvailable;
            img='img/'+img;
                if(isAvailable){
                    console.log("available");
                    const book=document.createElement('div');
                    book.classList.add('book');
                    book.innerHTML=`
                    <a href="book_details.html" class="link" target="_blank">
                    <div class="hiddenDetails">
                    <p class="title">${title}</p>
                    <p class="author">${author}</p>
                    <p class="category">${category}</p>
                    <p class="description">${description}</p>
                    </div>
                    <img src="${img}" alt="book image">
                    </a>
                    <button class="borrowBook">Borrow</button>
                    `;
                    document.getElementById('available-books').appendChild(book);
                    const borrowButton = book.querySelector('.borrowBook');
                    borrowButton.addEventListener('click', function () {
                        console.log("Borrow button clicked for book:", book);
                        books[i].isAvailable=false;
                        console.log("Borrow button clicked for book:", book.isAvailable);
                        localStorage.setItem("Books", JSON.stringify(books));
                        console.log(localStorage.getItem("Books"));
    
                    });
                    const link = book.querySelector('.link');
                    link.addEventListener('click',function(){
                        const title =books[i].title;
                        const author=books[i].author;
                        const category=books[i].category;
                        let img=books[i].imgUrl;
                        // img='img/'+img;
                        const description=books[i].description;
                        const isAvailable=books[i].isAvailable;
                        const sendQuery = new URLSearchParams();
                        sendQuery.append('img',img);
                        sendQuery.append('title',title);
                        sendQuery.append('author',author);
                        sendQuery.append('category',category);
                        sendQuery.append('description',description);
                        const baseHref='book_details.html';
                        link.href=baseHref + '?'+ sendQuery.toString();

                    });

                    }
        }
    // });

// });
        
        
        // const borrowButton = book.querySelector('.borrowBook');
        // // console.log(borrowButton);
        //     borrowButton.addEventListener('click', function(event) {
        //         // Handle borrow button click
        //         book.isAvailable=false;

        //         localStorage.setItem("Books", JSON.stringify(books));
        //         console.log("Borrow button clicked for book:", book);

        //         borrow(book);
               
               
        //         console.log(document.getElementById('borrowedList'));
        //         const bBook=document.createElement('div');
        //         bBook.classList.add('book');
        //         bBook.innerHTML=`
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

        //         // document.getElementById('borrowedList').appendChild(bBook);
        // });