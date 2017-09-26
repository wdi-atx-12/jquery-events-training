console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // was able to add item to list but not selected span item, not sure how to do this without changing html :(
  $('#imperatives').click(function(){
    var addToList = $('span');
    $('ul').append('<li>did a thing</li>')
  });

})
