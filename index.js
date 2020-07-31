// Code your solution here!

function printString(str) {
  console.log(str[0])
  if (str.length > 1) {
    printString(str.substring(1))
  } else {
    return true;
  }
}


function reverseString(str) {
  if (str === "") {
    return ""
  } else {
    return reverseString(str.substring(1)) + str[0]
  }
}


function isPalindrome(str) {
  if (str.length === 1 || str === "") return true;
  
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1))
  } else {
    return false
  }
  
  return true;
}

// add up to and including the element at the given index
function addUpTo(arr, index) {
  
}