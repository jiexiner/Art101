/**
* index.js - Functions
* Author:    Jing Li
* Created:   05.04.2023
**/
function myusername() {
  var userName = window.prompt("Hi, Please tell me your name");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

// Output
document.writeln("I fixed your name: ",
  myusername(), "</br>");