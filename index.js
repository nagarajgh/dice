var player1 = prompt("Enter First player Name");
while (player1 == 0) {
  player1 = prompt("Please enter the First Player name and proceed");
}
var player2 = prompt("Enter second player Name");
while (player2 == 0) {
  player2 = prompt("Please enter the Second Player name and proceed");
}
// alert ("refresh");


/***********************dice 1**********************/
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1; // number 1 -6

var randomImage = "dice" + randomNumber1 + ".png"; // image 1 - 6
var randomImageSource = "images/" + randomImage; //images from dice 1 to dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

/**************************dice 2*************************/
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var randomImage = "dice" + randomNumber2 + ".png"; // image 1 - 6
var randomImageSource = "images/" + randomImage; //images from dice 1 to dice6.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

/******************************text generator******************/

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🍻 " + player1 + "  Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = " 🍻 " + player2 + " Wins";
} else {
  document.querySelector("h1").innerHTML = "☮ Draw";
}
