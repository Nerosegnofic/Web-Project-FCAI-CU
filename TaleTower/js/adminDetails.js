const url = new URLSearchParams(window.location.search);
const img = url.get('img');
const title=url.get('title');
const author=url.get('author');
const category=url.get('category');
const description=url.get('description');
console.log(category);
document.getElementById('dTitle').innerHTML=`${title}`;
document.getElementById('bImg').src=`${img}`;
document.getElementById('dAuthor').innerHTML=`${author}`;
document.getElementById('dDesc').innerHTML=`${description}`;
document.getElementById('dCategory').innerHTML=`${category}`;

// console.log("1");
const saveButton=document.getElementById('save');
// console.log(saveButton);
saveButton.addEventListener('click',function(event){
    // console.log("save button");
    let books=JSON.parse(localStorage.getItem("Books"))||[];
    for(let i=0;i<books.length;i++){
        if(books[i].title==title){
            books[i].title=document.getElementById('dTitle').textContent;
            books[i].author = document.getElementById('dAuthor').textContent;
            books[i].category = document.getElementById('dCategory').textContent;
            books[i].description = document.getElementById('dDesc').textContent;
            break;
        }
    }
    localStorage.setItem("Books", JSON.stringify(books));
    console.log(books);

});
