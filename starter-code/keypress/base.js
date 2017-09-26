console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  let isRunning = false;
  let timerInterval;
  $(document).keypress(function (e) {
    console.log('asdf');
    if(e.keyCode == 32) {
      isRunning = !isRunning;
      if (isRunning) {
        let startMS = Date.now();
        timerInterval = window.setInterval(function(){
          $('#total-time').text(getMinSecs(startMS, Date.now()));
        }, 1000);
      } else {
        window.clearInterval(timerInterval);
      }
    }
  });
});

function getMinSecs(startMS, endMS) {
  let elapsedSeconds = (endMS - startMS)/1000;
  let secs = Math.floor(elapsedSeconds%60);
  let mins = Math.floor(elapsedSeconds/60);
  return `${padDigits(mins)}:${padDigits(secs)}`;
}

function padDigits(num) {
  return `${num < 10 ? '0' + num : num}`;
}
