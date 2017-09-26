console.log("Sanity Check: JS is working!");

$(document).ready(function(){

    $( "#right, #left" ).change(function() { //when the right field is changed fire the event

          var field1 = $("#left").val();
          var field2 = $("#right").val();
          var field3 = parseInt(field1) + parseInt(field2);
          $("#total").val(field3);

});


    $("#time").text( Date.now() );

})
