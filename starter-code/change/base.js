console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

    var $left = $('input#left');
    var $right = $('input#right');
    var $inputs = $('input.add');
    var $total = $('#total');

  $inputs.on('change', function change(evt){
    parseInt($left.val()) || 0;
    parseInt($right.val()) || 0;
    $total.val(parseInt($left.val(),10) + parseInt($right.val(),10));
    console.log($total);
  })
})
