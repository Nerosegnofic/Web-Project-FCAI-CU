document.getElementById("saveChanges").addEventListener('click', function(){
    const id = this.value; // value of the button
    const title = document.getElementById("dTitle").innerText;
    const author = document.getElementById("dAuthor").innerText;
    const category = document.getElementById("dCategory").innerText;
    const desc = document.getElementById("dDesc").innerText;

    console.log(id);
    
    const data={
        book_id:id,
        title: title,
        author: author,
        category: category,
        desc: desc,
    };
    
    console.log(JSON.stringify(data));
    fetch('/update/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify(data)
    }).then(response=>response.json()).then(data=>{
        if(data.success){
            alert('Book updated successfully!');
            window.location.href=redirectUrl;
        }
        else{
            alert('Failed to update book...');
        }
    })
    .catch(error=>{
        console.error('Error:', error);
        alert('An error occurred while updating book details.');
    })
}); 