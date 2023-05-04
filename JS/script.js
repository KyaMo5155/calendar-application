//call to jQuery 
$(document).ready(function () {

    //creating a variable to display date and time
    var displayTime = document.querySelector("#currentDay");

     //using dayjs to display current date and time
    var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

    displayTime.textContent = currentTime;

    //Adding a listener for click events on the save button
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
       

    //saves text to local storage
    localStorage.setItem(time, text);
    });
    

    function hourTracker() {
        //get current hour
        var currentHour = dayjs().hour();
        
        //loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-") [1]);
        
            //check time and adding classes for background indicators
            if (blockHour < currentHour) {
            $(this).addClass("past");
            }else if (blockHour === currentHour) {
            $(this).addClass("past");
            $(this).addClass("present");
            }else {
            $(this).addClass("past");
            $(this).addClass("present");
            $(this).addClass("future");
            }
        });
    }
    hourTracker();

    //creating loop for retriving and displaying data from local storage.
    function displayText() {
        //loop over time blocks
        $(".time-block").each(function () {
            var blockHour = $(this).attr("id");
            $(this).children(".description").val(localStorage.getItem(blockHour));
        });
    }
    displayText();

});
   

  
  