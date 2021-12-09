// plugin.js to use with index.html file.
// Get and display current time
function dateCalcNow() {
	var d = new Date();
	// document.getElementById("nowTime").innerHTML = "Time : " + d.getTime();
	// document.getElementById("nowTime").innerHTML = "Time : " + d.getHours() + ":" + d.getMinutes() + d.getSeconds();
	var timeStringNew = timeString(d);
	document.getElementById("nowTime").innerHTML = "Time : " + timeStringNew;
	document.getElementById("nowMonth").innerHTML = "Month : " + d.getMonth();
	document.getElementById("nowDay").innerHTML = "Day : " + d.getDate();
	document.getElementById("nowYear").innerHTML = "Year : " + d.getFullYear();
}

//Computer Time Until an Event
function dateCalcDiff() {
	var d = new Date();
}

// Function to create a time in the hh:mm:ss format given a date value.
function timeString(rawTime) {
	// Add a 0 if Hours < 10 (Hours less than 10)
	if (rawTime.getHours() < 10) {
		timeGood = "0" + rawTime.getHours().toString() + ":";
	} 	else {
			timeGood = rawTime.getHours().toString() + ":";
		}
		
		
	// Add a 0 if Minutes < 10 (Hours less than 10)
	if (rawTime.getMinutes() < 10) {
		timeGood = timeGood + "0" + rawTime.getMinutes().toString() + ":";
	} 	else {
			timeGood = timeGood + rawTime.getMinutes().toString() + ":";
		}
	// Add a 0 if Seconds < 10 (Hours less than 10)
	if (rawTime.getSeconds() < 10) {
		timeGood = timeGood + "0" + rawTime.getSeconds().toString();
	} 	else {
			timeGood = timeGood + rawTime.getSeconds().toString();
		}
	// Return to place called with time in a HH:MM:SS String
	return timeGood;
	
}