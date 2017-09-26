console.log("Sanity Check: JS is working!");

$(document).ready(function(){
    let start = false;
    $('body').keyup(function(e){
      if(e.keyCode == 32){

          if(start === true) {

              let newTime = new Date;
              newTime = newTime.getTime() / 1000;
              $('#total-time').text(newTime - time);


          } else {

              let time = new Date;
              time = time.getTime() / 1000;
              let start = true;
          }
      }
  });

})
