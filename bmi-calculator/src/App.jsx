import { useEffect, useState } from "react";
import "./App.css";
import { useMemo } from "react";

function App() {
  const calculateBMI = () => {
    const calculatedHeight = selectedHeight / 100;
    return (selectedWeight / (calculatedHeight * calculatedHeight)).toFixed(1);
  };

  const [selectedWeight, setSelectedWeight] = useState(50);
  const [selectedHeight, setSelectedHeight] = useState(200);
  const [output, setOutput] = useState(calculateBMI);

  const handleWeightChange = (event) => {
    const weight = event.target.value;
    setSelectedWeight(weight);
  };

  const handleHeightChange = (event) => {
    const height = event.target.value;
    setSelectedHeight(height);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOutput(calculateBMI());
    }, 400);

    return () => {clearTimeout(timeout)};
  }, [selectedHeight, selectedWeight]);

  return (
    <div className="app">
      <p className="heading">Project 7: BMI CALCULATOR</p>
      <section className="main app-font">
        <label htmlFor="weight">Weight: {selectedWeight}kg</label>
        <input
          type="range"
          min="40"
          step="1"
          max="220"
          id="weight"
          value={selectedWeight}
          onChange={(event) => handleWeightChange(event)}
        />
        <label htmlFor="height">Height: {selectedHeight}cm</label>
        <input
          type="range"
          step="1"
          min="140"
          max="220"
          id="height"
          value={selectedHeight}
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
