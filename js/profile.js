'use strict';

// Wrap JavaScript code in DOMContentLoaded event listener
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
