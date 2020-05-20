//Begin the login process and set up the listener for new messages
login(start, recieveMessage);

var displayedMessages = document.getElementById("display-messages");
displayedMessages.innerHTML = "";

//This function runs after you have logged in. Your user information is passed to you in the variable 'user'
function start(user) {
	console.log(user);
	document.getElementById("send-message").addEventListener("click", send);
}

//This function runs every time you recieve a message. It will run for every message already in the database.
//The message information is passed to you in the variable 'message'
function recieveMessage(message) {

	var time = new Date(message.timestamp);
	var month = time.getMonth() + 1;
	var mins = time.getMinutes();
	var hours = time.getHours();

	if (mins.toString().length == 1) {
		mins = "0" + mins;
	}

	var timeDisplay = month + "/" + time.getDate() + ", " + hours + ":" + mins;
	var nameAndTime = document.createElement("p");
	nameAndTime.className = "name-and-time"
	nameAndTime.innerHTML = "<b>" + message.name + " - " + timeDisplay + "</b>"


	var text = document.createElement("p");
	text.className = "text";
	text.innerHTML = message.content + "<br><br>";

	var fullMessage = document.createElement("div");
	fullMessage.className = "full-message";

	fullMessage.append(nameAndTime, text);
	displayedMessages.prepend(fullMessage);
}

//The sendMessage('text') function will send a message from you to the database.
function send() {
	var message = document.getElementById("message").value;
	sendMessage(message);
}
