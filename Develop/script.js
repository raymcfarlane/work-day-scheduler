// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//link the current day in with html class "currentDay"

var displaytimeArray = $('#currentDay')
displaytimeArray.text(dayjs);

var currentHour = dayjs().hour();
var timeArray = dayjs();
console.log(timeArray);


function checkPresentTimeSlot () {
    $(".time-block").each(function () {
        var timeBlockId = parseInt($(this).attr("id"))
        console.log("Current hour is " + currentHour)
        if (timeBlockId < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        } else 
        if (timeBlockId === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }        
    })
}
checkPresentTimeSlot();
$('.saveBtn').on('click', function () {
    console.log(this);
    var inputText = $(this).child(".description").val();
    var inputTime = $(this).parent().attr('id');
    localStorage.setItem(inputTime, inputText);
})

$('#9am .description').val(localStorage.getItem("9am"));
$('#10am .description').val(localStorage.getItem("10am"));
$('#11am .description').val(localStorage.getItem("11am"));
$('#12pm .description').val(localStorage.getItem("12pm"));
$('#13pm .description').val(localStorage.getItem("13pm"));
$('#14pm .description').val(localStorage.getItem("14pm"));
$('#15pm .description').val(localStorage.getItem("15pm"));
$('#16pm .description').val(localStorage.getItem("16pm"));
$('#17pm .description').val(localStorage.getItem("17pm"));



  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

