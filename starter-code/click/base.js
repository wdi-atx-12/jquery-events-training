console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("span").on('click', function handleClick(event){
    var content = $(this).text();
    $("ul").append("<li>" + content + " " + Date.now() + "</li>");
  })
})
