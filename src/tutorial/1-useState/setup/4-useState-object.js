import React, { useState } from "react";

function UseStateObject () {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  function changeMessage () {
    setPerson ({ ...person, message:'hello world'});
  };
  
  return(
    <>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>{person.message}</h1>
    <button className="btn" onClick={changeMessage}> change message</button>
    </>

  )
}

export default UseStateObject;
