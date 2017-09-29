console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('span').on('click', function(){
    var txt = $(this).text();;
    $('ul').append("<li>"+txt+"</li>");
     console.log(txt);
  })

})
