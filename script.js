// Starting Dice Start
// Controlls the pieces for the dice
const diceDisplay1 = document.getElementById("diceFirst");
const diceDisplay2 = document.getElementById("diceSecond");
const  startNumDisplay = document.getElementById("startNum");
const totalDisplay = document.getElementById("totalScore");
const totalDiceDisplay = document.getElementById("totalDice");
const startNumDisplay2 = document.getElementById("startNum2");


// buttons start ----------

// random buttons 
document.getElementById("rulesBtn").style.visibility = 'hidden';

//Round 1
document.getElementById('conBtn').style.visibility = 'hidden';
// Round 2 buttons
document.getElementById('conBtn2').style.visibility = 'hidden';
document.getElementById('endBtn2').style.visibility = 'hidden';
// Round 3 buttons
document.getElementById('conBtn3').style.visibility = 'hidden';
document.getElementById('endBtn3').style.visibility = 'hidden';
// buttons end ----------------------

// Variables
var StartingNum = 0;
var highScore = 0;
var round1Score = 0;
var round2Score = 0;
var round3Score = 0;

// function highScore(r){
//     // This function will be placed in each end to determine the highscore
// }

function roll(){
//----------------------------------------------------------
document.getElementById('rules').innerHTML = `      `
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

document.getElementById("startNum").innerHTML = `<h3> Starting Number: ${StartingNum} `;


document.getElementById('roll').style.visibility = 'hidden';

document.getElementById("firstBut").innerHTML = `<h3> You now have your staring number. The Rules are: </h3>
<h3> You will have a total of 3 Rounds to get the highest Score possible </h3>
<h3> In each round if the six roll a total of more then 20 you loose all your points and only keep the starting number </h3> 
<h3> You can choose to not move on to the next round and keep your score by pressing "DONE" at the end of each round</h3>
<h3>  After clicking "Start Round 1" the rules will disappear  </h3>
<h3> To make them appear again click the "RULES" button </h3>
`
document.getElementById('conBtn').style.visibility = 'visible';
document.getElementById('endBtn1').style.visibility = 'visible';

// Where User gets their starting Number end
// -------------------------------------------------------------------------- 

}

// SOME POINT IMPLEMENT A HIGHSCORE FUNCTION



// ------------- END FUNCTIONS start ----------------
// ends after starting number

// ends after Round 1. final score is starting num plus round 1 score
function end2(){
document.getElementById("results").innerHTML=` Congrats your total score is ${round1Score}. click "TRY AGAIN" to try and get a higher score`
// remove Round 2 buttons
document.getElementById('conBtn2').style.visibility = 'hidden';
document.getElementById('endBtn2').style.visibility = 'hidden';
}

function end3(){
   document.getElementById("results").innerHTML=` Congrats your total score is ${round2Score}. click "TRY AGAIN" to try and get a higher score`
// remove Round 3 buttons
document.getElementById('conBtn3').style.visibility = 'hidden';
document.getElementById('endBtn3').style.visibility = 'hidden'; 
}

// -------------END FUNCTIONS end -------------- 

// rules function start -----
function rules(){
  document.getElementById("firstBut").innerHTML = `<h3> You now have your staring number. The Rules are: </h3>
<h3> You will have a total of 3 Rounds to get the highest Score possible </h3>
<h3> In each round if the six roll a total of more then 20 you loose all your points and only keep the starting number </h3> 
<h3> You can choose to not move on to the next round and keep your score by pressing "DONE" at the end of each round</h3>
`  
}

// rules function ends ----

// START 1
function start(){
// Start of 1st Round
// --------------------------------
document.getElementById("firstBut").innerHTML = ` `
document.getElementById("rulesBtn").style.visibility = 'visible';

// document.getElementById("startNum2").innerHTML = `<h3> Starting Number: ${startNumt} `;
document.getElementById("rules").innerHTML = `<h3> Round 1 </h3>`

// rolls dice for the user's round 1 score
const diceOne = Math.floor(Math.random() * 6) + 1;
const diceTwo = Math.floor(Math.random() * 6) + 1;
const diceThree = Math.floor(Math.random() * 6) + 1;
const diceFour = Math.floor(Math.random() * 6) + 1;
const diceFive = Math.floor(Math.random() * 6) + 1;
const diceSix = Math.floor(Math.random() * 6) + 1;



// Makes the starting number dice disappear
diceDisplay1.textContent = ``
diceDisplay2.textContent = ``

// displays the results from the round 1 dice roll
document.getElementById("dicePlace1").innerHTML = `<h4> Dice 1: ${diceOne}    Dice 2: ${diceTwo}  Dice 3: ${diceThree} </h4>`

document.getElementById("dicePlace2").innerHTML = `<h4> Dice 4: ${diceFour}    Dice 5: ${diceFive}  Dice 6: ${diceSix} </h4>`


const totalScore = StartingNum + diceOne + diceTwo + diceThree + diceFour + diceFive + diceSix;
const totalRoll = diceOne + diceTwo + diceThree + diceFour + diceFive + diceSix;
round1Score = totalScore
totalDiceDisplay.innerHTML =`<h4> Total Dice Roll: ${totalRoll} </h4>`

document.getElementById('conBtn').style.visibility = 'hidden';
//--------------------------------------------------------
// depending on the results from the total dice roll
// what gets displayed next will be determined
// determines if the user can move on to Round 2
if(totalRoll > 20){
    document.getElementById("endResults1").innerHTML = `<h4> Sorry you're dice roll was greater than 20 </h4> 
    <h4> Your final score is : ${StartingNum}</h4>
    <h4> Click "TRY AGAIN" to try an get a higher score </h4>
<a href="page.html"><button>TRY AGAIN </button> </a>`

}
else{
    totalDisplay.innerHTML = ` <h4> Total Score (Diceroll + starting Number): ${totalScore} </h4>`
    
 document.getElementById("endResults1").innerHTML = `<h4>  The dice total is under 20. </h4>
  <h4> You can choose to stop and keep your total score of ${round1Score}. or move on to Round 2 </h4>` 
document.getElementById('conBtn2').style.visibility = 'visible';
document.getElementById('endBtn2').style.visibility = 'visible';
}


// End of 1st Round
//------------------------------
}

