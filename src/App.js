import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables
  const [advice, setAdvice] = useState('');
  const [counter, setCounter] = useState(0);
  const [darkThemeHandler, setDarkThemeHandler] = useState(false); 

  // Fetching API
  const adviceBtn = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const { slip: { advice } } = await response.json();
      setAdvice(advice);
      setCounter(counter + 1);
      setDarkThemeHandler(!darkThemeHandler)
    } catch (error) {
      console.error('Error fetching advice:', error); // Added error logging
    }
  };

  return (
    <div style={{
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      height: '100vh',
      margin: '0',  // Ensure no external margin that might cause scrolling
      overflow: 'hidden', // Prevent overflow
      backgroundColor: darkThemeHandler ? '#333' : '#f0f0f0',
    }}>
      {/* Main heading displaying the advice */}
      <h1 style={{
        fontSize: '40px',
        color: darkThemeHandler ? 'white' : 'black',
      }}>{advice}</h1>

      {/* Paragraph displaying the advice counter */}
      <p style={{
        fontSize: '20px',
        color: darkThemeHandler ? 'white' : 'black',
        marginTop: '10px',
      }}>Advice# {counter}</p>

      {/* Button to fetch new advice */}
      <button onClick={adviceBtn} style={{
        fontSize: '15px',
        fontWeight: 'bold',
        padding: '10px 20px',
        marginTop: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 2, 4)',
        background: 'transparent',
        borderRadius: '10px',
        color: darkThemeHandler ? 'white' : 'black',
        cursor: 'pointer',
      }}>Get Advice</button>
    </div>
  );
}

export default App;
