import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const [timeLeft, setTimeLeft] = useState(3);
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  function handleChange(event) {
    setText(event.target.value);
  }

  function calculateWordCount() {
    const wordsArr = text.trim().split(' ');
    const wordCount = wordsArr[0] === '' ? 0 : wordsArr.length;
    console.log(wordCount);
  }

  return (
    <>
      <h1>Title</h1>
      <textarea
        placeholder="Text area to type in"
        value={text}
        onChange={handleChange}
      />
      <h2>Time remaining: {timeLeft}</h2>
      <button onClick={() => calculateWordCount(text)}>Start Game</button>
      <h2>Word count</h2>
    </>
  );
}

export default App;
