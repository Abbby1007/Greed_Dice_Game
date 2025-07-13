// Starting Dice Start
// Controlls the pieces for the dice
const diceDisplay1 = document.getElementById("diceFirst");
const diceDisplay2 = document.getElementById("diceSecond");
const  startNumDisplay = document.getElementById("startNum");
const totalDisplay = document.getElementById("totalScore");
const totalDiceDisplay = document.getElementById("totalDice");
const startNumDisplay2 = document.getElementById("startNum2");


// buttons
document.getElementById('conBtn').style.visibility = 'hidden';
document.getElementById('endBtn1').style.visibility = 'hidden';
// Round 2 buttons
document.getElementById('conBtn2').style.visibility = 'hidden';
document.getElementById('endBtn2').style.visibility = 'hidden';
// Round 3 buttons
document.getElementById('conBtn3').style.visibility = 'hidden';
document.getElementById('endBtn3').style.visibility = 'hidden';
// Variables
var StartingNum = 0;
var highScore = 0;
var round1Score = 0;s

function highScore(r){
    // This function will be placed in each end to determine the highscore
}

function roll(){
//----------------------------------------------------------
// First Part Where the user gets their starting Number
const diceOne = Math.floor(Math.random() * 6) + 1;
const diceTwo = Math.floor(Math.random() * 6) + 1;
const diceThree = Math.floor(Math.random() * 6) + 1;
const diceFour = Math.floor(Math.random() * 6) + 1;
const diceFive = Math.floor(Math.random() * 6) + 1;
const diceSix = Math.floor(Math.random() * 6) + 1;

// adds up the starting Number
StartingNum  = diceOne + diceTwo + diceThree + diceFour + diceFive + diceSix;

// displays the dice rolls and starting number results
diceDisplay1.textContent = ` Dice 1: ${diceOne}    Dice 2: ${diceTwo}  Dice 3: ${diceThree}`

diceDisplay2.textContent = ` Dice 4: ${diceFour}    Dice 5: ${diceFive}  Dice 6: ${diceSix}`

document.getElementById("startNum2").innerHTML = `<h3> Starting Number: ${StartingNum} `;


document.getElementById('roll').style.visibility = 'hidden';

document.getElementById("firstBut").innerHTML = `<h3> You now have your staring number. The Rules are: </h3>
<h3> You will have a total of 3 Rounds to get the highest Score possible </h3>
<h3> In each round if you roll a total of more then 20 you loose all your points and only keep the starting number </h3> 
<h3> You can choose to not move on to the next round and keep your score</h3>
<h3> if you  are oaky with your total score click "DONE" </h3>
<h3>  If you want to continue click "Start Round 1" </h3>
`
document.getElementById('conBtn').style.visibility = 'visible';
document.getElementById('endBtn1').style.visibility = 'visible';

// Where User gets their starting Number end
// -------------------------------------------------------------------------- 

}

// SOME POINT IMPLEMENT A HIGHSCORE FUNCTION

// ------------- END FUNCTIONS start ----------------
// ends after starting number
function end1(){
//removes the rules
document.getElementById("firstBut").innerHTML=` Congrats your total score is ${StartingNum}. click "TRY AGAIN" to try and get a higher score`
// removes the start round 1 button
document.getElementById('conBtn').style.visibility = 'hidden';
document.getElementById('endBtn1').style.visibility = 'hidden';
}

// ends after Round 1. final score is starting num plus round 1 score
function end2(){
document.getElementById("results").innerHTML=` Congrats your total score is ${round1Score}. click "TRY AGAIN" to try and get a higher score`
// remove Round 2 buttons
document.getElementById('conBtn2').style.visibility = 'hidden';
document.getElementById('endBtn2').style.visibility = 'hidden';
}


// -------------END FUNCTIONS end -------------- 

