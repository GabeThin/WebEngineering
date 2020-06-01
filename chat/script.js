//Begin the login process and set up the listener for new messages
login(start, recieveMessage);

var displayedMessages = document.getElementById("display-messages");
displayedMessages.innerHTML = "";
var users = {};

var previousDate = {};

//This function runs after you have logged in. Your user information is passed to you in the variable 'user'
function start(user) {
	console.log(user);
	document.getElementById("send-message").addEventListener("click", send);
	console.log(document.cookie);
	users = JSON.parse(document.cookie);
	console.log(users);
}

//This function runs every time you recieve a message. It will run for every message already in the database.
//The message information is passed to you in the variable 'message'
function recieveMessage(message) {

	var date = new Date(message.timestamp);
	var year = date.getYear();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var mins = date.getMinutes();
	var hours = date.getHours();

	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	if (mins.toString().length == 1) {
		mins = "0" + mins;
	}

	if(users[message.uid] == undefined) {
		users[message.uid] = getRandomColor();
	}

	document.cookie = JSON.stringify(users);

	var time = hours + ":" + mins;

	var timeDisplay = document.createElement("p");
	timeDisplay.className = "time";
	timeDisplay.innerHTML = time;

	var name = document.createElement("p");
	name.className = "name";
	name.innerHTML = "<b>" + message.name + "</b>";

	var nameAndTime = document.createElement("p");
	nameAndTime.className = "name-and-time";
	nameAndTime.style.color = users[message.uid];
	nameAndTime.innerHTML = name.innerHTML + " " + timeDisplay.innerHTML;

	var text = document.createElement("p");
	text.className = "text";
	text.innerText = message.content;

	var fullMessage = document.createElement("p");
	fullMessage.className = "full-message";

	fullMessage.append(nameAndTime, text);

	if (previousDate.day != day || previousDate.month != month || previousDate.year != year) {

		previousDate.day = day;
		previousDate.month = month;
		previousDate.year = year;

		var displayMonthDate = document.createElement("p");
		var monthDate = months[date.getMonth()] + " " + date.getDate() + ", 2020";

		displayMonthDate.innerText = "---------------------------------------------------------    " + monthDate + "   ---------------------------------------------------------";

		fullMessage.append(displayMonthDate, nameAndTime, text);
		displayedMessages.append(fullMessage);
		displayedMessages.scrollTop = displayedMessages.scrollHeight;
	}
}

//The sendMessage('text') function will send a message from you to the database.
function send() {
	var message = document.getElementById("message").value;
	sendMessage(message);
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';

	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * letters.length)];
	}

	return color;
}
