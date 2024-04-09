'use strict'
document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.querySelector('.login-btn');

  loginBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link

    // Check if the required fields are filled out
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() !== '' && password.trim() !== '') {
      // If the fields are filled out, redirect to userhome.html
      window.location.href = 'userhome.html';
    } else {
      // If the fields are not filled out, show an alert or perform any other desired action
      alert('Please fill out all required fields.');
    }
  });
});