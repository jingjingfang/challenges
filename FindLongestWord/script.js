//3 different ways to find the Longest Word in a String

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word=>word.length));
  
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


// function findLongestWordLength(str) {
//   let words= str.split(" ");
//   let maxLength=0;
//   for (let i=0; i<words.length; i++) {
//     if (words[i].length>maxLength) {
//       maxLength=words[i].length;
//     }
       
//   }
//   return maxLength;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");



// //return the longest word
// function findLongestWordLength(str) {
//   let words= str.split(" ");
//   let longestWord=words[0];
//   for (let i=0; i<words.length;i++) {
//     if (words[i].length>longestWord.length) {
//       longestWord=words[i];
//     }
       
//   }
//   return longestWord;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

