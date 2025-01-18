document.addEventListener("DOMContentLoaded", () => {
   let startTimerButton = document.querySelector("#startTimerButton"),
      stopTimerButton = document.querySelector("#stopTimerButton"),
      resetTimerButton = document.querySelector("#resetTimerButton"),
      flagTimerButton = document.querySelector("#flagTimerButton"),
      hoursCounter = document.querySelector(".counter-h"),
      minutesCounter = document.querySelector(".counter-m"),
      secondsCounter = document.querySelector(".counter-s"),
      msCounter = document.querySelector(".counter-ms"),
      hours = 0,
      minutes = 0,
      seconds = 0,
      milliseconds = 0,
      timeInterval,
      flagsWrapper = document.querySelector(".stopwatch__flags"),
      flags = [];

   startTimerButton.addEventListener("click", () => {
      clearInterval(timeInterval);
      timeInterval = setInterval(startTimer, 10);
   });
   stopTimerButton.addEventListener("click", stopTimer);
   resetTimerButton.addEventListener("click", resetTimer);
   flagTimerButton.addEventListener("click", flag);

   function startTimer() {
      milliseconds++;

      if (milliseconds <= 9) {
         msCounter.innerHTML = "0" + milliseconds;
      }

      if (milliseconds > 9) {
         msCounter.innerHTML = milliseconds;
      }

      if (milliseconds > 99) {
         milliseconds = 0;
         msCounter.innerHTML = "0" + milliseconds;
         seconds++;
      }

      if (seconds <= 9) {
         secondsCounter.innerHTML = "0" + seconds;
      }

      if (seconds > 9) {
         secondsCounter.innerHTML = seconds;
      }

      if (seconds > 59) {
         seconds = 0;
         minutes++;
      }

      if (minutes <= 9) {
         minutesCounter.innerHTML = "0" + minutes;
      }

      if (minutes > 9) {
         minutesCounter.innerHTML = minutes;
      }

      if (minutes > 59) {
         minutes = 0;
         hours++;
      }

      if (hours <= 9) {
         hoursCounter.innerHTML = "0" + hours;
      } else {
         hoursCounter.innerHTML = hours;
      }
   }

   function stopTimer() {
      clearInterval(timeInterval);
   }

   function resetTimer() {
      clearInterval(timeInterval);
      hours = 0;
      minutes = 0;
      seconds = 0;
      milliseconds = 0;
      hoursCounter.innerHTML = "0" + hours;
      minutesCounter.innerHTML = "0" + minutes;
      secondsCounter.innerHTML = "0" + seconds;
      msCounter.innerHTML = "0" + milliseconds;
      flags = [];
      flagsWrapper.innerHTML = "";
   }

   function flag() {
      let flagTime = `${hoursCounter.innerHTML}:${minutesCounter.innerHTML}:${secondsCounter.innerHTML}.${msCounter.innerHTML}`;

      if (flagTime != "00:00:00.00" && !flags.includes(flagTime)) {
         flags.push(flagTime);
         console.log(flags);
         appendFlagToDOM(flagTime);
      }
   }

   function appendFlagToDOM(flagTime) {
      let newFlag = document.createElement("div");
      newFlag.classList.add("flag");
      newFlag.innerHTML = `
         <div class="flag__index">${flags.length}</div>
         <div class="flag__time">${flagTime}</div>
      `;
      flagsWrapper.appendChild(newFlag);
      flagsWrapper.scrollTop = flagsWrapper.scrollHeight;
   }
});
