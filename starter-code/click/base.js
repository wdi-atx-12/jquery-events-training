console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $("span").on("click", function handleClick(event){
    var itemText = "clicked: " + $(this).text() + " at " + Date.now();
    $("ul").append("<li>" + itemText + "</li>")
  })

})
