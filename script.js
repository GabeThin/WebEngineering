let button = document.getElementById("submitButton");
button.addEventListener("click", getWords);


function getWords() {
    var adj1 = document.getElementById("adj1").value;
    var noun1 = document.getElementById("noun1").value;
    var verb1 = document.getElementById("verb1").value;
    var noun2 = document.getElementById("noun2").value;
    var verb2 = document.getElementById("verb2").value;
    var verb3 = document.getElementById("verb3").value;
    var verb4 = document.getElementById("verb4").value;
    var adj2 = document.getElementById("adj2").value;
    var pluralnoun1 = document.getElementById("pluralnoun1").value;

    document.getElementById("results").innerHTML = "Ever since my " + adj1 + " " + noun1 + " " + verb1 + ", my " + noun2 + " hasn’t been the same. I miss when we would go out and " + verb2 + ". Now I just stay in my house " + verb3 + ", doing nothing all day. I just wish I could " + verb4 + " back to those " + adj2 + " old days again, when we didn’t have to worry about " + pluralnoun1 + ".";
    document.getElementById("results").style.display = "block";
    document.getElementById("results").style.textalign = "center";

    console.log("fjdklsf");
  }
