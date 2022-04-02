// import Thanks from "./Thanks.js"
// $('#failure').hide();
// $('#success').hide();
let failure=document.getElementById('failure');
let success=document.getElementById('success');
success.style.display="none";
failure.style.display="none";
let firstName = document.getElementById("form-first-name");
let lastName = document.getElementById("form-last-name");
let email = document.getElementById("form-email");
let phone = document.getElementById("form-number");
let issue = document.getElementById("form-subject");
let validFirstName = false;
let validSecondName = false;
let validEmail = false;
let validPhone = false;
let validIssue = false;
if (firstName) {
  firstName.addEventListener("blur", (e) => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let value = e.target.value;
    if (regex.test(value)) {
      console.log("Your name is valid");
      firstName.classList.remove("is-invalid");
      validFirstName = true;
    } else {
      console.log("Your firstame is not valid");
      firstName.classList.add("is-invalid");
      validFirstName = false;
    }
  });
}
if (lastName) {
  lastName.addEventListener("blur", (e) => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let value = e.target.value;
    if (regex.test(value)) {
      console.log("Your lastname is valid");
      firstName.classList.remove("is-invalid");
      validSecondName = true;
    } else {
      console.log("Your name is not valid");
      lastName.classList.add("is-invalid");
      validSecondName = false;
    }
  });
}
if (email) {
  email.addEventListener("blur", (e) => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let value = e.target.value;
    if (regex.test(value)) {
      validEmail = true;
      console.log("Your email is valid");
      email.classList.remove("is-invalid");
      validEmail = true;
    } else {
      console.log("Your email is not valid");
      email.classList.add("is-invalid");
      validEmail = false;
    }
  });
}
if (phone) {
  phone.addEventListener("blur", (e) => {
    let regex = /^([0-9]){10}$/;
    let value = e.target.value;
    if (regex.test(value)) {
      console.log("Your phone is valid");
      phone.classList.remove("is-invalid");
      validPhone = true;
    } else {
      console.log("Your phone is not valid");
      phone.classList.add("is-invalid");
      validPhone = false;
    }
  });
}
if (issue) {
  issue.addEventListener("blur", (e) => {
    let regex = /([a-zA-Z+])/;
    let value = e.target.value;
    if (regex.test(value)) {
      console.log("Your issue was submitted.");
      issue.classList.remove("is-invalid");
      validIssue = true;
    } else {
      console.log("Enter a valid issue");
      issue.classList.add("is-invalid");
      validIssue = false;
    }
  });
}
let submit = document.getElementById("submit");
if (submit) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("You clicked on submit");
    console.log(validEmail, validFirstName, validSecondName, validPhone,validIssue);

    // Submit your form here
    if (validEmail && validFirstName && validSecondName && validPhone && validIssue) {
      console.log("Phone, email and user are valid. Submitting the form");
    //   window.location.replace("http://localhost:3000/thank");
    //   window.open(Thanks.js);
    failure.style.display="none";
    success.style.display="block";
    setTimeout(() => {
      failure.style.display="none";
      success.style.display="none";
    }, 10000);
      
    } else {
      console.log(
        "One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again"
      );
      failure.style.display="block";
      success.style.display="none";
      setTimeout(() => {
        failure.style.display="none";
        success.style.display="none";
      }, 10000);
    }
  });
}
