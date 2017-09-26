console.log("Sanity Check: JS is working!");

$(document).ready(() => {

  $(`span`).on(`click`, (evt) => {
    let textList = `Clicked: ${$(this).text()} at ${Date.now()}`;
      $(`ul`).append(`<li> ${textList} </li>`);
  });
});
