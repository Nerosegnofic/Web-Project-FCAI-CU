// function addItem(){
//     const book=document.createElement('div');
//     book.classList.add('book');
//     book.innerHTML=`
//     <a href="Deliverance_book.html" target="_blank">
//        <img src="deliverance.jpeg">
//     </a>
//     `;
//     document.getElementById('available-books').appendChild(book);
// }


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