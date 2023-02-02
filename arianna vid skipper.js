// Find the 'Avanti' button
nav = document.querySelector('.course-navigation');
const nextButton = nav.getElementsByTagName('button')[1];
// Find the video element
var video = document.querySelector('.fp-engine');

// Convert time from HH:MM into seconds
const convertTime = (string) => {
	spl = string.split(':');
	var duration = Number(spl[0]) * 60 + Number(spl[1]);
	return duration;
} 

// Check if the video has changed and re-run the program.
const videoChanged = () => {
	// Find the new video element
	newVid = document.querySelector('.fp-engine');
	// Check if the source of the video has changed
	if (video.getAttribute("src") != newVid.getAttribute("src")) {
		console.log("Video changed. Re-running program.");
		video = newVid;
		performAction();
	}
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
		console.log(waitTime + 's timer done! Clicking button.');
		nextButton.click();
	}, waitTime * 1000);
};

// Check if the video has changed every minute.
setInterval(videoChanged, 60000);

performAction();
