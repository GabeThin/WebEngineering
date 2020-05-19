//Begin the login process and set up the listener for new messages
login(start, recieveMessage);

//This function runs after you have logged in. Your user information is passed to you in the variable 'user'
function start(user) {
	console.log(user);
	document.getElementById("send-message").addEventListener("click", send);
}

//This function runs every time you recieve a message. It will run for every message already in the database.
//The message information is passed to you in the variable 'message'
function recieveMessage(message) {
	console.log(message);

	// var time = new Date(message.timestamp);
	var time = new Date(message.timestamp);
	var month = time.getMonth() + 1;
	var timeDisplay = month + "/" + time.getDate() + ", " + time.getHours() + ":" + time.getMinutes();
	document.getElementById("display-messages").innerHTML += "<b>" + message.name + " - " + month + "/" + time.getDate() + ", " + time.getHours() + ":" + time.getMinutes() + "</b><br>" + message.content + "<br><br>";

	roomRef = database.ref('rooms/_/');
  roomRef.on('value', function(snapshot) {
		var time = new Date(snapshot.val().timestamp);
		var month = time.getMonth() + 1;
		var timeDisplay = month + "/" + time.getDate() + ", " + time.getHours() + ":" + time.getMinutes();
		var text = snapshot.val().content;
		var users = snapshot.val().messages;
		console.log(users);

		// var displayedMessages = document.getElementById("display-messages");
		// displayedMessages.innerHTML = "<b>" + timeDisplay + "</b><br>" + message.content;

		for (var i in users) {
			var text1 = users[i].content;
			console.log(text1);
			// displayedMessages.innerHTML = "<b>" + name + " - " + timeDisplay + "</b><br>" + joinText;
			// console.log(text[i]);
		}
  });
}

//The sendMessage('text') function will send a message from you to the database.
function send() {
	var message = document.getElementById("message").value;
	sendMessage(message);
}
