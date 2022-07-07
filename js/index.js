//Generate a random number from 1 to 6
var randomNumber1 = Math.random() * 6; 
randomNumber1 = Math.floor(randomNumber1 + 1);
//initialise a variable to get random image dices between dice1.png - dice6.png  
var randomDiceImage = "dice" + randomNumber1 + ".png"; 
//Get the source images. 
var randomImg = "imgs/" + randomDiceImage; //get random imgs from imgs/dice1.png - dice6.png  
//select the elements image 1 and assign to a var 
var winnerImage1 = document.querySelectorAll("img")[0];
//set 1st image to any random image using randonImg var; 
    winnerImage1.setAttribute("src",randomImg);

//Second player and image 
//Generate a random number from 1 - 6; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;     
//initialise a variable to get random image dices between dice1.png - dice6.png  
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; 
//Get the source images. 
var randomImg2 = "imgs/" + randomDiceImage2; //get random imgs from imgs/dice1.png - dice6.png 
//select the elements image 1 and assign to a var
var winnerImage2 = document.querySelectorAll("img")[1];
    winnerImage2.setAttribute("src",randomImg2); 

//Get h1 Element and set to a var;    

if (randomNumber2 === 6 && randomNumber1 != 6) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
    document.querySelector("h1").style.color = "white"; 
}
else if (randomNumber1 === 6 && randomNumber2 != 6) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
    document.querySelector("h1").style.color = "white";
}
else if (randomNumber1 === 6 && randomNumber2 === 6) {
    document.querySelector("h1").innerHTML = "Draw! Play again";
    document.querySelector("h1").style.color = "white";
}    