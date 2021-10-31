/* 
display current day at the top of calendar
    - use moment js 
timeblocks for standard business hours (9-5)
    - use bootstrap to create rows
color code time block to see whether it is in the past, present or future
    - use moment js to change background color of timeblocks
    - green for current time block
    - grey for past time block
    - white for future time block
click on time block to enter event
    - add event listener click on timeblock
    - allow user to input data
        #event title
click save button then text for that event is saved in local storage
    - add event listner to saveBtn
    - create function to save to local storage
when refresh page, the saved event persists
*/


//display current day on top of calendar
var currentDay = moment().format("LLLL");
$("#currentDay").text(currentDay);

//user can input event information upon clicking time block
var timeBlock = document.getElementById("time-block")
timeBlock.addEventListener('click', displayInputBox)


function displayInputBox(event){
    console.log("ello");
    event.preventDefault();

    var inputBoxContainer = document.createElement('div')
    var inputBox = document.createElement('input')
    inputBoxContainer
    inputBox.innerHTML = "<input type='text' id='newInputBox'>";
    document.getElementById("time-block").appendChild(inputBoxContainer);
    document.getElementById("time-block").appendChild(inputBox);
    var inputDetails = inputBox.value
    var eventEl = document.createElement('p')
    eventEl = inputDetails
    
    printEvent()
    
}

// print event onto window
var saveBtn = document.getElementById('#saveBtn')

function printEvent(){
    console.log("saved")
}
// saveBtn.addEventListener('click', printEvent)


//event gets saved into local storage

// var save = document.getElementById("saveBtn")
// save.addEventListener('click', saveEvent)

// function saveEvent(){
//     console.log("save")
// }



// var nowTimeblock = moment()

// function colorCode (){
//     var currentTime = moment()
//     if currentTime <9 && >5
//     }

// }



