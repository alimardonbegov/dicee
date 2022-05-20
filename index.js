function selectWhoWin() {
  var images = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
  ];
  var randomNumber1 = Math.floor(Math.random() * images.length); // round (floor from 0 to 6,9999) = (0;6)
  var randomSource1 = images[randomNumber1];
  var randomNumber2 = Math.floor(Math.random() * images.length); // round (floor from 0 to 6,9999) = (0;6)
  var randomSource2 = images[randomNumber2];
  document.querySelector(".img1").src = randomSource1;
  document.querySelector(".img2").src = randomSource2;

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML =
      "<i class='fa-solid fa-flag'></i> Player 1 Wins!";
    document.querySelector(".fa-solid").style.color = "#9d0104";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML =
      "Player 2 Wins! <i class='fa-solid fa-flag'></i> ";
    document.querySelector(".fa-solid").style.color = "#9d0104";
  } else {
    document.querySelector("h1").textContent = "Draw! <br> Draw!";
  }
}
