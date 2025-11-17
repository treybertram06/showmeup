

async function trySubmission(event) {
    event.preventDefault();

    try {
        const res = await fetch('/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await res.json();
        if (res.ok) {
          document.getElementById('message').textContent = 'Post created successfully!';
        } else {
          document.getElementById('message').textContent = 'Error: ' + (result.error || 'Unknown error');
        }
      } catch (err) {
        document.getElementById('message').textContent = 'Network error: ' + err.message;
      }
}


function submitPost() {

    let form = document.getElementById('postForm');

    const formData = {
        username: document.getElementById('username').value,
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
    };

    form.addEventListener('submit', trySubmission);

}