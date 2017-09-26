console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#imperatives span").click(function(e) {
    $("ul").append(`<li>${this.innerText} at ${Date.now()}</li>`);
  });

  //WRAP IT UP
  showNavBar();
})
