// Challenge 1: return a sum of all parameters entered regardless of the amount of the numbers - no arrays

function addAll() {
 let args = Array.prototype.slice.call(arguments);
 console.log(args);
 let total = 0;
 for (i = 0; i < args.length; i++){
  total += args[i];
 }
 return total;
}

function addAll1(...numbers) {
 let total = 0;
 numbers.forEach(num => total += num)
 return total;
}
function addAll2(...numbers) {
 return numbers.reduce((acc, cur) => acc + cur);
}

// console.log(addAll(2, 5, 6, 7, 5));
// console.log(addAll1(2, 5, 6, 7, 5))
// console.log(addAll2(2, 5, 6, 7, 5))

// challenge 2: Sum all cardio
// pass in a number to look up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
function sumAllPrimes(num) {
 let total = 0;
 function checkForPrime(i) {
  for (let j = 2; j < i; j++){
   if (i % j === 0) {
    return false;
   }
  }
  return true;
 }

 for (let i = 2; i <= num; i++){
  if (checkForPrime(i)) {   
   total += i;
  }
 }
 return total;
}

// console.log(sumAllPrimes(100))

/* Challenge 3: seek and destroy */

// seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6); ==> [3,4,'hello']

function seekAndDestroy(arr) {
 const args = Array.from(arguments);
 function filterArr(arr) {
  return args.indexOf(arr) === -1;
 }
 return arr.filter(filterArr);
}
function seekAndDestroy1(arr,...rest) {
 return arr.filter(val => !rest.includes(val))
}

// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));
// console.log(seekAndDestroy1([2, 3, 4, 6, 6, 'hello'], 2, 6));


function sortByHeight(arr) {
 const arr1 = [];
 const arr2 = [];
 arr.forEach((val,i) => {
  if (val === -1) {
   arr1.push(i);
  }
  else {
   arr2.push(val);
  }
 })
 
 const sortArr = arr2.sort((a, b) => a - b);
 arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));
 return sortArr;
}


// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

/* challenge missingletters */

function missingLetters(str) {
 let compare = str.charCodeAt(0);
 let missing;
 str.split('').map((char, i) => {
  if (str.charCodeAt(i) == compare) {
   ++compare
  }
  else {
   missing = String.fromCharCode(compare)
  }
 })
 return missing;
}
// console.log(missingLetters('abce'));
// console.log(missingLetters('abcdefghklmno'));
// console.log(missingLetters('abcdefghijklmnopqrstuwxyz'));

// challenge : Even and odd sums in an array

function evenOddSums(arr) {
 let evenSum = 0;
 let oddSum = 0;
 arr.forEach(num => num % 2 === 0 ? (evenSum += num) : (oddSum += num));
 return [evenSum, oddSum];
}

console.log(evenOddSums([50,60,60,45,71]));