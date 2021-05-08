
import React from "react";

//  This doesn't appear. Why not? 
//<p>A static paragraph.</p>

function chooseRock() 
{
  document.querySelector("#thePar").textContent = "You clicked the rock button!";
}

function choosePaper() 
{
  document.querySelector("#thePar").textContent = "You clicked the paper button!";
}

function chooseScissors() 
{
  document.querySelector("#thePar").textContent = "You clicked the scissors button!";
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
      </div>
    </>
  );
}

export default App;
