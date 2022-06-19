var  passwordCharacters = {
  alphaLowerCase:"abcdefghijklmnopqrstuvwxyx",
  alphaUpperCase: "ABCDEFGHIJLMNOPQRSTUVWXYX",
  specialCharacters:  "!#$%&()*+,-./:;<=>?@[]^_`{|}~"
}



// Assignment Code
var generateBtn = document.querySelector("#generate");





function generatePassword () {
  console.log("Hello World")

  // Prompt criteria for user password
  // - password length
  // - special characters, case, and numbers
  // - Probably store everything into an object
}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
