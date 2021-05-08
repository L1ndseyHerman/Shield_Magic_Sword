
import React from "react";

//  This doesn't appear. Why not? 
//<p>A static paragraph.</p>

function chooseRock() 
{
  document.querySelector("#thePar").textContent = "You clicked the rock button!";
  chooseComputerRandomNumber();
}

function choosePaper() 
{
  document.querySelector("#thePar").textContent = "You clicked the paper button!";
  chooseComputerRandomNumber();
}

function chooseScissors() 
{
  document.querySelector("#thePar").textContent = "You clicked the scissors button!";
  chooseComputerRandomNumber();
}

function chooseComputerRandomNumber()
{
  //  There isn't an "int" datatype in JavaScript like there is in Java. Math.floor() makes it an int.
  var compNumber = Math.floor(Math.random() * 3);  
  document.querySelector("#compPar").textContent = compNumber;
}

function App() 
{
  return (
    <>
      <div>
        <button onClick={chooseRock}>Rock</button>
        <button onClick={choosePaper}>Paper</button>
        <button onClick={chooseScissors}>Scissors</button>
        <p id="thePar">Some text pls work</p>
        <p id="compPar">Comp par</p>
      </div>
    </>
  );
}

export default App;
