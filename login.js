document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validate the username and password (dummy validation for example)
    if (username === 'user' && password === 'password') {
      // If the login is successful, redirect to the to-do list page
      window.location.href = 'todo.html';
    } else {
      // Show an error message (in a real app, you'd handle this differently)
      alert('Invalid username or password');
    }
  });
  alert('Invalid username or password');