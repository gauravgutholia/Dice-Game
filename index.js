document.getElementById("btn").addEventListener("click", throwDice);

function throwDice(btn) {
  var dice = new Audio("sounds/DICE.wav");
  dice.play();
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  //If player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Play 1 Wins!";
     document.getElementsByClassName("angry")[1].style.visibility = "visible";
    document.getElementsByClassName("angry1")[0].style.visibility = "visible";
    document.getElementsByClassName("angry")[0].style.visibility = "hidden";
    document.getElementsByClassName("angry1")[1].style.visibility = "hidden";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
    document.getElementsByClassName("angry")[1].style.visibility = "hidden";
    document.getElementsByClassName("angry1")[0].style.visibility = "hidden";
    document.getElementsByClassName("angry")[0].style.visibility = "visible";
    document.getElementsByClassName("angry1")[1].style.visibility = "visible";
  } else {
    document.querySelector("h1").innerHTML = "Draw! 🚩";
     document.getElementsByClassName("angry")[1].style.visibility = "hidden";
    document.getElementsByClassName("angry1")[0].style.visibility = "visible";
    document.getElementsByClassName("angry")[0].style.visibility = "visible";
    document.getElementsByClassName("angry1")[1].style.visibility = "hidden";
  }
}

