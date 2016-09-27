function factorialize(num) {
  var newNum = num
  if(num === 0){
    return 1;
  }
  while(num != 1){
    num--;
    newNum *= num;
  }
  return newNum;
}

factorialize(5);

function palindrome(str) {
  if(str.toLowerCase().split("").reverse().join("") === str){
    return true;
  } else {
    return false
  }
}

palindrome("eye");
