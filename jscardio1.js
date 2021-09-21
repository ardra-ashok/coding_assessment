/* reverse a string - first method */

function reverseString(str) {
 const strArr =  str.split('');
 strArr.reverse();
 return strArr.join('');
}

// reverse a string - second method
function reverseString1(str) {
  return str.split('').reverse().join('');
}

// third method
function reverseString2(str) {
 let revString = '';
 for (let i = str.length-1; i >= 0; i--){
  revString = revString + str[i];
 }

 return revString;
}
function reverseString3(str) {
 let revString = '';
 for (let char of str) {
  revString = char + revString;
 }
 return revString;
}


// console.log(reverseString('hello'));
// console.log(reverseString1('string'));
// console.log(reverseString2('toy'));
// console.log(reverseString3('mary'));

/* reverse an integer */

function reverseInt(num) {
 const revString = num.toString().split('').reverse().join('');
 return parseInt(revString) * Math.sign(num);
}

// console.log(reverseInt(-12345));

/* Check palindrome or not */
function checkPalindrome(str) {
  let revString = str.split('').reverse().join('');
 return str === revString;
}

// console.log(checkPalindrome('true') ? 'true' : 'false');


/* check Capitalize */

function capitalizeLetters(str) {

  /* first method */
  /* let strArr = str.toLowerCase().split(' ');
  for (let i = 0; i < strArr.length; i++){
   strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
 }
 return strArr.join(' '); */
  /* Second method */
  /* return str.toLowerCase().split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
 */
  
  /* Third method */
  return str.replace(/\b[a-z]/gi, function (char) {
    return char.toUpperCase();
  })
}

// console.log(capitalizeLetters('hello here am apple'));


function maxCharacter(str) {
  let maxNum = 0;
  let charMap = {};
  let maxChar 
  str.split('').forEach(function(char){
    if(charMap[char]) {
      charMap[char]++;
    } else{
      charMap[char] = 1;
    } 
  });
  
  for (char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }

  }
  
  return maxChar;
}

// console.log(maxCharacter('javascript'));


function fizzBuzz() {
  for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('Fizz Buzz');
    }
    else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    }
     else {
      console.log(i);
    } 
  }
}

fizzBuzz();