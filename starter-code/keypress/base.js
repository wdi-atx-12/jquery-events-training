console.log("Sanity Check: JS is working!");

var start;
var difference = 0;
var timerId= 0;
$(document).ready(function(){
	$(document).keydown(function(e){
		if(e.keyCode === 32){
			if(start){
				// console.log(`end: ${end/1000}.... start: ${start/1000} ... difference: ${(end-start)/1000 }`);
				clearInterval(timerId);
				start = null;
			}else{
				start = Date.now();
				timerId= window.setInterval(displayTime,10);
			}
		}
	})
})
function displayTime(){
	difference = (Date.now() - start)/1000;
	$("#total-time").text( difference + " seconds" )
}