// declare generatePassword function
function generatePassword() {

  // declaring arrays of character types
  let lowercaseCharacters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ];
  let uppercaseCharacters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];
  let numbers = [ 
    '9', '8', '7', '6', '5', '4', '3', '2', '1', '0',
  ]
  let specialCharacters = [
    "+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~",
    "*", "?", ":","\"","\\", "@", "#", "$", "%", "'", ",", ".", "_",
    "/", ";", "<", ">", "`", 
  ]

  // asks user how long they want their password to be
  let passwordLength = Number(window.prompt("how long do you want you password to be? Please enter a number between 8 and 128:"));

  // Making sure the input is a valid number
  if (
    (passwordLength < 8) ||
    (passwordLength > 128) ||
    (isNaN(passwordLength))
  ) {
    window.alert("Invalid input.");
    return;
  }

  // asks if the user wants uppercase, lowercase, numbers and specialCharacters 
  // in their password
  let isLowercase = window.confirm("Do you want lowercase characters in you password?");
  let isUppercase = window.confirm("Do you want uppercase characters in you password?");
  let isNumbers = window.confirm("Would you like numbers to be included in you password?");

  // If they don't want uppercase, lowercase or numbers in their PW,
  // the password is generated with just special characters
  if (isLowercase === false && isUppercase === false && isNumbers === false) {
    isSpecialCharacters = true;
  } else {
    isSpecialCharacters = window.confirm("Would you like special characters in you password?");
  }

  // declaring array of possible characters
  let possibleCharacters = [];

  // builds array of possible characters
  if (isLowercase === true) {
    Array.prototype.push.apply(possibleCharacters, lowercaseCharacters);
  }
  if (isUppercase === true) {
    Array.prototype.push.apply(possibleCharacters, uppercaseCharacters);
  }
  if (isNumbers === true) {
    Array.prototype.push.apply(possibleCharacters, numbers);
  }
  if (isSpecialCharacters === true) {
    Array.prototype.push.apply(possibleCharacters, specialCharacters)
  }
  let password = [];
  // places a random character from possibleCharacters to the index i of password
  for (let i = 0; i < passwordLength; i++) {
    let index = Math.floor(Math.random() * possibleCharacters.length);
    password.push(possibleCharacters[index]);
  }
  return password.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
