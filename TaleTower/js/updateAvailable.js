const url = new URLSearchParams(window.location.search);
let img = url.get('img');
const title=url.get('title');
const author=url.get('author');
const category=url.get('category');
const description=url.get('description');
img='img/'+img;
const sendQuery = new URLSearchParams();
    sendQuery.append('img',img);
    sendQuery.append('title',title);
    sendQuery.append('author',author);
    sendQuery.append('category',category);
    sendQuery.append('description',description);

const book=document.createElement('div');
book.classList.add('book');
book.innerHTML=`
<a href="book_details.html?${sendQuery.toString()}" target="_blank">
<div class="hiddenDetails">
<p class="title">${title}</p>
<p class="author">${author}</p>
<p class="category">${category}</p>
<p class="description">${description}</p>
</div>
   <img src="${img}" alt="book image">
</a>
<button>Borrow</button>
`;
document.getElementById('available-books').appendChild(book);
// document.getElementById('admin_available').appendChild(book);




