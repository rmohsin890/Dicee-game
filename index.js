

// There are two differenet ways of doing this

var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomDiceImage = "Dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomDiceImage2 = "Dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "First person Won";
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Second person Won";
}
else {
  document.querySelector("h1").innerHTML = "The math is draw";
}
