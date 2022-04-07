import React, { useState} from "react";

function UseStateBasics () {
  const [text, setText] = useState('randon title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className="btn" onClick={handleClick}>change title</button>
    </React.Fragment>

  );
};

export default UseStateBasics;