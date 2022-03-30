// variables for page function //
var timeDisplayEl = $('#time-display')

// time display function
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}


setInterval(displayTime, 1000);