import { useRef } from "react";
import "./App.css";
import { useState } from "react";
import { data } from "./data";
import Card from './Card'

export default function App() {
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const [dataCards, setDataCards] = useState(data);

  const removeCard = (key) => {
    let cards = dataCards.filter((datum) => datum.title !== key);
    setDataCards(cards);
  };

  const addCard = () => {
    let cards = [...dataCards];
    cards.push({
      title: `${titleRef.current.value}`,
      description: `${descriptionRef.current.value}`,
    });
    setDataCards(cards);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };
  return (
    <div className="top-container">
      <div className="header darkgreen-background header-font">React Notes</div>
      <div className="lightgreen-background main-section">
        {dataCards.map((datum) => {
          return (
            <Card
              key={datum.title}
              closeButtonHandler={removeCard}
              datum={datum}
            />
          );
        })}
        <div className="add-notes-section">
          <p className="title-font">Add Notes</p>
          <input
            type="text"
            ref={titleRef}
            className="input-add-notes"
            placeholder="Add title"
          />
          <input
            type="text"
            ref={descriptionRef}
            className="input-add-notes description"
            placeholder="Add Description"
          />
          <button
            onClick={addCard}
            className="lightgreen-background normal-button submit-button"
          >
            {" "}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
