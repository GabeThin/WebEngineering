let button = document.getElementById("encodeButton");
button.addEventListener("click", rev);


function rev() {
  let string = document.getElementById("message").value;
  let splitString = string.split("");

  let reverseArray = splitString.reverse();
  let reverseString = reverseArray.join("");

  document.getElementById("encoded").innerHTML = reverseString;

}
