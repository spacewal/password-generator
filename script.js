// pool
var lowercaseLi = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseLi = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numLi = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharLi = ["!@#$%&*"];
var emptyArray = [];
var possibleCharactersArray = [];

// Assignment Code
var generateBtn = document.querySelector("#generate")

function generatePassword(){

 // 1. Prompt the user for the password criteria
 //  a. length of the password (8 characters and no more than 128 characters)
 //  b. lowercase, uppercase, numeric, and/or special characters

  let getChar = prompt("Enter the length of the password. Must be between 8 and 128 characters.");
  console.log(getChar);


    // if (getChar <= 8 && getChar >= 128) {
    //   return;
    // }else{
    //   alert("Invalid");
    //   prompt("Length of the passsword is between 8 and 128 characters."); 
    // }

    if (getChar < 8 || getChar > 128) {
      alert("Invalid password length");
      return false;
    }
  

  // for(i = 0; i < getChar ; i++){
  //     var whatever = i 
  //     console.log(whatever);
  // }


  var lowercaseInput = confirm("Include lowercase?");
  var uppercaseInput = confirm("Include uppercase?");
  var num = confirm("Include numbers?");
  var specialChar = confirm("Include special characters?");

  if (lowercaseInput === true){
    // console.log(Math.floor(Math.random() * whatever))
    console.log(1);
    possibleCharactersArray = possibleCharactersArray.concat(lowercaseLi);
  }

  if (uppercaseInput === true){
    console.log(2);
    possibleCharactersArray = possibleCharactersArray.concat(uppercaseLi);

  }

  if (num === true){
    console.log(3);
    possibleCharactersArray = possibleCharactersArray.concat(numLi);

  }

  if (specialChar === true){
    console.log(4);
    possibleCharactersArray = possibleCharactersArray.concat(specialCharLi);
  }

  // function passwordGen(){
  //   // theChar = (Math.floor(Math.random() ) * possibleCharactersArray);
  //   // console.log(theChar);
  //   // possibleCharactersArray = Math.ceil(possibleCharactersArray);
  //   // possibleCharactersArray = Math.floor(possibleCharactersArray);
  //   return Math.floor(Math.random(possibleCharactersArray) );

  // }
  
  
  // var randColor = possibleCharactersArray[Math.floor(Math.random() * possibleCharactersArray.length)];
  
  // we have all posible characters inside possibleCharactersArray
  for (var i=0; i<getChar; i++) {
    debugger;
    var rnum = Math.floor(Math.random() * possibleCharactersArray.length);
    // randomstring += possibleCharactersArray.substring(rnum,rnum+1);
    emptyArray.push(possibleCharactersArray[rnum])
  }

  var randomString = emptyArray.join('')
  // 2. Validate the input 


  // 3. Generate password based on criteria 

  // 4. Display password on the page
  return randomString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)









// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page