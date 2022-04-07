import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  useEffect (() => {
    console.log('use Effect basics')
  })
  console.log('render now')
  return <h2>useEffect Basics</h2>;
};

export default UseEffectBasics;
