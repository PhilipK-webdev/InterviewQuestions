function isPalindrom(string) {

  string = string.slice("");
  if (string.length === 1) {
    return true;
  }

  for (let i = 0; i < string.length; i++) {
    let charRight = string[string.length - 1 - i];
    let charLeft = string[i];
    if (charLeft !== charRight) {
      return false;
    }
  }
  return true;
}

const result = isPalindrom("philihp");
console.log(result);

// var x =  5;

// function foo(){
//   var x = 7;
//   console.log(x);
//   function goo(){
//     x = 10;
//     console.log(x);
//   }
//   console.log(x);
//   goo();
// }

// console.log(x)
// foo();
// console.log(x)
