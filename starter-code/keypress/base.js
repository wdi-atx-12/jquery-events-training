console.log("Sanity Check: JS is working!");

var start;
var end;
var sum = 0;

$(document).ready(() => {
  $(window).on(`keypress`, (evt) => {
    if(start) {
      end = Date.now(); //sets end time to current Date
      sum = end - start / 1000;
      displaySum();
    }
  });
});

let displaySum = () => {
  sum = Date.now() - start / 1000;
  $(`#total-time`).text(`${sum} seconds.`);
}
