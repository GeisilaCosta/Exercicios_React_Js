import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const colors = ['#f7069b', '#08fdfd', '#0834f5', '#b400fc'];
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const changeColor = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(newColor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = currentColor;
  }, [currentColor]);

  return (
    <div className="App">
      <h1>Cor de Fundo: {currentColor}</h1>
      <button onClick={changeColor}>Mudar Cor</button>
    </div>
  );
};

export default App;
