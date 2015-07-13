
//variables to set the counter
var seconds = 0, tenSeconds = 0, minutes = 0, tenMinutes = 0, hours = 0; 
var counter = $('#counter');
var counterTime;

var startTime;
var stopTime;
var totalTime;


  
$(document).ready(function(){
  //starts the initial counter to be 0.
  updateCounter();

  var startButton = $('#start-button'), stopButton = $('#stop-button'), resetButton = $('#reset-button');
  var interval;
  disable(stopButton);
  

  //When this is clicked, the button is disabled, and the time starts.
  startButton.click(function(){
    interval = setInterval(function() {
      seconds += 1;
      if (seconds == 10) {
        seconds = 0;
        tenSeconds += 1;
        if (tenSeconds == 6) {
          tenSeconds = 0;
          minutes += 1;
          if (minutes == 10) {
            minutes = 0;
            tenMinutes += 1;
            if (tenMinutes == 6) {
              tenMinutes = 0;
              hours += 1;
            }
          } 
        } 
      }
      updateCounter();
    }, 1000);

    if (!startTime) { startTime = setTime(); }
      
    disable(startButton);
    activate(stopButton);
    disable(resetButton);
  });

  

  //This shows what happens when the stop button is clicked

  

  stopButton.click(function() {
    clearInterval(interval);
    disable(stopButton);
    activate(startButton);
    activate(resetButton);
    
    stopTime = setTime();
     

   
  });

  var recordTable = document.getElementById("record-table");

  resetButton.click(function(){
    totalTime = counterTime;
   

    var row = recordTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = startTime;
    cell2.innerHTML = stopTime;
    cell3.innerHTML = totalTime;

    startTime = undefined;

    seconds = 0; 
    tenSeconds = 0; 
    minutes = 0;
    tenMinutes = 0;
    hours = 0;
    
    updateCounter();

  });
});

private

function disable(button) {
  button.prop("disabled", true);
}

function activate(button) {
  button.prop("disabled", false);
}

function setTime(time) {
  var dateObj = new Date();
  return dateObj.toLocaleTimeString();
}

function setCounter (h, tm, m, ts, s) {
  return h + ":" + tm + m + ":" + ts + s;
}

function updateCounter() {
  counterTime = setCounter(hours, tenMinutes, minutes, tenSeconds, seconds);
  counter.text(counterTime);
}



