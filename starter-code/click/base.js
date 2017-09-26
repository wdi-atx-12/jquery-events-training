console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('span')on('click', function controlClick(clicky){
    var spanText = 'You clicked ' + $(this).text() + ' at ' Date.now
    $('ul').append('<li>' + spanText + "</li>")
  })
})
