import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <h1>Title</h1>
      <textarea
        placeholder="Text area to type in"
        value={text}
        onChange={handleChange}
      />
      <h2>Time remaining</h2>
      <button>Start Game</button>
      <h2>Word count</h2>
    </>
  );
}

export default App;
