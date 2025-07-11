// Starting Dice Start
// Controlls the pieces for the dice
const diceDisplay1 = document.getElementById("diceFirst");
const diceDisplay2 = document.getElementById("diceSecond");
const  startNumDisplay = document.getElementById("startNum");
const totalDisplay = document.getElementById("totalScore");
const totalDiceDisplay = document.getElementById("totalDice");
const startNumDisplay2 = document.getElementById("startNum2");
document.getElementById('conBtn').style.visibility = 'hidden';
var StartingNum = 0;


function roll(){
//----------------------------------------------------------
// First Part Where the user gets their starting Number
const diceOne = Math.floor(Math.random() * 6) + 1;
const diceTwo = Math.floor(Math.random() * 6) + 1;
const diceThree = Math.floor(Math.random() * 6) + 1;
const diceFour = Math.floor(Math.random() * 6) + 1;
const diceFive = Math.floor(Math.random() * 6) + 1;
const diceSix = Math.floor(Math.random() * 6) + 1;


StartingNum  = diceOne + diceTwo + diceThree + diceFour + diceFive + diceSix;


diceDisplay1.textContent = ` Dice 1: ${diceOne}    Dice 2: ${diceTwo}  Dice 3: ${diceThree}`

diceDisplay2.textContent = ` Dice 4: ${diceFour}    Dice 5: ${diceFive}  Dice 6: ${diceSix}`

document.getElementById("startNum2").innerHTML = `<h3> Starting Number: ${StartingNum} `;


document.getElementById('roll').style.visibility = 'hidden';
document.getElementById('conBtn').style.visibility = 'visible';

// Where User gets their starting Number end
// -------------------------------------------------------------------------- 

}


// document.getElementById("firstBut").innerHTML = `<a href="kRound.html"> <button> Start Round 1 </button> <a>`;

// Starting Dice ends

// start(StartingNum);





function start(){
// Start of 1st Round
// --------------------------------

// document.getElementById("startNum2").innerHTML = `<h3> Starting Number: ${startNumt} `;
document.getElementById("rules").innerHTML = `<h3> You will have a total of 3 Rounds to get the highest Score possible </h3>
<h3> If you roll a total of more then 20 you loose all your points and oly keep the starting number </h3> 
<h3> You can choose to not move on to the next round and keep your score</h3>
<h3> When you are ready click "Start Round 1" </h3>`

const diceOne = Math.floor(Math.random() * 6) + 1;
const diceTwo = Math.floor(Math.random() * 6) + 1;
const diceThree = Math.floor(Math.random() * 6) + 1;
const diceFour = Math.floor(Math.random() * 6) + 1;
const diceFive = Math.floor(Math.random() * 6) + 1;
const diceSix = Math.floor(Math.random() * 6) + 1;

diceDisplay1.textContent = ` Dice 1: ${diceOne}    Dice 2: ${diceTwo}  Dice 3: ${diceThree}`

diceDisplay2.textContent = ` Dice 4: ${diceFour}    Dice 5: ${diceFive}  Dice 6: ${diceSix}`

const totalScore = StartingNum + diceOne + diceTwo + diceThree + diceFour + diceFive + diceSix;
const totalRoll = diceOne + diceTwo + diceThree + diceFour + diceFive + diceSix;

totalDiceDisplay.textContent  =` Total Dice Roll: ${totalRoll}`


totalDisplay.textContent = `Total Score (Diceroll + starting Number): ${totalScore}`
document.getElementById('conBtn').style.visibility = 'hidden';
// End of 1st Round
//------------------------------
}