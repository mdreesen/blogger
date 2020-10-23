async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application.json' }
    });

    if (response.ok) {
        // when clicking logout button, the user goes directly to the login page
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout)