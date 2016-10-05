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
  var cleanedStr = str.replace(/[^A-Za-z0-9]/g, '');
  if(str.toLowerCase().split("").reverse().join("") === str.toLowerCase()){
    return true;
  } else {
    return false;
  }
}

palindrome("eye");

// This version return the longest string
function findLongestWord(str) {
  var stringArr = str.split(" ");
  var checkAgainst = 0;
  var longestWord;
  for(var i = 0;i < stringArr.length; i++){
    if (stringArr[i].length > checkAgainst) {
      checkAgainst = stringArr[i].length;
      longestWord = stringArr[i];
    }
  }
  return longestWord;
}

//this version of the function returns the longestword as a int
function findLongestWord(str) {
  var stringArr = str.split(" ");
  var caseCheck = 0;
  for(var i = 0;i < stringArr.length; i++){
    if(stringArr[i].length > caseCheck){
      caseCheck = stringArr[i].length;
    }
  }
  return caseCheck;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

function titleCase(str) {
  var newStrArr = str.split("");
  var result;
  for(var i = 0; i < newStrArr.length; i++){
    if(newStrArr[i][0] === newStrArr[i][0].toLowerCase){
      result = newStrArr[i][0].toUpperCase() + newStrArr[i].slice(1);
    }
  }
  return result
}

function titleCase(str) {
  var newStrArr = str.split(" ");
  var result = [];
  for(var i = 0; i < newStrArr.length; i++){
    if(newStrArr[i][0].toLowerCase()){
      result.push(newStrArr[i][0].toUpperCase() + newStrArr[i].slice(1).toLowerCase());
    }
  }
  return result.join(" ");
}

titleCase("I'm a little tea pot.")


function largestOfFour(arr) {
  // You can do this!
  var newArr = []
  for(var i = 0; i < arr.length; i++){
    newArr.push(Math.max.apply(Math, arr[i]));
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if(str.substring(str.length - target.length) === target){
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");


function repeatStringNumTimes(str, num) {
  var newStr = "";
  for(var i = 0; i < num; i++){
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

function chunkArrayInGroups(arr, size) {
  finishedArr = [];
  for (var i=0; i<arr.length; i+=size) {
    finishedArr.push(arr.slice(i,i+size));
  }
  return finishedArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArr = arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);

function mutation(arr) {
  frstElement = arr[0].toLowerCase();
  workArr = [];
  for(var i=0;i<arr[1].length;i++){
    workArr.push(frstElement.includes(arr[1][i].toLowerCase()));
  }
  if(workArr.includes(false)){
    return !workArr.includes(false);
  } else {
    return true;
  }
}

mutation(["hello", "hey"])

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isThisTrue(item){
    if(Boolean(item).toString() === "true"){
      return item;
    }
  }
  return arr.filter(isThisTrue);
}

bouncer([7, "ate", "", false, 9]);
