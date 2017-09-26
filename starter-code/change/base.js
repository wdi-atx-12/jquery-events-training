console.log("Sanity Check: JS is working!");

var reset = $('<button value="reset">reset</button>');
var inputs = [...document.querySelectorAll('.number')];
$(document).ready(function(){
  $("body").append(reset);
  reset.on("click", ()=>{
  	$("input").val('');
  })
  $("#time").text( Date.now() );
  $(".add").on("change", ()=>{
  	$("#total").val(parseInt($('#left').val(),10)+parseInt($('#right').val(),10));
  })

  
})
