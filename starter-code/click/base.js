console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('div span').click(function() {
    let li = document.createElement('li');
    li.innerText = `"${$( this ).text()}" at ${Date.now()}`;
    $('ul').append(li);
  });
})
