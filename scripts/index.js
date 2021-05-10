window.onload = function showTime() {
  let time = new Date();
  let hours = time.getHours(); // in format of 24h
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  var dayTime = "AM";
  if (hours == 0) {
    hours = 12;
  } // before midday
  if (hours > 12) {
    hours = hours - 12;
    dayTime = "PM"; // past midday
  }
  //ternary operators for adding zero before number,if obtained from Date() h/mins/secs/ are below ten, otherwise display number obtained from getHours/ and so on
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let clock = hours + ":" + minutes + ":" + seconds + dayTime;
  document.getElementById("MyClockDisplay").innerText = clock;
  document.getElementById("MyClockDisplay").textContent = clock;

  setTimeout(showTime, 1000);
};

showTime();
