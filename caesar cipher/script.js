let button = document.getElementById("encodeButton");
button.addEventListener("click", encode);

function encode() {
  let string = document.getElementById("message").value;
  let encodedString = "";
  let key = parseInt(document.getElementById("key").value);

  for (var i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i) + key;

    if (string[i] == string[i].toUpperCase()) {
      if (string.charCodeAt(i) + key > 90) {
        charCode -= 26;
      }
    }

    if (string[i] == string[i].toLowerCase()){
      if (string.charCodeAt(i) + key > 122) {
        charCode -= 26;
      }
    }

    if (string.charCodeAt(i) == 32 || string.charCodeAt(i) == 44 || string.charCodeAt(i) == 46) {
        charCode -= key;
      }

    if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
      if (string.charCodeAt(i) + key > 57) {
        charCode -= 10;
      }
    }

    console.log(string.charCodeAt(i));

    encodedString += String.fromCharCode(charCode);
  }

  document.getElementById("encoded").innerHTML = encodedString;
}
