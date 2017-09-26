console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("span").on("click", function clickPhrase(event){
    var phraseShowing = "You clicked: " + $(this).text() + " at " + Date.now();
    $("ul").append("<li>" + phraseShowing + "</li>")
  });

})
