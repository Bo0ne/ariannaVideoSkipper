const mp3_url = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3';
// Find the 'Avanti' button
nav = document.querySelector('.course-navigation');
const nextButton = nav.getElementsByTagName('button')[1];
// Find the video element
var video = document.querySelector('.fp-engine');

// Check if the video has changed and re-run the program.
function videoChanged () {
	try {
		// Find the new video element
		newVid = document.querySelector('.fp-engine');
		if (newVid == null) throw 'Cannot find video!';
		// Check if the source of the video has changed
		if (video.getAttribute("src") != newVid.getAttribute("src")) {
			console.log("Video changed. Waiting for new video to end.");
			video = newVid;
			performAction();
		}
	} catch (ignored) {
		(new Audio(mp3_url)).play();
		console.log('Cannot find a video! Refresh the page if you want to stop the program.');
	}
}

// Main function
function performAction () {
	video.addEventListener('ended', () => {
		console.log('Video ended! Clicking button.')
		nextButton.click()
		}, { once: true })
};

// Check every minute if the video has changed.
setInterval(videoChanged, 10000);

performAction();
