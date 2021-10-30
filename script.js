/* add important events to daily planner 

open planner
current day is diplayed at the top of the calendar

scroll down --> timeblocks for standard businees hours (9-5)
when view time blocks for that day
time block is color coded to indicate whether it is in the past, present or future

click on time block to enter event
click save button then text for that event is saved in local storage

when refresh page, the saved event persists



*/
var currentTime = moment().format("LLLL");
$("#currentDay").text(currentTime);

