/**
 * JS file for the home page
 * Author: Yifan Li
 * Created date: 2022-12-13 
 * Updated date: 2022-12-13
 * Version 1.0
 */



/*
 * Handles the submit event of the survey form
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */

function validate(e) {

    // Hide all of the error elements
    hideErrors();

	if (EmailHasErrors()) {
		e.preventDefault();
		return false;
	}
	return true;
}


/*
* Validates the email address
* return   True if the email address is valid; False if the email address is invalid
*/

function EmailHasErrors() {
    let errorFlag = false;

    // Ckheck if the email address is empty . If it is, display an error message
    let email = document.getElementById("email");

    if (email.value == "") {
        let error = document.getElementById("email_error");
        error.style.display = "block";
        errorFlag = true;
    }

    // Check if the email address is valid. If it is not, display an error message
    let emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    if(!emailRegex.test(email.value) && email.value != ""){
        document.getElementById("emailformat_error").style.display = "block";
        if(!errorFlag){
            email.focus();
            email.select();
        }
        errorFlag = true;
    }
    return errorFlag;
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
   
    // Add event listener for the email submit event
    let send = document.getElementById("submit");
    send.addEventListener("click", validate); 


    // hide all of the error elements
    hideErrors();


}


/**
 * add a blinking cursor to the h2 element
 */

var h2 = document.querySelector('.intro h2');
var str = h2.innerHTML;
h2.innerHTML = str + '|';
setInterval(function () {
    var str = h2.innerHTML;
    if (str.indexOf('|') != -1) {
        str = str.replace('|', '');
    } else {
        str = str + '|';
    }
    h2.innerHTML = str;
}
    , 500); 



document.addEventListener("DOMContentLoaded", load);










   



