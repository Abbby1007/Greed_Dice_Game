// Starting Dice Start
// Controlls the pieces for the dice
const diceDisplay1 = document.getElementById("diceFirst");
const diceDisplay2 = document.getElementById("diceSecond");
const  startNumDisplay = document.getElementById("startNum");
const totalDisplay = document.getElementById("totalScore");
const totalDiceDisplay = document.getElementById("totalDice");


function roll(){
const diceOne = Math.floor(Math.random() * 6) + 1;
const diceTwo = Math.floor(Math.random() * 6) + 1;
const diceThree = Math.floor(Math.random() * 6) + 1;
const diceFour = Math.floor(Math.random() * 6) + 1;
const diceFive = Math.floor(Math.random() * 6) + 1;
const diceSix = Math.floor(Math.random() * 6) + 1;


 const StartingNum  = diceOne + diceTwo + diceThree + diceFour + diceFive + diceSix;


diceDisplay1.textContent = ` Dice 1: ${diceOne}    Dice 2: ${diceTwo}  Dice 3: ${diceThree}`

diceDisplay2.textContent = ` Dice 4: ${diceFour}    Dice 5: ${diceFive}  Dice 6: ${diceSix}`

startNumDisplay.textContent = ` Starting Number: ${StartingNum}`;


document.getElementById("firstBut").innerHTML = `<a href="kRound.html"> <button> Start Round 1 </button> <a>`

// Starting Dice ends



}



function start(){

document.getElementById("startNum2").innerHTML = `<h3> Starting Number: `;


document.getElementById("rules").innerHTML = `<h3> You will have a total of 3 Rounds to get the highest Score possible </h3>
<h3> If you roll a total of more then 20 you loose all your points and oly keep the starting number </h3> 
<h3> You can choose to not move on to the next round and keep your score</h3>`
const diceOne = Math.floor(Math.random() * 6) + 1;
const diceTwo = Math.floor(Math.random() * 6) + 1;
const diceThree = Math.floor(Math.random() * 6) + 1;
const diceFour = Math.floor(Math.random() * 6) + 1;
const diceFive = Math.floor(Math.random() * 6) + 1;
const diceSix = Math.floor(Math.random() * 6) + 1;

diceDisplay1.textContent = ` Dice 1: ${diceOne}    Dice 2: ${diceTwo}  Dice 3: ${diceThree}`

diceDisplay2.textContent = ` Dice 4: ${diceFour}    Dice 5: ${diceFive}  Dice 6: ${diceSix}`

// const totalScore = StartingNum  + oneDiceOne + oneDiceTwo + oneDiceThree + oneDiceFour + oneDiceFive + oneDiceSix;
const totalRoll = oneDiceOne + oneDiceTwo + oneDiceThree + oneDiceFour + oneDiceFive + oneDiceSix;

totalDiceDisplay.textContent  =` Total Dice Roll: ${totalRoll}`
// totalDisplay.textContent = `Total Score: ${totalScore}`
}