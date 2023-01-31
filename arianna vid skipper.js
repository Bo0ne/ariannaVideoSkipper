// Find the 'Avanti' button
const nav = document.querySelector('.course-navigation');
const nextButton = nav.getElementsByTagName('button')[1];

// Convert time from HH:MM into seconds
const convertTime = (string) => {
	spl = string.split(':');
	var duration = Number(spl[0]) * 60 + Number(spl[1]);
	return duration;
} 

// Main function
const performAction = () => {
	// Find the duration on the video
	durationElement = document.querySelector('.fp-duration');
	durationtxt = durationElement.innerText;
	var duration = convertTime(durationtxt);
	
	// Find the elapsed time of the video
	elapsedElement = document.querySelector('.fp-elapsed');
	elapsedtxt = elapsedElement.innerText;
	var elapsed = convertTime(elapsedtxt);
	
	console.log('Found a ' + durationtxt + ' long video. Resuming playing at '+ elapsedtxt);

	// Find for how long to set the timer for
	var waitTime = duration - elapsed;
	console.log('Setting a timer for ' + waitTime + ' seconds.');

	setTimeout(() => {
		console.log('Timer done! Clicking button.');
		nextButton.click();
	}, waitTime * 1000);
};

// Rerun performAction every time the 'Avanti' button is clicked.
nextButton.addEventListener("click", () => {setTimeout(performAction, 5000);})

performAction();
