console.log("Sanity Check: JS is working!");

var rick_roll = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function(){

  $("#time").text( Date.now() );

  $('form').on('submit', (e) => {
    e.preventDefault();
    $('body').append(rick_roll);
  });
});
