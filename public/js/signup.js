const signUpFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim().toLowerCase();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/', {
            method: 'POST',
            body: JSON.stringify({
                username: username, 
                password: password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            alert(`Success @${username}!`);
            document.location.replace('/dashboard');
        } else {
            alert('Signup failed. Please try again.');
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signUpFormHandler);