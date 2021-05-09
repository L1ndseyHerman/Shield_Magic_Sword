
import React from "react";

//  This doesn't appear. Why not? 
//<p>A static paragraph.</p>

function chooseRock() 
{
  var computerNumber = chooseComputerRandomNumber();
  checkWinLooseTie(0, computerNumber);
}

function choosePaper() 
{
  var computerNumber = chooseComputerRandomNumber();
  checkWinLooseTie(1, computerNumber);
}

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
  }
  else if (playerChoiceNumber === 0 && computerChoiceNumber === 1)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Rock and Computer chose Paper. Computer wins!";
  }
  else if (playerChoiceNumber === 0 && computerChoiceNumber === 2)
  {
    document.querySelector("#thePar").textContent = "Player1 chose Rock and Computer chose Scissors. Player1 wins!";
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

function App() 
{
  return (
    <>
      <div>
      <a id="aLink1" href="https://l1ndseyherman.github.io/">My Other Website</a>
        <button onClick={chooseRock}>Rock</button>
        <button onClick={choosePaper}>Paper</button>
        <button onClick={chooseScissors}>Scissors</button>
        <p id="thePar">Try to beat the computer at Rock-Paper-Scissors.</p>
      </div>
    </>
  );
}

export default App;
