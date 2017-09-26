console.log("Sanity Check: JS is working!");
var navbar = "<h3><nav><a href='../ready/index.html'>Ready</a>&nbsp;<a href='../keypress/index.html'>Keypress</a>&nbsp;<a href='../click/index.html'>Click</a>&nbsp;<a href='../change/index.html'>Change</a>&nbsp;<a href='../submit/index.html'>Submit</a></nav></h3>";
$(document).ready(function(){

  $("h1").prepend(navbar);

    $( "#right, #left" ).change(function() { //when the right or left field is changed fire the event

          var field1 = $("#left").val();
          var field2 = $("#right").val();
          var field3 = parseInt(field1) + parseInt(field2);
          $("#total").val(field3);

});


    $("#time").text( Date.now() );

})
