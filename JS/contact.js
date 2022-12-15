
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
	if (confirm('Reset the form?')) {
		hideErrors();
		document.getElementById("name").focus();
		return true;
	}
	e.preventDefault();

	return false;
}


/*
 * Does all the error checking for the form.
 *
 * return  True if an error was found; False if no errors were found
 */

function FormHasErrors() {
  let errorFlag = false;

  let requiredFields = ["name","phone","email"];

  for( let i = 0; i < requiredFields.length;i++){

    let fields = document.getElementById(requiredFields[i]);
    if(!formFieldHasInput(fields)){
      document.getElementById(requiredFields[i]+"_error").style.display = "block";
      if(!errorFlag){
        fields.focus();
        fields.select();
      }
      errorFlag = true;
    }

    //use regex to check if the email is valid 
    if(requiredFields[i] == "email"){
      let email = document.getElementById("email");
      let emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
      if(!emailRegex.test(email.value) && formFieldHasInput(email)){
        document.getElementById("emailformat_error").style.display = "block";
        if(!errorFlag){
          fields.focus();
          fields.select();
        }
        errorFlag = true;
      }
    }

    //use regex to check if the phone number has 10 digits
    if(requiredFields[i] == "phone"){
      let phone = document.getElementById("phone");
      let phoneRegex = new RegExp(/^\d{10}$/);
      if(!phoneRegex.test(phone.value) && formFieldHasInput(phone)){
        document.getElementById("phoneformat_error").style.display = "block";
        if(!errorFlag){
          fields.focus();
          fields.select();
        }
        errorFlag = true;
      }
    }

  }


  return errorFlag






  

}




 

/*
 * Determines if a text field element has input
 *
 * param   element The text field element to evaluate
 * return  True if the field contains input; otherwise, false
 */

function formFieldHasInput(fieldElement) {
	if (fieldElement.value == null || trim(fieldElement.value) == "") {
		// Invalid entry
		return false;
	}

	// Valid entry
	return true;
}

/*
 * Removes white space from a string value.
 *
 * return  A string with leading and trailing white-space removed.
 */
function trim(str)  
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
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







