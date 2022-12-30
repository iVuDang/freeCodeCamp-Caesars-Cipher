/* START JAVASCRIPT FUNCTION */


/* High Level Outline: 
Purpose - takes a word input and shifts each letter 13 characters right

1) Create a function allowing user to input a string
2) Create placeholder variable 
3) Create a for loop to run through all letters of the string input in integer format
4) Create IF statement, if the integer is not between the alphabet a to z, aka 65 to 90, return the normal symbol
5) Else if, the integer in the string is less than N, add 13 to the integer. 
    78 is N. Reason N is used is A => N, and M => Z in Rot13 format. A to M is the first set. M to Z is the second set. 

6) Else, the remainder, aka values above 78 => N, and values less than 90 => Z, will deduct 13 from the integer. 
7) Return our placeholder array after all adjustments as a string
*/

function rot13(str) {                                   // L1
    let array = [];                                       // L2
    
    for (let i = 0; i < str.length; i++) {                // L3
      let integer = str.charCodeAt(i);                    // L4
      
      if(integer < 65 || integer > 90) {                  // L5
        array.push(str[i]);                               // L6
      } else if (integer < 78) {                          // L7
        array.push(String.fromCharCode(integer + 13));    // L8
      } else {                                            
        array.push(String.fromCharCode(integer - 13));    // L9
      }
    }
   return array.join('');                                 // L10
  }
  
  // TEST
  console.log(rot13('SERR PBQR PNZC'));
  
  /* Notes:
  L1 - function where 'str' is the word to be encrypted
  L2 - create a placeholder called 'array' for us to return the encrypted-adjusted word
  L3 - create a for loop to run through each letter of str using .length 
  L4 - create a local variable called 'integer' equal to each letter of the str input converted to an integer
  L5 - if the variable integer is less than 65 or greater than 90, aka outside the A to Z range, than 
  L6 - return the stri[i] as is into our variable array
  l7 - if integer is less than 78, aka N, than add 13 to our current stri[i] integer
  l9 - else, all remaining values greater than 78 aka N, and less than 90 aka Z, should deduct 13, 
  e.g. 90 is Z, minus 13 equals to 77 which is M. This is correct A => N, M => Z. 
  L10 - return the array variable, but use .join to convert from integers back into string format. 
  
  */
  
  
  /* END JAVASCRIPT FUNCTION */
  
  
  /* START WEB API */
  function showRot13(){
      var input = document.getElementById('inputString');
      var result = document.querySelector(".result");
      result.textContent = rot13(input.value.toUpperCase());	
  }
  
  // result variable to display as text = apply the function rot13 to the value of our inputString 
  // textContent property of the Node interface - represents the text content of the node and its descendants
  // nodeValue property of the Node interface - returns or sets the value of the current node
  // .toUpperCase() is needed, otherwise, inputting lower letters will not convert
  
  /* END WEB API */