// START 1
function start(){
// Start of 1st Round
// --------------------------------
document.getElementById("firstBut").innerHTML=``
document.getElementById('endBtn1').style.visibility = 'hidden';
// document.getElementById("startNum2").innerHTML = `<h3> Starting Number: ${startNumt} `;
document.getElementById("rules").innerHTML = `<h3> Round 1 </h3>`

// rolls dice for the user's round 1 score
const diceOne = Math.floor(Math.random() * 6) + 1;
const diceTwo = Math.floor(Math.random() * 6) + 1;
const diceThree = Math.floor(Math.random() * 6) + 1;
const diceFour = Math.floor(Math.random() * 6) + 1;
const diceFive = Math.floor(Math.random() * 6) + 1;
const diceSix = Math.floor(Math.random() * 6) + 1;

// displays the results from the round 1 dice roll
diceDisplay1.textContent = ` Dice 1: ${diceOne}    Dice 2: ${diceTwo}  Dice 3: ${diceThree}`

diceDisplay2.textContent = ` Dice 4: ${diceFour}    Dice 5: ${diceFive}  Dice 6: ${diceSix}`

const totalScore = StartingNum + diceOne + diceTwo + diceThree + diceFour + diceFive + diceSix;
const totalRoll = diceOne + diceTwo + diceThree + diceFour + diceFive + diceSix;
round1Score = totalScore
totalDiceDisplay.textContent  =` Total Dice Roll: ${totalRoll}`

document.getElementById('conBtn').style.visibility = 'hidden';
//--------------------------------------------------------
// depending on the results from the total dice roll
// what gets displayed next will be determined
// determines if the user can move on to Round 2
if(totalRoll > 20){
    document.getElementById("results").innerHTML = `<h4> Sorry you're dice roll was greater than 20 </h4> 
    <h4> Your final score is : ${StartingNum}</h4>`
}
else{
    totalDisplay.textContent = `Total Score (Diceroll + starting Number): ${totalScore}`
    
 document.getElementById("results").innerHTML = `<h4>  The dice total is under 20. </h4>
  <h4> You can choose to stop and keep your total score of ${round1Score}. or move on to Round 2 </h4>` 
document.getElementById('conBtn2').style.visibility = 'visible';
document.getElementById('endBtn2').style.visibility = 'visible';
}


// End of 1st Round
//------------------------------
}

// START 2
function start2(){
   
    // hide round 2 Buttons
document.getElementById('conBtn2').style.visibility = 'hidden';
document.getElementById('endBtn2').style.visibility = 'hidden';

// put a title for Round 2 and a line
document.getElementById("results").innerHTML = `<h3> ---------------------------------- </h3>
<h3> Round 2 </h3>`

// round 2 Dice
const diceOne = Math.floor(Math.random() * 6) + 1;
const diceTwo = Math.floor(Math.random() * 6) + 1;
const diceThree = Math.floor(Math.random() * 6) + 1;
const diceFour = Math.floor(Math.random() * 6) + 1;
const diceFive = Math.floor(Math.random() * 6) + 1;
const diceSix = Math.floor(Math.random() * 6) + 1;

const totalRoll = diceOne + diceTwo + diceThree + diceFour + diceFive + diceSix;
const totalScore = round1Score + StartingNum + totalRoll;


// display of round 2 Dice
    document.getElementById("diceFirst2").textContent = ` Dice 1: ${diceOne}    Dice 2: ${diceTwo}  Dice 3: ${diceThree}`

    document.getElementById("diceSecond2").textContent = ` Dice 4: ${diceFour}    Dice 5: ${diceFive}  Dice 6: ${diceSix}`

    document.getElementById("totalDice2").innerHTML = ` <h4>Total Dice Roll: ${totalRoll}</h4>`

    if(totalRoll > 20){
    document.getElementById("results2").innerHTML = `<h4> Sorry you're dice roll was greater than 20 </h4> 
    <h4> Your final score is : ${StartingNum}</h4>`
}
else{
    document.getElementById.innerHTML = ` <h4> Total Score (Diceroll + starting Number): ${totalScore} </h4>`
    
 document.getElementById("results2").innerHTML = `<h4>  The dice total is under 20. </h4>
  <h4> You can choose to stop and keep your total score of ${totalScore}. or move on to Round 3 </h4>` 
  document.getElementById('conBtn3').style.visibility = 'visible';
document.getElementById('endBtn3').style.visibility = 'visible';
// create buttons to be done or advance to Round 3
}
}

function start3(){
    // hey
}