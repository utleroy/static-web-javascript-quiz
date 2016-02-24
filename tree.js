// ------variables to identify text fields and submit btn in html

var char = document.getElementById('char') 
var height = document.getElementById('height')
var btn = document.getElementById('btn')


//-------function to obtain the user imput values
function getValues () {
  var cv = char.value
  var hv = height.value
  checkInput(cv, hv);
}
//-------function to validate the fields are entered fully and correctly
function checkInput (cv, hv) {
  console.log(char, height);
  if (!cv || !hv) {
    alert("Please fill out both fields.")
  } else {
    buildObj(cv, hv);
  }
}

//-------function to build the program
function buildObj(cv, hv) {
  var treeObj = {
  c: cv,
  h: hv
 }
 growTree(treeObj);
}

//-------function to execute the program
function growTree(Obj) {
 var h = Obj.h;
for (var i = 0; i < Obj.h; i++) {
  var spaces = (h-1) - i;
  var numChar = 2 * i + 1;

  console.log(" ".repeat(spaces) + Obj.c.repeat(numChar));
 }
}



//-------event listener (listens for btn click)
btn.addEventListener("click", getValues);












// ----*----
// ---***---
// --*****--
// -*******-
// *********


// Initial algebra
// 2X + 1


