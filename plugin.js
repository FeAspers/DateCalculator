// plugin.js to use with index.html file.
// Get and display current time
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function dateCalcNow() {
	var d = new Date();
	// document.getElementById("nowTime").innerHTML = "Time : " + d.getTime();
	// document.getElementById("nowTime").innerHTML = "Time : " + d.getHours() + ":" + d.getMinutes() + d.getSeconds();
	var timeStringNew = timeString(d);
	document.getElementById("nowTime").innerHTML = "Time : " + timeStringNew;
	document.getElementById("nowMonth").innerHTML = "Month : " + month[d.getMonth()];
	document.getElementById("nowDay").innerHTML = "Day : " + d.getDate();
	document.getElementById("nowYear").innerHTML = "Year : " + d.getFullYear();
}

//Computer Time Until an Event
function dateCalcDiff() {
	var d = new Date();
	var myDate = new Date(2022, 9, 28, 12, 0, 1);
	document.getElementById("nowDate").innerHTML = '<h3 style="border:2px solid Blue;">' + "Target Date is : " + myDate.toString() + "</h3>";
	// There are 1,000 milliseconds in a second
	const millisecMinute = 60000;
	const millisecHour = 3600000;
	const millisecDay = 86400000;
	var timeDiff = myDate - d;
	var daysDiff = Math.floor(timeDiff / millisecDay);
	var hoursDiff = Math.floor((timeDiff % millisecDay) / millisecHour);
	var minutesDiff = Math.floor((timeDiff % millisecHour) / millisecMinute);
	var secondsDiff = Math.floor((timeDiff % millisecMinute) / 1000 );
	
	document.getElementById("nowTime").innerHTML = "Days Remaining : " + "&nbsp &nbsp" + daysDiff.toString();
	document.getElementById("nowMonth").innerHTML = "Hours Remaining : " + "&nbsp &nbsp" + hoursDiff.toString();
	document.getElementById("nowDay").innerHTML = "Minutes Remaining : " + "&nbsp &nbsp" + minutesDiff.toString();
	document.getElementById("nowYear").innerHTML = "Seconds Remaining : " + "&nbsp &nbsp" + secondsDiff.toString();
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
