//assigns variable to the form so it can be used for an event listener on the submit
const form = document.getElementById('login-form');

//listens for submit and prevents default form submission behaviour
form.addEventListener('submit', (event) => {
  event.preventDefault();

  //pulls inputs into variables
  const username = event.target.username.value;
  const password = event.target.password.value;

  // Check password strength
  const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // if pw is weak issue
  if (!strongPassword.test(password)) {
    alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
    return;
  }

  // Check username and password combination, if correct give welcome alert and navigate to home page, if incorrect send invalid alert
  if (username === 'Randy' && password === 'MyPassword1@') {
    alert(`Welcome ${username}!`);
    window.location.href = 'home.html'; 
  } else {
    alert('Invalid username or password');
  }
});
