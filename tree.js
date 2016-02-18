// -------User input variables

var char = document.getElementById('char') 
var height = document.getElementById('height')
var btn = document.getElementById('btn')

btn.addEventListener("click", getValues);

function getValues () {
  var cv = char.value
  var hv = height.value
  checkInput(cv, hv);
}

function checkInput (cv, hv) {
  console.log(char, height);
  if (!cv || !hv) {
    alert("Please fill out both fields.")
  } else {
    buildObj(cv, hv);
  }
}


function buildObj(cv, hv) {
  var treeObj = {
  c: cv,
  h: hv
 }
 growTree(treeObj);
}

function growTree(Obj) {
 var h = Obj.h;
for (var i = 0; i < Obj.h; i++) {
  var spaces = (h-1) - i;
  var numChar = 2 * i + 1;

  console.log(" ".repeat(spaces) + Obj.c.repeat(numChar));
 }
}




// ----*----
// ---***---
// --*****--
// -*******-
// *********


