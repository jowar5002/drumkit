// First 3 button using google stackoverflow docs
function wdrum() {
  var audio = document.getElementById("crash");
  audio.play();
}

function adrum() {
  var audio = document.getElementById("kick");
  audio.play();
}


function sdrum() {
  var audio = document.getElementById("snare");
  audio.play();
}


 function switchstmt(data){
   switch (data) {
     case "d":
       var audio = new Audio('sounds/tom-1.mp3');
       audio.play();
       break;

     case "j":
       var audio = new Audio('sounds/tom-2.mp3');
       audio.play();
       break;

     case "k":
       var audio = new Audio('sounds/tom-3.mp3');
       audio.play();
       break;

     case "l":
       var audio = new Audio('sounds/tom-4.mp3');
       audio.play();
       break;
     default:
       console.log();
     }
 }

// last 4 buttons using angela's video

for (var i = 3; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttoninnerHTML = this.innerHTML;

   switchstmt(buttoninnerHTML);

  });
}

//now using key board

document.addEventListener("keypress", function(event) {

  var keyp = event.key;

   switchstmt(keyp);

});
