import { useState } from "react";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [selectedWeight, setSelectedWeight] = useState(50);
  const [selectedHeight, setSelectedHeight] = useState(200);

  const handleWeightChange = (event) => {
    const timeout = null; 

    setTimeout(() => {
      const weight = event.target.value;
      setSelectedWeight(weight);
    }, 800);
  };
  const handleHeightChange = (event) => {
    setTimeout(() => {
      const height = event.target.value;
      setSelectedHeight(height);
    }, 200);
  };

  const output = useMemo(() => {
    const calculatedHeight = selectedHeight / 100;
    return (selectedWeight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [selectedWeight, selectedHeight]);

  return (
    <div className="app">
      <p className="heading">Project 7: BMI CALCULATOR</p>
      <section className="main app-font">
        <label for="weight">Weight: {selectedWeight}kg</label>
        <input
          type="range"
          min="40"
          step="1"
          max="220"
          id="weight"
          // value={selectedWeight}
          onChange={(event) => handleWeightChange(event)}
        />
        <label for="height">Height: {selectedHeight}cm</label>
        <input
          // value={selectedHeight}
          type="range"
          step="1"
          min="140"
          max="220"
          id="height"
          onChange={(event) => handleHeightChange(event)}
        />
      </section>
      <section className="result app-font">
        <p> Your BMI is:</p>
        <p className="display-result">{output}</p>
      </section>
    </div>
  );
}

export default App;
