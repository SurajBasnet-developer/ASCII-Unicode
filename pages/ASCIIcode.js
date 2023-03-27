import React, { useState } from "react";

function AsciiCodeFinder() {
  const [asciiCode, setAsciiCode] = useState("");

  const handleChange = (event) => {
    setAsciiCode(event.target.value.charCodeAt(0));
  };

  return (
    <div className="ascii-code-finder">
      <h1>ASCII Value</h1>

      <div></div>

      <input type="text" id="character" onChange={handleChange} />
      <p>{asciiCode}</p>
    </div>
  );
}

export default AsciiCodeFinder;
