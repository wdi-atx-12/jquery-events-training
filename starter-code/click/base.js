console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$("span").on("click", function clicker(event){
    	var clickText = "You Clicked: " + $(this).text() + " at " + Date.now();
    	$("ul").append("<li>" + clickText + "</li>")

    })
})