import React, { useState } from "react";

function CharacterInput() {
  const [unicode, setUnicode] = useState("");

  const handleChange = (event) => {
    setUnicode(event.target.value.charCodeAt(0).toString(16));
  };

  return (
    <div className="ascii-code-finder">
      <h1>Unicode</h1>

      <div></div>

      <input type="text" id="character" onChange={handleChange} />
      <p>{unicode}</p>
    </div>
  );
}

export default CharacterInput;
