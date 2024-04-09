'use strict';

// Wrap JavaScript code in DOMContentLoaded event listener
// Allowing user to change their profile photo
document.addEventListener('DOMContentLoaded', function() {
  // Get the profile picture container and file input element
  const profilePicContainer = document.querySelector('.profile-pic');
  const profilePicUpload = document.getElementById('profile-pic-upload');
  const profilePic = document.getElementById('profile-pic');

  // Add click event listener to the profile picture container
  profilePicContainer.addEventListener('click', function() {
    // Trigger click event on the file input element
    profilePicUpload.click();
  });

  // Listen for change event on the profile picture upload input
  profilePicUpload.addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the selected file
    const reader = new FileReader();

    reader.onload = function(e) {
      // Set the source of the profile picture to the uploaded image
      profilePic.src = e.target.result;
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  });
});

// Allowing user to edit their information
// Wrap js code in DOMContentLoaded event listener
// Wrap JavaScript code in DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
  // Get the edit button element
  const editButton = document.getElementById('edit-button');

  // Add click event listener to the edit button
  editButton.addEventListener('click', function() {
    // Get the input fields for each piece of information
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');

    // If the button text is "Edit", switch to edit mode
    if (editButton.textContent === 'Edit') {
      // Change the button text to "Done"
      editButton.textContent = 'Done';

      // Make all input fields editable
      fullNameInput.removeAttribute('readonly');
      emailInput.removeAttribute('readonly');
      phoneInput.removeAttribute('readonly');
      addressInput.removeAttribute('readonly');

      // show border when in edit mode
      fullNameInput.classList.add('editable');
      emailInput.classList.add('editable');
      phoneInput.classList.add('editable');
      addressInput.classList.add('editable');

    } else {
      // If the button text is "Done", switch to view mode
      // Change the button text back to "Edit"
      editButton.textContent = 'Edit';

      // Make all input fields non-editable
      fullNameInput.setAttribute('readonly', 'readonly');
      emailInput.setAttribute('readonly', 'readonly');
      phoneInput.setAttribute('readonly', 'readonly');
      addressInput.setAttribute('readonly', 'readonly');

      // Remove editable class when edit is toggled off
      fullNameInput.classList.remove('editable');
      emailInput.classList.remove('editable');
      phoneInput.classList.remove('editable');
      addressInput.classList.remove('editable');

      // Save the updated information 
      saveUserInfo(fullNameInput.value, emailInput.value, phoneInput.value, addressInput.value);
    }
  });

  // Function to save the updated user information
  function saveUserInfo(fullName, email, phone, address) {
    console.log('Saving updated information:');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Address:', address);
  }
});
