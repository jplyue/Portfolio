(function () {
  const startButton = document.querySelector('#start-testing');

  startButton.addEventListener('click', function () {
    countdownTimer();
    callCamera();
    callVoice();
  });

  function countdownTimer() {
    // Set the duration of the countdown in seconds
    let duration = 600;

    // Get the HTML element where the countdown will be displayed
    const countdownElement = document.getElementById('countdown');

    // Start the countdown
    let timer = setInterval(function () {
      // Calculate the minutes and seconds remaining
      let minutes = Math.floor(duration / 60);
      let seconds = duration % 60;

      // Format the minutes and seconds as a string with leading zeros if necessary
      let minutesString = minutes.toString().padStart(2, '0');
      let secondsString = seconds.toString().padStart(2, '0');

      // Update the countdown element with the new time
      countdownElement.innerHTML = `${minutesString}:${secondsString}`;

      // Decrease the duration by 1 second
      duration--;

      // Stop the timer when the countdown reaches 0
      if (duration < 0) {
        clearInterval(timer);
        countdownElement.innerHTML = '00:00';
        alert("Time's up!");
      }
    }, 1000);
  }

  function callCamera() {
    // camera
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        const videoElement = document.querySelector('#camera-video');
        videoElement.srcObject = stream;
        videoElement.play();
      })
      .catch(function (error) {
        console.log("Error accessing user's camera: ", error);
      });
  }

  function callVoice() {
    // voice
    const statusElement = document.getElementById('status');

    // Generate a random number and update the HTML element
    function generateRandomNumber() {
      const number = Math.floor(Math.random() * 151);
      const normalizedNumber = Math.max(0, Math.min(1, (number - 0) / (150 - 0)));
      document.querySelector('#camera-voice-value').textContent = number;

      if (number > 0) {
        statusElement.textContent = 'Microphone status: Voice input detected!';
      } else {
        statusElement.textContent = 'Microphone status: No input';
      }

      /////////////
      // changing the blur value
      const blurValue = (1 - normalizedNumber) * 10;
      document.querySelector('.blur-layer').style.backdropFilter = `blur(${blurValue}px)`;
    }

    // Call the function every 60 seconds
    setInterval(generateRandomNumber, 1000);

    // Generate a random number and update the HTML element initially
    generateRandomNumber();

    // Start the recognition process when the user allows the microphone access
    statusElement.textContent = 'Microphone status: Listening...';
  }
})();
