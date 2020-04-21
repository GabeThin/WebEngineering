let button = document.getElementById("encodeButton");
button.addEventListener("click", encode);


// function rev() {
//   let string = document.getElementById("message").value;
//   let splitString = string.split("");
//
//   let reverseArray = splitString.reverse();
//   let reverseString = reverseArray.join("");
//
//   document.getElementById("encoded").innerHTML = reverseString;
//
// }

function encode() {
  let string = document.getElementById("message").value;
  let encodedString = "";
  let key = parseInt(document.getElementById("key").value);

  for (var i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i) + key;

    if (string[i] == string[i].toUpperCase()) {
      if(string.charCodeAt(i) + key > 90) {
        charCode -= 26;
      }
    }

    if (string[i] == string[i].toLowerCase()){
      if(string.charCodeAt(i) + key > 122) {
        charCode -= 26;
      }
    }

    encodedString += String.fromCharCode(charCode);
  }

  document.getElementById("encoded").innerHTML = encodedString;
}
