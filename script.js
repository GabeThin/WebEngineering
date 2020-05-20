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

	display = document.getElementById("display");
	display.innerHTML += message.content + "<br>";
}

//The sendMessage('text') function will send a message from you to the database.
function send() {
	var message = document.getElementById("message").value;
	sendMessage(message);
}
