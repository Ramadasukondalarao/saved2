document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    console.log("Entered Username:", username);
    console.log("Entered Password:", password);
  
    const validUsername = "kondaramdass.7@gmail.com";
    const validPassword = "19AJ1A04D7";
  
    if (username === validUsername && password === validPassword) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password!");
    }
  });
    




