async function enjoyClickHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/posts/enjoy', {
        method: 'PUT',
        body: JSON.stringify({
            enjoy: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.enjoy-btn').addEventListener('click', enjoyClickHandler);