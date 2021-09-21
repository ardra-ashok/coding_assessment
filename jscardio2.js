/* find the longest word in a string */
function longestWord(str) {
  const wordArr = str.toLowerCase().match(/[a-z0-9]+/g)  // or str.split(' ');
  console.log(wordArr)
  const sorted = wordArr.sort(function (a, b) {
    return b.length - a.length
  })

  const longestWordArr = sorted.filter(function (word) {
    return word.length === sorted[0].length
  })

  if (longestWordArr.length === 1) {
    return longestWordArr[0]
  } else {
    return longestWordArr
  }
}

// console.log(longestWord('hi there i am ardra'));

/* split an array in to a given number array or array chunking */

function chunkArr(arr, len) {
  const chunkedArr = [];
 let i = 0;
 while (i < arr.length) {
  chunkedArr.push(arr.slice(i, i + len));
  i += len;
 }
 return chunkedArr; 


}

// console.log(chunkArr([1,2,3,4,5,6,7,8,9],3));

function flattenArray(arrays) {
 // Solution1
 return arrays.reduce(function (a, b) {
  return a.concat(b);
 })
}

// console.log(flattenArray([[1, 2,], [3, 4], [5, 6], [7, 8]]));

// checkinh 
function isAnagram(str1, str2) {
 return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
 let str1 = str
  .replace(/[^\w]/g, '')
  .toLowerCase()
  .split('')
  .sort()
  .join('');
 return str1;
}

//console.log(isAnagram('elbow', 'below'));
// console.log(isAnagram('dormitory', 'dirty room77'));

// challenge 5: Letter Changes
// Change every letter of the string to the one that follows it and capitalize the vowels.
function letterChanges(str) {
 let newStr = str.replace(/[a-z]/gi, function (char) {
  if (char === 'z' | char === 'Z') {
   return 'a';
  }
  else {
   return String.fromCharCode(char.charCodeAt() + 1);
  } 
 })
 newStr = newStr.replace(/a|e|i|o|u/gi, function (vowel) {
  return vowel.toUpperCase();
 })
 return newStr;
}

console.log(letterChanges('hello therez'));