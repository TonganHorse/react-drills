import React, { useState } from "react";
import "./App.css";
import Input from "./Input";

function App() {
  const [input, setInput] = useState("");
  function inputHandler(event) {
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <Input input={input} setInput={inputHandler} />
    </div>
  );
}

export default App;
