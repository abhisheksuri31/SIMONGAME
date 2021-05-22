var buttoncolours = ["red", "blue", "green", "yellow"];

var gamepattern = [];
var userpattern = [];
var started = false;
var level = 0;

//KEYBOARD PRESS
document.addEventListener("keydown", function() {
  if (!started) {
    document.querySelector(".h2").innerHTML = "LEVEL " + level;
    started = true;
    nextsequence();
  }
});

//BUTTON PRESSED

//COUNT TOTAL BUTTONS
var count = document.querySelectorAll("button").length;
//ADD EVENT LISTENER TO ALL BUTTONS
for (var i = 0; i < count; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var usercolour = this.getAttribute("class");
    userpattern.push(usercolour);
    animation(usercolour);
    playsound(usercolour);
    console.log("UP: " + userpattern);
    checkanswer(userpattern.length-1);


  });
}

//CHECK RESPONSE

function checkanswer(current) {

  if (gamepattern[current] === userpattern[current]) {
    if (userpattern.length === gamepattern.length) {
      setTimeout(function() {
        nextsequence();
      }, 1200);
    }
  } else {
    document.querySelector(".h2").innerHTML = "GAME OVER ! PRESS ANY KEY TO RESTART";
    document.querySelector("body").style.background = "red";
    playsound("wrong");
    //RESTART THE GAME
    level = 0;
    gamepattern = [];
    started = false;
  }
}

//NEXT SEQUENCE

function nextsequence() {
  userpattern=[];
  document.querySelector("body").style.background = "black";

  level++;
  document.querySelector(".h2").innerHTML = "LEVEL " + level;

  var random = Math.floor(Math.random() * 4);
  var randomcolour = buttoncolours[random];
  gamepattern.push(randomcolour);
  animation(randomcolour);
  playsound(randomcolour);
  console.log("GP: " + gamepattern);
}









//PLAY SOUND

function playsound(name) {
  var audio = new Audio("SOUND/" + name + ".mp3");
  audio.play();
}

//FLASH ANIMATION ON BUTTON

function animation(currentcolour) {
  document.querySelector("." + currentcolour).classList.add("flash");
  setTimeout(function() {
    document.querySelector("." + currentcolour).classList.remove("flash");

  }, 150);
}
