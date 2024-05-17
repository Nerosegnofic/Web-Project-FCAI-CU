const url = new URLSearchParams(window.location.search);
let img = url.get('img');
img='img/'+img;
const title=url.get('title');
const author=url.get('author');
const category=url.get('category');
const description=url.get('description');

document.getElementById('book_name').innerHTML=`${title}`;
document.getElementById('book_img').src=`${img}`;
document.getElementById('Author').innerHTML=`${author}`;
document.getElementById('Description').innerHTML=`${description}`;
document.getElementById('category').innerHTML=`${category}`;

