import React, { useState } from "react";

function Input({ input, setInput }) {
  return (
    <div>
      <input onChange={setInput}></input>
      {input}
    </div>
  );
}

export default Input;
