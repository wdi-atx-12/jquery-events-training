console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $(".add").change(function(e) {
    $("#total").val(parseInt($("#left").val())+parseInt($("#right").val()));
  });

  //strech: add reset button
  var element = document.createElement("button");
  element.innerHTML = "Reset";
  $(element).click(function(e) {
    e.preventDefault();
    $("input").val("");
  });

  $("body").append(element);

  //WRAP IT UP
  showNavBar();
});
