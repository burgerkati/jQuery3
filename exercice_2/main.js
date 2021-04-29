/*
Create two buttons: one to increment, the other to decrement
An input retrieves the values
*/
var input="<input type='text' id='input'>";
var addButton="<button id='clickToAddOne'>Add One</button>";
var subtractButton="<button id='clickToSubtractOne'>Subtract One</button>";
var count= 0;

$(document).ready(function(){
  $("body").prepend(input,addButton,subtractButton);
  $("#clickToAddOne").click(function(){
    count++;
    $("#input").attr("value",count);
  });
  $("#clickToSubtractOne").click(function(){
    count--;
    $("#input").attr("value",count);
  });
});
