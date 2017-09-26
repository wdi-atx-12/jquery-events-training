console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $("#imperatives > span").on("click", event => {
    let text = event.currentTarget.innerText;
    let readyText = $("<li></li>").text(text);
    $("ul").append(readyText);
  });
})
