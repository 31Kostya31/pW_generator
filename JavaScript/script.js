// Assignment Code

// Select the generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input




function writePassword() {
  // Generate password
  var password = generatePassword();

  // Select the password output
  var passwordText = document.querySelector("#password");

  // Set password text
  passwordText.value = password;
}






function generatePassword() {
  // set the default
  var pw = "";
  var validChars = "abcdefghijklmnopqrstuvwxyz";

  // prompt for criteria
  var pwLength = promptPasswordLength();
  if (pwLength == false) {
    return pw;
  }

  var pwChars = promptSpecialCharacters();
if(pwChars == false) {
  return pw;
}
  // extend valid characters
  if (pwChars == "Y") {
    validChars = validChars.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$");
  }

  // generating password
  for (var i = 0; i < pwLength; i++) {
    var idx = Math.floor(Math.random() * validChars.length);

    pw = pw.concat(validChars.charAt(idx));
  }

  return pw;
}







/**
 * Prompt for the password length
 */
function promptPasswordLength() {
  var pwLength = -1;

  while (pwLength == -1) {
    pwLength = window.prompt(
      "How many characters would you like in your password?\n(Must be between 8 and 128 characters)"
    );
    console.log("passwordLength ", pwLength);
    if (!pwLength) {
      pwLength = false;
      break;
    } else if (isNaN(pwLength)) {
      window.alert("error its not a number");
      pwLength = -1;
    } else if (pwLength < 8) {
      window.alert("the password is too short");
      pwLength = -1;
    } else if (pwLength > 128) {
      window.alert("The password is too long");
      pwLength = -1;
    }
  }
  return pwLength;
}

function promptSpecialCharacters() {
  var pwChars = -1;

  while (pwChars == -1) {
    // prompt user the special characters
    var pwChars = window.prompt(
      "Would you like to include lowercase, uppercase, numeric, and/or special characters?\n(Y/N)");
    console.log("Special characters", pwChars);

    // terminate if user pressed cancel
    if (!pwChars) {
      pwChars = false;
      break;
    }

    // validate the answer
    pwChars = pwChars.charAt(0).toUpperCase();
    if (pwChars == "Y") {
      window.alert("You selected 'y'");
    } else if (pwChars == "N") {
      window.alert("You selected 'n'");
    } else {
      window.alert("Please select Y or N");
      pwChars = -1;
    }
  }
  return pwChars;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
