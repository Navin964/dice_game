
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var diceImage = "dice" + randomNumber1 + ".png";
var diceImageSource = "images/" + diceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",diceImageSource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var dice_Image = "dice" + randomNumber2 + ".png";
var diceImage_source = "images/"+ dice_Image ;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",diceImage_source);

function result(){
  if(randomNumber1>randomNumber2){
     return document.querySelector("h1").innerHTML="🏆 Player 1 Wins!";
  }else if (randomNumber1<randomNumber2) {
    return document.querySelector("h1").innerHTML="Player 2 Wins! 🏆";
  }else{
    return document.querySelector("h1").innerHTML="DRAW!!!";
  }
}
result();
