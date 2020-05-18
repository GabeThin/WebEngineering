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
	var a = [];
	a[0] = message.content;
	// document.getElementById("display-messages").innerHTML += "<b>" + message.name + " - " + month + "/" + time.getDate() + ", " + time.getHours() + ":" + time.getMinutes() + "</b><br>" + a[0] + "<br><br>";

	roomRef = database.ref('rooms/' + "_" + '/messages');
  roomRef.on('child_added', function(snapshot) {
    // callbackData(snapshot.val());
		var time = new Date(snapshot.val().timestamp);
		var month = time.getMonth() + 1;
		var timeDisplay = month + "/" + time.getDate() + ", " + time.getHours() + ":" + time.getMinutes()
		var text = snapshot.val().content;
		var split = text.split();
		// var testText = reverse.join();
		console.log(testText);
  });
}

//The sendMessage('text') function will send a message from you to the database.
function send() {
	var message = document.getElementById("message").value;
	sendMessage(message);
}
