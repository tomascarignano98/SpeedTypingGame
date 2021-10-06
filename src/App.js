import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const STARTING_TIME = 20;

  const [text, setText] = useState('');
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(STARTING_TIME);
  const inputRef = useRef(null);
  const btnRef = useRef(null);

  function startGame() {
    setIsTimeRunning(true);
    setText('');
    setTimeLeft(STARTING_TIME);
    setWordCount(0);

    inputRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);

    const count = calculateWordCount();
    setWordCount(count);

    btnRef.current.focus();
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function calculateWordCount() {
    const wordsArr = text.trim().split(' ');
    console.log(wordsArr);
    const wordCount = wordsArr[0] === '' ? 0 : wordsArr.length;
    return wordCount;
  }

  useEffect(() => {
    if (isTimeRunning && timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    } else if (timeLeft === 0) {
      endGame();
    }
  }, [timeLeft, isTimeRunning]);

  useEffect(() => {
    btnRef.current.focus();
  }, []);

  return (
    <>
      <h1>Title</h1>
      <textarea
        placeholder="Text area to type in"
        value={text}
        onChange={handleChange}
        ref={inputRef}
      />
      <h2>Time remaining: {timeLeft}</h2>
      <button onClick={startGame} ref={btnRef}>
        Start
      </button>
      <h2>Word count: {wordCount}</h2>
    </>
  );
}

export default App;