// START 2
function start2(){
document.getElementById("begin").style.visibility = `hidden`; 

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
round2Score = totalScore


// display of round 2 Dice
    document.getElementById("diceFirst2").innerHTML = ` <h4> Dice 1: ${diceOne}    Dice 2: ${diceTwo}  Dice 3: ${diceThree} </h4>`

    document.getElementById("diceSecond2").innerHTML = `<h4> Dice 4: ${diceFour}    Dice 5: ${diceFive}  Dice 6: ${diceSix} </h4>`

    document.getElementById("startNum2").innerHTML = `<h3> Starting Number: ${StartingNum} `;

    

    document.getElementById("totalDice2").innerHTML = ` <h4>Total Dice Roll: ${totalRoll}</h4>`

    if(totalRoll > 20){
    document.getElementById("endResults2").innerHTML = `<h4> Sorry you're dice roll was greater than 20 </h4> 
    <h4> Your final score is : ${StartingNum}</h4> 
     <h4> Click "TRY AGAIN" to try an get a higher score </h4>
     <a href="page.html"><button>TRY AGAIN </button> </a>`
    //  document.getElementById("tryAgain2").style.visibility = 'hidden';
}
else{
    document.getElementById("totalScore2").innerHTML = ` <h4> Round 2 Total Score (Diceroll + starting Number): ${round2Score} </h4>`
    
 document.getElementById("endResults2").innerHTML = `<h4>  The dice total is under 20. </h4>
  <h4> You can choose to stop and keep your total score of ${totalScore}. or move on to Round 3 </h4>` 
  document.getElementById('conBtn3').style.visibility = 'visible';
document.getElementById('endBtn3').style.visibility = 'visible';
// create buttons to be done or advance to Round 3
}
}
// Start Round 3
function start3(){
document.getElementById("round2").style.visibility = `hidden`; 
    // hide round 3 Buttons
document.getElementById('conBtn3').style.visibility = 'hidden';
document.getElementById('endBtn3').style.visibility = 'hidden';


// put a title for Round 3 and a line
document.getElementById("results2").innerHTML = `<h3> ---------------------------------- </h3>
<h3> Round 3 </h3>`

// round 3 Dice
const diceOne = Math.floor(Math.random() * 6) + 1;
const diceTwo = Math.floor(Math.random() * 6) + 1;
const diceThree = Math.floor(Math.random() * 6) + 1;
const diceFour = Math.floor(Math.random() * 6) + 1;
const diceFive = Math.floor(Math.random() * 6) + 1;
const diceSix = Math.floor(Math.random() * 6) + 1;

const totalRoll = diceOne + diceTwo + diceThree + diceFour + diceFive + diceSix;
const totalScore = round1Score + round2Score + StartingNum + totalRoll;
round3Score = totalScore

document.getElementById("startNum3").innerHTML = `<h3> Starting Number: ${StartingNum} `;

// display of round 3 Dice
    document.getElementById("diceFirst3").textContent = ` Dice 1: ${diceOne}    Dice 2: ${diceTwo}  Dice 3: ${diceThree}`

    document.getElementById("diceSecond3").textContent = ` Dice 4: ${diceFour}    Dice 5: ${diceFive}  Dice 6: ${diceSix}`

    document.getElementById("totalDice3").innerHTML = ` <h4>Total Dice Roll: ${totalRoll}</h4>`

    if(totalRoll > 20){
    document.getElementById("results3").innerHTML = `<h4> Sorry you're dice roll was greater than 20 </h4> 
    <h4> Your final score is : ${StartingNum}</h4>
     <h4> Click "TRY AGAIN" to try an get a higher score </h4>
     <a href="page.html"><button>TRY AGAIN </button> </a>`
    //  document.getElementById("tryAgain3").style.visibility = 'hidden';
}
else{
    document.getElementById("totalScore3").innerHTML = ` <h4> Round 3 
    Total Score (Diceroll + starting Number): ${round3Score} </h4>`
    
 document.getElementById("results3").innerHTML = `<h4>  The dice total is under 20. </h4>
  <h4> congrats you have a final score of: ${round3Score} </h4>` 


}

}