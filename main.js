/*

Directions: 
Convert an array of integers into an array of strings representing the phonetic equivalent of the integer.

Example: 
Given an array: [3, 25, 209], print "Three,TwoFive,TwoZeroNine" into stdout. 
Given an array: [10, 300, 5], print "OneZero, ThreeZeroZero,Five" into stdout. 


*/

function convertArr(arr) {
  let numMap = new Map();

  numMap.set('1', 'One');
  numMap.set('2', 'Two');
  numMap.set('3', 'Three');
  numMap.set('4', 'Four');
  numMap.set('5', 'Five');
  numMap.set('6', 'Six');
  numMap.set('7', 'Seven');
  numMap.set('8', 'Eight');
  numMap.set('9', 'Nine');
  numMap.set('0', 'Zero');

  let phoneticString = '';

  arr.forEach((num) => {
    let numString = num.toString();
    for (let i = 0; i < numString.length; i++) {
      phoneticString += numMap.get(numString[i]);
    }
    phoneticString += ',';
  });

  return phoneticString.slice(0, -1);
}

console.log(convertArr([10, 300, 5]));
