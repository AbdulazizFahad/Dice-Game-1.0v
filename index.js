var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomNumber2 = Math.floor(Math.random() * 6 )+1;

var randomPicture1 = "/images/dice" + randomNumber1 + ".png";    // ./images/dice6.png
var randomPicture2 = "/images/dice" + randomNumber2 + ".png";    // ./images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src",randomPicture1);
document.querySelectorAll("img")[1].setAttribute("src",randomPicture2);


if(randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2) {
      document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
}
else {
      document.querySelector(".container h1").innerHTML = "Draw!";
     
}