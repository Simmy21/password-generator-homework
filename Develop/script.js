// Assignment code here
var promptLength = function()
{
  return window.prompt("Enter a password length from 8-128 characters:");
}

/*creates the popup to select what you want in password*/
var promptChars = function()
{
  var options = [false, false, false, false];
  options[0] = window.confirm("Use lowercase characters? (a-z):");
  options[1] = window.confirm("Use uppercase characters? (A-Z):");
  options[2] = window.confirm("Use numeric characters? (0-9):");
  options[3] = window.confirm("Use special characters? ('!', '[', '=', etc.):");
  return options;
}
/*allows to select between 8 - 128 words*/
var generatePassword = function()
{

  var passLength = 0;
  passLength = promptLength();
  while ((passLength < 8 || passLength > 128) || !parseInt(passLength)) 
  {
    window.alert("Invalid Length (8-128 req.)");
    passLength = promptLength();
  }

/*assigns a number to each option to use for the if statements to determine what will show in password*/
  var options = promptChars();
  while (!(options[0] || options[1] || options[2] || options[3])) 
  {
    window.alert("You must select 'Ok' for at least one option."); 
    options = promptChars();
  }

  var useableChars = [];
  if (options[0])
  {
    for (var i = 97; i <= 122; i++)
      useableChars.push(String.fromCharCode(i));
  }
  if (options[1])
  {
    for (var i = 65; i <= 90; i++)
      useableChars.push(String.fromCharCode(i));
  }
  if (options[2])
  {
    for (var i = 48; i <= 57; i++)
      useableChars.push(String.fromCharCode(i));
  }
  if (options[3]) 
  {
    for (var i = 32; i <= 47; i++)
      useableChars.push(String.fromCharCode(i));
    for (var i = 58; i <= 64; i++)
      useableChars.push(String.fromCharCode(i));
    for (var i = 91; i <= 96; i++)
      useableChars.push(String.fromCharCode(i));
    for (var i = 123; i <= 126; i++)
      useableChars.push(String.fromCharCode(i));
  }


  var password = ""; 
  for (var i = 0; i < passLength; i++) 
    password += useableChars[Math.ceil(Math.random()*useableChars.length)-1];
  return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
