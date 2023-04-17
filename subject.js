function sendEmail() {
 var firstName = document.querySelector("#inputFirstName").value;
 var lastName = document.querySelector("#inputLastName").value;
 var email = document.querySelector("#inputEmail").value;
 var address = document.querySelector("#inputAddress").value;
 var city = document.querySelector("#inputCity").value;
 var state = document.querySelector("#inputState").value;
 var zipCode = document.querySelector("#inputZipCode").value;
 var currentPassword = document.querySelector("#inputCurrentPassword").value;
 var newPassword = document.querySelector("#inputNewPassword").value;


 var emailBody = `Dear ${firstName} ${lastName},<br><br>
 Your information has been updated:<br>
 ${address}<br>${city}, ${state} ${zipCode}<br><br>
 Thank you.<br><br>
 Sincerely,<br>
 RooMe`;


 var emailSubject = "Account";


 // Send email using window.open method
 var mailtoLink = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
 window.open(mailtoLink);
}


function populateEmailFields(firstName, lastName, email, address, city, state, zipCode) {
 var firstNameInput = document.querySelector("#inputFirstName");
 var lastNameInput = document.querySelector("#inputLastName");
 var emailInput = document.querySelector("#inputEmail");
 var addressInput = document.querySelector("#inputAddress");
 var cityInput = document.querySelector("#inputCity");
 var stateInput = document.querySelector("#inputState");
 var zipCodeInput = document.querySelector("#inputZipCode");


 firstNameInput.value = firstName;
 lastNameInput.value = lastName;
 emailInput.value = email;
 addressInput.value = address;
 cityInput.value = city;
 stateInput.value = state;
 zipCodeInput.value = zipCode;
}