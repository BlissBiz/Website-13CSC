// Gets information for Phone number and Email

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

    alert(`Phone Number: ${phoneInput}\nEmail Address: ${emailInput}`);
  }  

  // Allow only numeric input for the phone field
  document.getElementById('userPhone').addEventListener('input', function (e) {
    this.value = this.value.replace(/\D/g, ''); // Remove non-numeric characters
  });
