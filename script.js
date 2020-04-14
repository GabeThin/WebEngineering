setTime();

function setTime() {
  console.log(location.search);
  let now = new Date();
  let birthday = new Date(location.search);
  let millis = birthday.getTime() - now.getTime();
  let timeDistance = birthday.getTime() - now.getTime();
  let seconds = Math.floor((timeDistance % 60000) / 1000);
  let mins = Math.floor((timeDistance % (3600000)) / 60000);
  let hrs = Math.floor((timeDistance % (86400000)) / 3600000);
  let days = Math.floor(timeDistance / 86400000);

  if (seconds >= 10) {
    document.getElementById("time").innerHTML = days + " days and " + hrs + ":" + mins + ":" + seconds;
  }
  if (seconds <= 10) {
    document.getElementById("time").innerHTML = days + " days and " + hrs + ":" + mins + ":0" + seconds;
  }
  if (mins >= 10) {
    document.getElementById("time").innerHTML = days + " days and " + hrs + ":" + mins + ":" + seconds;
  }
  if (mins <= 10) {
    document.getElementById("time").innerHTML = days + " days and " + hrs + ":0" + mins + ":" + seconds;
  }
  if (hrs >= 10) {
    document.getElementById("time").innerHTML = days + " days and " + hrs + ":" + mins + ":" + seconds;
  }
  if (hrs <= 10) {
    document.getElementById("time").innerHTML = days + "days and 0" + hrs + ":" + mins + ":" + seconds;
  }
  if (mins <= 10 && seconds <= 10) {
    document.getElementById("time").innerHTML = days + " days and " + hrs + ":0" + mins + ":0" + seconds;
  }
  if (mins <= 10 && hrs <= 10) {
    document.getElementById("time").innerHTML = days + "days and 0" + hrs + ":0" + mins + ":" + seconds;
  }
  if (hrs <= 10 && seconds <= 10) {
    document.getElementById("time").innerHTML = days + "days and 0" + hrs + ":" + mins + ":0" + seconds;
  }
  if (hrs <= 10 && mins <= 10 && seconds <= 10) {
    document.getElementById("time").innerHTML = days + "days and 0" + hrs + ":0" + mins + ":0" + seconds;
  }
  else if (hrs >= 10 && mins >= 10 && seconds >= 10){
    document.getElementById("time").innerHTML = days + " days and " + hrs + ":" + mins + ":" + seconds;
  }
}

setInterval(setTime, 1000);
