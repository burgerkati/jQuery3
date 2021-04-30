// Create a colored div and five buttons. One to increase the height of the div, one to make the div disappear, one to change the color of the div, one to return to the initial color and one to make it reappear.
var div = "<div></div>";
var button = "<button id='button'>Increase height</button>";
var secondButton = "<button id='buttonTwo'>Hide</button>";
var thirdButton = "<button id='buttonThree'>Change color</button>";
var fourthButton = "<button id='buttonFour'>Initial color</button>";
var fifthButton = "<button id='buttonFive'>Reappear</button>";

$(document).ready(function(){
  $("body").prepend(div,button,secondButton,thirdButton,fourthButton,fifthButton);
  $("div").css("background-color","#d3d3d3","height, 200");
  $("button").click(function(){
    $("div").height(300);
  });
  $("#buttonTwo").click(function(){
    $("div").hide();
  });
  $("#buttonThree").click(function(){
    $("div").css("background-color","#add8e6");
  });
  $("#buttonFour").click(function(){
    $("div").css("background-color","#d3d3d3");
  });
  $("#buttonFive").click(function(){
    $("div").show();
  });
});
