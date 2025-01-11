document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password match for each user
  if (username === 'youssefnachar331@gmail.com' && password === 'Abd@vouvou123') {
      alert('Login successful!');
      // Redirect to your website after a successful login
      window.location.assign("cruds.html");

  } else if (username === 'abdelrazak@gmail.com' && password === 'Abd@vouvou123') {
      alert('Login successful!');
      // Redirect to your website after a successful login
      window.location.assign("cruds.html");

  } else if (username === 'nagham@gmail.com' && password === 'Abd@vouvou123') {
      alert('Login successful!');
      // Redirect to your website after a successful login
      window.location.assign("cruds.html");
  } else if (username === 'ghayas@gmail.com' && password === 'Abd@vouvou123') {
      alert('Login successful!');
      // Redirect to your website after a successful login
      window.location.assign("cruds");
  } else {
      alert('Invalid username or password!');
  }
});
