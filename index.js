var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageNum = "dice" + randomNumber1 + ".png";
var randomImageSource = "./images/" + randomImageNum;
document.querySelector(".img1").setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageNum2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "./images/" + randomImageNum2;
document.querySelector(".image").setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = "🚩 Player1 is the winner!";
    count ++;
}else if(randomNumber1 < randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player2 is the winner! 🚩";
    count++;
}else{
    document.querySelector(".container h1").innerHTML = "DRAW!";
    count++;
}