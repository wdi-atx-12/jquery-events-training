console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	// $("span").on("click", (event)=>{
	// 	var add = "You clicked:" + $(this).text() " at " + Date.now(); 
	// 	$("ul").append("<li>" + add + "</li>");
	// })
	//Lesson learned, don't use ES6 with jQuery
	$("span").on("click",function(){
		var add = "You clicked: "+ $(this).text() + " at " + Date.now();
		$("ul").append("<li>" + add + "</li>")
	})
})
