document.querySelectorAll('.returnBook').forEach(button=>{button.addEventListener('click',function(){
    console.log("CLICK");
    const id = this.value;
    const data={
        book_id: id,
    };
    fetch('/return_book/',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify(data)
    }).then(response=>response.json()).then(data=>{
        if(data.success){
            alert("Return successfully.");
            const parentBookElement = button.parentElement;
            if (parentBookElement) {
                parentBookElement.style.display = 'none';
            }
        }
        else{
            alert("Return failed");
        }
    }).catch(error=>{
        console.error('Error:', error);
        alert('Error occurred');
    })
})
});