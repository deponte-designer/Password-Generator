// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



//  Generate a password when the button is clicked

//  Present a series of prompts for password criteria

// * Length of password:
// * At least 8 characters but no more than 128.

//  Character types:
// * Lowercase
// ! Uppercase
// ! Numeric
// ! Special characters ($@%&*, etc)


// Function to prompt user for password options
function getPasswordOptions() {

  // Prompt for password length
  var passwordLength = Number(
    prompt("Please enter the length of the password (between 8 and 128 characters):")
  );

  // Validate the password length
  if (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  // Confirm the inclusion of lowercase characters
  var includeLower = confirm("Include lowercase characters?");
  console.log();


  // Return an object with user choices
  return {
    passwordLength: passwordLength,
    includeLower: includeLower,

  };


}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var allChars = [];

  if (options.includeLower) {
    allChars = allChars.concat(lowerCasedCharacters);
  }



  for (var i = 0; i < options.passwordLength; i++) {
    var randomChar = getRandom(allChars);
    result.push(randomChar);
  }

  return result.join('');

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  
  console.log("Your generated password is:\n" + password);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);