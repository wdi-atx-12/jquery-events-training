//console.log("Im here");
var showNavBar = function() {
  var nav = ["ready","submit","change","click","keypress"];

  $("body").append("<hr/><nav></nav>");
  $("nav").append("<b>JQuery Event Training:</b> | ");
  nav.forEach(function(a) {
    var element = document.createElement("a");
    element.href = `../${a}/index.html`;
    element.innerText = a;
    $("nav").append(element).append(" | ");
  });
};
