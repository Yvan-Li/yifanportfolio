/**
 * JS for contact.html
 * Author: Yifan Li
 * Date: 2022-12-14 
 * Updated: 2022-12-14
 * version: 1.0
 */


/*
 * Handles the submit event of the survey form
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */

function validate(e) {

  hideErrors();

  if (FormHasErrors()) {
  e.preventDefault();
  return false;
  }

return true;
}


/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e) {
	if (confirm('Reset form?')) {
		hideErrors();
		document.getElementById("name").focus();
		return true;
	}
	e.preventDefault();
	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}


/*
 * Does all the error checking for the form.
 *
 * return  True if an error was found; False if no errors were found
 */

function FormHasErrors() {
  let errorFlag = false;

  //check if the name is empty. If it is, display an error message
  let name = document.getElementById("name");
  if (name.value == "") {
    let error = document.getElementById("name_error");
    error.style.display = "block";
    errorFlag = true;
  }

  // check if the email address is empty. If it is, display an error message
  let email = document.getElementById("email");
  if (email.value == "") {
    let error = document.getElementById("email_error");
    error.style.display = "block";
    errorFlag = true;
  }

    // if the email address is not empty. check the format of the email address
    if (email.value != "") {
      let emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
      if (!emailRegex.test(email.value)) {
        document.getElementById("emailformat_error").style.display = "block";
        if (!errorFlag) {
          email.focus();
          email.select();
        }
        errorFlag = true;
      }
    }

    // check if the phone number is empty. If it is, display an error message
    let phone = document.getElementById("phone");
    if (phone.value == "") {
      let error = document.getElementById("phone_error");
      error.style.display = "block";
      errorFlag = true;
    }

    // if the phone number is not empty. check the format of the phone number
    if (phone.value != "") {
      let phoneRegex = new RegExp(/^\d{3}-\d{3}-\d{4}$/);
      if (!phoneRegex.test(phone.value)) {  
        document.getElementById("phoneformat_error").style.display = "block";
        if (!errorFlag) {
          phone.focus();
          phone.select();
        }
        errorFlag = true;
      }
    }


  return errorFlag;
}


 

/*
 * Determines if a text field element has input
 *
 * param   element The text field element to evaluate
 * return  True if the field contains input; otherwise, false
 */

function formFieldHasInput(fieldElement) {
	// Check if the text field has a value
	if (fieldElement.value == null || trim(fieldElement.value) == "") {
		// Invalid entry
		return false;
	}

	// Valid entry
	return true;
}



/*
* Hides all of the error elements.
*/
function hideErrors() {
  let errorElements = document.getElementsByClassName("error");
  for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].style.display = "none";
  }
}


/*
* Handles the load event of the document.
*/
function load() {

  hideErrors();
 
//add event listener to the submit button
  document.getElementById("submit_button").addEventListener("click", validate);

//add event listener to the reset button
  document.getElementById("reset_button").addEventListener("click", resetForm);

}


document.addEventListener("DOMContentLoaded", load);










 





