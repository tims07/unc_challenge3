// Object: Characters
let passwordCharacters = {
  uppercase: 'ABCDEFGHIJLMNOPQRSTUVWXYZ',
  lowerCaseCharacters: 'abcdefghijklmnopqrstuvwxyx',
  specialCharacters: '!#$%&()*+,-./:;<=>?@[]^_`{|}~',
  numbers: '123456789'
}

// Assignment Code
var generateBtn = document.querySelector("#generate");





function generatePassword () {
  console.log("Hello World")

  // Prompt criteria for user password
  // - password length
  // - special characters, case, and numbers
  // - Probably store everything into an object or array

  
  let pWordCharacters = "";

  for (i = 0; index < passwordCharacters.length; i++) {
    let randomNum = Math.floor(Math.random()) * passwordCharacters.length;
   
    
  }

}

generatePassword()





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
