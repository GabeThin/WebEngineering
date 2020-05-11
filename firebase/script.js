//This is specific to my firebase database, you'll need to put in your own information
var firebaseConfig = {
  apiKey: "AIzaSyBAsbO9qORJMWHFMLCg33GNZ2qLnT3evEg",
  authDomain: "webengineering-326e6.firebaseapp.com",
  databaseURL: "https://webengineering-326e6.firebaseio.com",
  projectId: "webengineering-326e6",
  storageBucket: "webengineering-326e6.appspot.com",
  messagingSenderId: "356196296267",
  appId: "1:356196296267:web:2ff4070a69faaaa1d24fce",
  measurementId: "G-TYJBFDG4C0"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

document.getElementById("submit").addEventListener("click", function() {
  var id = document.getElementById("id").value;
  var bread = document.getElementById("bread").value;
  var meat = document.getElementById("meat").value;
  var cheese = document.getElementById("cheese").value;
  var condiments = document.getElementById("condiments").value;
  var other = document.getElementById("other").value;
  makeSandwich(id, bread, meat, cheese, other);
});

//Writes information to the database
function makeSandwich(id, bread, meat, cheese, other) {
  database.ref('users/' + id).set({
    name: id,
    bread: bread,
    meat: meat,
    condiments: condiments,
    cheese: cheese,
    other: other
  });

  console.log("jfkld;sa");
}
