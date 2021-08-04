async function newComment(event) {
    event.preventDefault();

    let post_id = document.location.pathname.split("/");
    post_id = parseInt(post_id[2]); 

    const comment = document.querySelector('#new-comment').value.trim();

    const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({
            comment,
            post_id
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert('Your comment did not post');
    }
};

document.querySelector('#add-new-comment').addEventListener('click', newComment);