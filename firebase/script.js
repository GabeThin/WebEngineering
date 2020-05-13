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
  makeSandwich(id, bread, meat, cheese, condiments, other);
});

//Writes information to the database
function makeSandwich(id, bread, meat, condiments, cheese, other) {
  database.ref('users/').push({
    name: id,
    bread: bread,
    meat: meat,
    condiments: condiments,
    cheese: cheese,
    other: other
  });
}

firebase.database().ref('/').on('value', function(snapshot) {
  //Get the value from the database snapshot
  var users = snapshot.val().users;
  //Get the location from html
  var ul = document.getElementById("output-list");
  //Clear the html so we don't duplicate everything
  ul.innerHTML = "";
  //Loop through the value and add each one
  for (var i in users) {
    var name = document.createElement("p");
    name.innerHTML = users[i].name + "'s sandwich:"

    var list1 = document.createElement("li");
    list1.innerHTML = users[i].bread;
    var list2 = document.createElement("li");
    list2.innerHTML = users[i].meat;
    var list3 = document.createElement("li");
    list3.innerHTML = users[i].condiments;
    var list4 = document.createElement("li");
    list4.innerHTML = users[i].cheese;
    var list5 = document.createElement("li");
    list5.innerHTML = users[i].other;
    ul.append(name);
    ul.append(list1);
    ul.append(list2);
    ul.append(list3);
    ul.append(list4);
    ul.append(list5);
    console.log(list3);
}
});
