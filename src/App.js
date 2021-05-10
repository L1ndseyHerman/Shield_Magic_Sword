import './App.css';
import React, { useState } from 'react';

/*function chooseRock() 
{
  var computerNumber = chooseComputerRandomNumber();
  checkWinLooseTie(0, computerNumber);
}*/

/*function choosePaper() 
{
  var computerNumber = chooseComputerRandomNumber();
  checkWinLooseTie(1, computerNumber);
}*/

function chooseScissors() 
{
  var computerNumber = chooseComputerRandomNumber();
  checkWinLooseTie(2, computerNumber);
}

function chooseComputerRandomNumber()
{
  //  There isn't an "int" datatype in JavaScript like there is in Java. Math.floor() makes it an int.
  return Math.floor(Math.random() * 3);  
}

function checkWinLooseTie(playerChoiceNumber, computerChoiceNumber)
{
  //  0 = Rock, 1 = Paper, 2 = Scissors
  if (playerChoiceNumber === 0 && computerChoiceNumber === 0)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Rock and Computer chose Rock. Tie.";
    /*return (
      <p id="thePar">Player1 chose Rock and Computer chose Rock. Tie.</p>
    );*/
  }
  else if (playerChoiceNumber === 0 && computerChoiceNumber === 1)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Rock and Computer chose Paper. Computer wins!";
    /*return (
      <p id="thePar">Player1 chose Rock and Computer chose Paper. Computer wins!</p>
    );*/
  }
  else if (playerChoiceNumber === 0 && computerChoiceNumber === 2)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Rock and Computer chose Scissors. Player1 wins!";
    /*return (
      <p id="thePar">Player1 chose Rock and Computer chose Scissors. Player1 wins!</p>
    );*/
  }

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
}

/*function setUserChoice()
{
  const [count, setRock] = useState(0);
  <p>You chose {count} times</p>
}*/

function App() 
{

  const [userChoice, setUserChoice] = useState(0);

  return (
    <main>  
      <h1>Rock-Paper-Scissors</h1>
      <button onClick={() => setUserChoice(0)}>Rock</button>
      <button onClick={() => setUserChoice(1)}>Paper</button>
      <button onClick={chooseScissors}>Scissors</button>
      

      <p>userChoice is {userChoice}</p>
      <p id="thePar">Try to beat the computer at Rock-Paper-Scissors.</p>
      <p>And check out <a id="aLink1" href="https://l1ndseyherman.github.io/">My Other Website</a>.</p>
      <footer id="theFooter">Current PWA version is 1.0.0, updated 05/10/21</footer>
    </main>
  );
}

export default App;
