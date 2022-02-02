// This is Login part

document.getElementById('login-btn').addEventListener('click', function () {
  // console.log('button clicked');
  const email = document.getElementById('email-field').value;
  // console.log(email)
  const password = document.getElementById('password-field').value;
  // console.log(password)
  if (email == 'bank@gmail.com' && password == '12345') {
    window.location.href = 'bank.html';
  } else {
    alert('Invalid email or password .Please try email:bank@gmail.com and password:12345');
  }
});