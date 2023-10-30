// Function to check if an email is valid
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Function to handle the form submission
function submitContact() {
  const phoneInput = document.getElementById('userPhone').value;
  const emailInput = document.getElementById('userEmail').value;

  // Defines character limits
  const phoneMinLimit = 7;
  const phoneMaxLimit = 20;
  const emailMinLimit = 10;
  const emailMaxLimit = 30;

  // Checks if the input is valid
  if (phoneInput.length < phoneMinLimit || phoneInput.length > phoneMaxLimit) {
    alert(`Phone Number must be between ${phoneMinLimit} and ${phoneMaxLimit} characters.`);
    return;
  }

  if (emailInput.length < emailMinLimit || emailInput.length > emailMaxLimit) {
    alert(`Email Address must be between ${emailMinLimit} and ${emailMaxLimit} characters.`);
    return;
  }

  // Check if the email is valid using the isValidEmail function
  if (!isValidEmail(emailInput)) {
    alert('Email Address is not valid. Please enter a valid email address.');
    return;
  }

  alert(`Phone Number: ${phoneInput}\nEmail Address: ${emailInput}`);
}

// Allow only numeric input for the phone field
document.getElementById('userPhone').addEventListener('input', function(e) {
  this.value = this.value.replace(/\D/g, ''); // Remove non-numeric characters
});
