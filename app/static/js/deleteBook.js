// document.getElementById("delete").addEventListener('click',function(){
//     console.log("CLICK");
//     const id = this.value;
//     const data={
//         book_id: id,
//     };

//     if(confirm('Are you sure you want to delete this book?')){
//         fetch('/delete/',{
//             method: 'POST',
//             headers:{
//                 'Content-Type': 'application/json',
//                 'X-CSRFToken': '{{ csrf_token }}'
//             },
//             body: JSON.stringify(data)
//         }).then(response=>response.json()).then(data=>{
//             if(data.success){
//                 alert("Book deleted.");
//             }
//             else{
//                 alert("Deletion failed");
//             }
//         }).catch(error=>{
//             alert('Error occurred');
//         })
//     }
// });


document.querySelectorAll('.delete').forEach(button=>{button.addEventListener('click',function(){
    console.log("CLICK");
    const id = this.value;
    const data={
        book_id: id,
    };

    if(confirm('Are you sure you want to delete this book?')){
        fetch('/delete/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': '{{ csrf_token }}'
            },
            body: JSON.stringify(data)
        }).then(response=>response.json()).then(data=>{
            if(data.success){
                alert("Book deleted.");
                const parentBookElement = button.parentElement;
                if (parentBookElement) {
                    parentBookElement.style.display = 'none';
                }
            }
            else{
                alert("Deletion failed");
            }
        }).catch(error=>{
            console.error('Error:', error);
            alert('Error occurred');
        })
    }})
});

// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelectorAll('.delete').forEach(button => {
//     button.addEventListener('click', function(){
//         const id = this.value;
//         console.log(id);
//     });
// });
// });