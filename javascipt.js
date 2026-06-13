let a = prompt("enter your age");
if (a < 0) {
  alert("enter valid age");
} else if (a > 0 && a < 18) {
  alert("you can't drive");
} else {
  alert("you are eligible for driving test");
}

let b = prompt("enter your age");
b = parseInt(b);
switch (b) {
  case 1:
    alert("you can drive");
    break;
  case 2:
    alert("you are not allowed");
    break;
  case 18:
    alert("you are allowed");
    break;
  default:
    alert("invalid");
}
