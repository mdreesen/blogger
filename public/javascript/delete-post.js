async function deleteFormHandler(event) {
    event.preventDefault();
    const id = document.querySelector('.edit-post-form').id;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/dashboard/')
    } else {
        alert(response.statusText)
    }

}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler)