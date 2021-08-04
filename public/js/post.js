
async function newPost(event) {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#new-post-content').value.trim();

    const response = await fetch('/post', {
        method: 'POST',
        body: JSON.stringify({
            title: title, 
            content: content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Post failed. Please try again.');
    }
};

document.querySelector('.create-new-post').addEventListener('submit', newPost);