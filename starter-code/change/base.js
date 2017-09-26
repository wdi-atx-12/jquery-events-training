console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  let resetBtn = document.createElement('button');
  resetBtn.innerText = 'Reset';
  $('body').append(resetBtn);

  $('button').click(function() {
    $('#left').val('');
    $('#right').val('');
    $('#total').val('');
  });

  $('.add').change(function() {
    let left = $('#left').val();
    let right = $('#right').val();
    if(left && right) {
      $('#total').val(parseInt(left) + parseInt(right));
    }
  });
})
