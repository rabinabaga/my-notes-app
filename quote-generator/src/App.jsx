import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jsObjectArray, setJsObjectArray] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({ text: "", author: "" });

  const generateNewQuote = () => {
    const newQuote =
      jsObjectArray[Math.floor(Math.random() * jsObjectArray.length + 1)];
    setCurrentQuote(newQuote);
  };
 

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setJsObjectArray(json);
        setCurrentQuote(json[0]);
      });
  }, []);

return (

    <div className="app">
      <p className="heading">Project 3: Quote Generator</p>
      <section className="main">
        <button className="new-quote-button" onClick={generateNewQuote}>
          New Quote
        </button>
        <p className="quote">{currentQuote?.text}</p>
        <i className="author">- {currentQuote?.author}</i>
      </section>
    </div>

);
}
export default App;
