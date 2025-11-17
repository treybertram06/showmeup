async function trySubmission(event) {
  event.preventDefault();

  const formData = {
    username: document.getElementById('username').value,
    text: document.getElementById('text').value,
    category: document.getElementById('category').value
  };

  try {
    const res = await fetch('/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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

document.getElementById('postForm').addEventListener('submit', trySubmission);
