var input="<input type='text' id='input'>";
var addButton="<button id='clickToAddOne'>Add One</button>";
var count= 0;
$(document).ready(function(){
  $("body").prepend(input,addButton);
  $("#clickToAddOne").click(function(){
    count++;
    $("#input").attr("value",count);
  });
});
/*
<input type="button" value="click" id="#clickButton">
*/
/*
$("input[type='button']").on("click", function(){
  var element = $("#clickButton");
  var count = parseInt(element.text());
  element.text(count + 1);
  console.log();
});
*/
