/*function audio1() 
{
    mySound = new sound("heartwave.mp3");
    mySound.play();
}

function sound(src) 
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function(){
        this.sound.play();
    }
}

function start()
{
    alert("Audio Engaged");
    audio1();
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop()
{
    alert("Audio Disengaged");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;   
}*/


/*above is the code we bult in class that we never got to work, below is me poking it with a stick until i got it to work*/

var mySound; // Define mySound as a global variable


function sound(src) {
    // Create a new audio element and assign it to the 'sound' property of 'this'
    this.sound = document.createElement("audio");
    // Set the 'src' attribute of the audio element to the value of the 'src' parameter
    this.sound.src = src;
    // Define a 'play' function as a property of 'this' that plays the audio element
    this.play = function() {
      this.sound.play();
    }
  }
  function audio1() {
    // Create a new Audio object and assign it to the 'mySound' variable
    mySound = new Audio("heartwave.mp3");
    // Play the audio
    mySound.play();
  }
  function start() {
    // Display an alert to indicate that audio has been engaged
    alert("Audio Engaged");
    // Call the 'audio1' function to start playing the audio
    audio1();
    // Disable the 'startButton'
    document.getElementById("startButton").disabled = true;
    // Enable the 'stopButton'
    document.getElementById("stopButton").disabled = false;
  }
  function stop() {
    // Display an alert to indicate that audio has been disengaged
    alert("Audio Disengaged");
    // Pause the audio
    mySound.pause();
    // Set the audio playback time to the beginning
    mySound.currentTime = 0;
    // Disable the 'stopButton'
    document.getElementById("stopButton").disabled = true;
    // Enable the 'startButton'
    document.getElementById("startButton").disabled = false;
  }
        
