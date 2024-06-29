document.querySelectorAll('.borrow').forEach(button=>{button.addEventListener('click',function(){
    console.log("CLICK");
    const id = this.value;
    const data={
        book_id: id,
    };
    fetch('/borrow/',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify(data)
    }).then(response=>response.json()).then(data=>{
        if(data.success){
            alert("Borrowed successfully.");
            const parentBookElement = button.parentElement;
            if (parentBookElement) {
                parentBookElement.style.display = 'none';
            }
        }
        else{
            alert("Borrow failed");
        }
    }).catch(error=>{
        console.error('Error:', error);
        alert('Error occurred');
    })
})
});