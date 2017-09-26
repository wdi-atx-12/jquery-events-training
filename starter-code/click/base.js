console.log("Sanity Check: JS is working!");

$(document).ready(function(){
    let list = [];
    $("span").click('click', function(event) {
	list.push($(this).text() + " clicked on: " + event.timeStamp);
    });
})
