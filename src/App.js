
import React from "react";

function clickMe() 
{
  document.querySelector("#thePar").textContent = "You clicked the button!";
}

function App() {
  return (
    <>
      <div>
        <button onClick={clickMe}>Button</button>
        <p id="thePar">Some text pls work</p>
      </div>
    </>
  );
}

export default App;
