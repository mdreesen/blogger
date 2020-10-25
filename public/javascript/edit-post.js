async function editFormHandler(event) {
    event.preventDefault();
    const id = document.querySelector('.edit-post-form').id;
    const title = document.querySelector("input[name='post-title']").value.trim();

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText)
    }

}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler)