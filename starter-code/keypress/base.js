var starting;
var ending; 
var total = 0;

$(document).ready(function(){
  $(window).on("keypress", function keypresser(event){
    if ( starting ) {
      ending = Date.now();
      total = (ending - starting) / 1000;
      displayTotal();
    } else {
      starting = Date.now();
      window.setInterval(totality, 500);
    }
  })
})

	function totality(){
	  total = (Date.now() - starting) / 1000;
	  $("#total-time").text( total + " seconds" );
	}
