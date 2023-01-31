const nav = document.querySelector('.course-navigation');
const nextButton = nav.getElementsByTagName('button')[1];

const convertTime = (string) => {
  spl = string.split(':');
  var duration = Number(spl[0]) * 60 + Number(spl[1]);
  return duration;
} 

const performAction = () => {
  durationElement = document.querySelector('.fp-duration');
  elapsedElement = document.querySelector('.fp-elapsed');
  durationtxt = durationElement.innerText;
  elapsedtxt = elapsedElement.innerText;
  
  console.log('Found a ' + durationtxt + ' long video. Resuming playing at '+ elapsedtxt);
  
  var duration = convertTime(durationtxt);
  var elapsed = convertTime(elapsedtxt);
  var waitTime = duration - elapsed;
  console.log('Setting a timer for ' + waitTime + ' seconds.');

  setTimeout(() => {
    console.log('Timer done! Clicking button.');
    nextButton.click();
  }, waitTime * 1000);
};

nextButton.addEventListener("click", () => {setTimeout(performAction, 5000);})
performAction();