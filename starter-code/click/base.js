console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  

  $('span').on('click', function() {
    var time = new Date(Date.now());      // so it can reset variable
    var text = `You clicked: ${$(this).text()} at ${time}`;
    $('ul').append(`<li>${text}</li>`);
  });
});
