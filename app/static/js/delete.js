function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');

function confirmDelete(bookId) {
    console.log(bookId);
    var userConfirmed = confirm("Are you sure you want to delete this book?");
    if (userConfirmed) {
        $.ajax({
            url: "/delete_book/" + bookId + "/",
            type: "POST",
            data: {
                'csrfmiddlewaretoken': csrftoken
            },
            success: function(response) {
                if (response.success) {
                    console.log("Book deleted successfully:", bookId);
                    // Find the book element
                    const bookElement = document.querySelector(`.book[data-book-id="${bookId}"]`);
                    if (bookElement) {
                        console.log("Removing book element from DOM");
                        bookElement.remove();
                    } 
                    //else {
                    //    console.error("Book element not found in DOM:", bookId);
                    //}
                } else {
                    console.error("Server returned error:", response.error);
                    alert(response.error || "An error occurred while deleting the book.");
                }
            },
            error: function(xhr, status, error) {
                console.error("AJAX error:", status, error);
                console.error("Response:", xhr.responseText);
                alert("An error occurred. Please try again.");
            }
        });
    } else {
        console.log("Book deletion canceled.");
    }
    location.reload();
}