import './App.css';
//import React from 'react';
import React, { useState } from 'react';

/*function chooseRock() 
{
  var computerNumber = chooseComputerRandomNumber();
  //checkWinLooseTie(0, computerNumber);
}

function choosePaper() 
{
  var computerNumber = chooseComputerRandomNumber();
  //checkWinLooseTie(1, computerNumber);
}

function chooseScissors() 
{
  var computerNumber = chooseComputerRandomNumber();
  //checkWinLooseTie(2, computerNumber);
}*/

/*function chooseComputerRandomNumber()
{
  //  There isn't an "int" datatype in JavaScript like there is in Java. Math.floor() makes it an int.
  return Math.floor(Math.random() * 3);  
}*/

/*function checkWinLooseTie(playerChoiceNumber, computerChoiceNumber)
{
  //  0 = Rock, 1 = Paper, 2 = Scissors
  if (playerChoiceNumber === 0 && computerChoiceNumber === 0)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Rock and Computer chose Rock. Tie.";
    /*return (
      <p id="thePar">Player1 chose Rock and Computer chose Rock. Tie.</p>
    );*/
 /* }
  else if (playerChoiceNumber === 0 && computerChoiceNumber === 1)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Rock and Computer chose Paper. Computer wins!";
    /*return (
      <p id="thePar">Player1 chose Rock and Computer chose Paper. Computer wins!</p>
    );*/
  /*}
  else if (playerChoiceNumber === 0 && computerChoiceNumber === 2)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Rock and Computer chose Scissors. Player1 wins!";
    /*return (
      <p id="thePar">Player1 chose Rock and Computer chose Scissors. Player1 wins!</p>
    );*/
  /*}

  else if (playerChoiceNumber === 1 && computerChoiceNumber === 0)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Paper and Computer chose Rock. Player1 wins!";
  }
  else if (playerChoiceNumber === 1 && computerChoiceNumber === 1)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Paper and Computer chose Paper. Tie.";
  }
  else if (playerChoiceNumber === 1 && computerChoiceNumber === 2)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Paper and Computer chose Scissors. Computer wins!";
  }

  else if (playerChoiceNumber === 2 && computerChoiceNumber === 0)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Scissors and Computer chose Rock. Computer wins!"
  }
  else if (playerChoiceNumber === 2 && computerChoiceNumber === 1)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Scissors and Computer chose Paper. Player1 wins!"
  }
  else if (playerChoiceNumber === 2 && computerChoiceNumber === 2)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Scissors and Computer chose Scissors. Tie."
  }
}*/

/*function setUserChoice()
{
  const [count, setRock] = useState(0);
  <p>You chose {count} times</p>
}*/

function makeComputerChoice()
{
  const computerNumber = Math.floor(Math.random() * 3); 

  if (computerNumber === 0)
  {
    return "Rock";
  }
  else if (computerNumber === 1)
  {
    return "Paper";
  }
  else 
  {
    return "Scissors";
  }
}

function checkWinLooseTie(userChoice, computerChoice)
{
  if (userChoice === "Rock" && computerChoice === "Rock")
  {
    return "Tie.";
  }
  else if (userChoice === "Rock" && computerChoice === "Paper")
  {
    return "Computer wins!";
  }
  else if (userChoice === "Rock" && computerChoice === "Scissors")
  {
    return "Player1 wins!";
  }

  else if (userChoice === "Paper" && computerChoice === "Rock")
  {
    return "Player1 wins!";
  }
  else if (userChoice === "Paper" && computerChoice === "Paper")
  {
    return "Tie.";
  }
  else if (userChoice === "Paper" && computerChoice === "Scissors")
  {
    return "Computer wins!";
  }

  else if (userChoice === "Scissors" && computerChoice === "Rock")
  {
    return "Computer wins!";
  }
  else if (userChoice === "Scissors" && computerChoice === "Paper")
  {
    return "Player1 wins!";
  }
  else if (userChoice === "Scissors" && computerChoice === "Scissors")
  {
    return "Tie.";
  }

  return "This is an error. Click a button to start a game.";
}

function App() 
{

  const [userChoice, setUserChoice] = useState("An Error");
    //  There isn't an "int" datatype in JavaScript like there is in Java. Math.floor() makes it an int.
  //const computerChoice = Math.floor(Math.random() * 3);  
  //const [computerChoice, chooseComputerRandomNumber] = useState(-1);
  const computerChoice = makeComputerChoice();
  const winLooseTieText = checkWinLooseTie(userChoice, computerChoice);

  return (
    <main>  
      <h1>Rock-Paper-Scissors</h1>
      <button onClick={() => setUserChoice("Rock")}>Rock</button>
      <button onClick={() => setUserChoice("Paper")}>Paper</button>
      <button onClick={() => setUserChoice("Scissors")}>Scissors</button>
      <p>Player1 chose {userChoice} and Computer chose {computerChoice}. {winLooseTieText}</p>
      <p id="thePar">Try to beat the computer at Rock-Paper-Scissors. You cannot make the same choice more than
      once in a row.</p>
      <p>And check out <a id="aLink1" href="https://l1ndseyherman.github.io/">My Other Website</a>.</p>
      <footer id="theFooter">Current PWA version is 1.0.0, updated 05/10/21</footer>
    </main>
  );
}

export default App;
