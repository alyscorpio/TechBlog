async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#edit-title').value.trim();
    const content = document.querySelector('#edit-content').value.trim();


    const response = await fetch('/api/post', {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        })
    });

    if (response.ok) {
        document.location.replace('/dashbaord');
    } else {
        alert('Update failed. Please try again.');
    }
};

document.querySelector('.edit-form').addEventListener('submit', editFormHandler);