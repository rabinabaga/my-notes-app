import { useRef } from "react";
import "./App.css";
import { useState } from "react";
import { data } from "./data";
import Card from "./Card";

export default function App() {
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const [dataCards, setDataCards] = useState(data);

  const removeCard = (key) => {
    let cards = dataCards.filter((datum) => datum.title !== key);
    setDataCards(cards);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    let cards = [...dataCards];
    cards.push({
      title: title,
      description: description,
    });
    setDataCards(cards);
    form.reset();
  };

  // const addCard = () => {
  //   let cards = [...dataCards];
  //   cards.push({
  //     title: `${titleRef.current.value}`,
  //     description: `${descriptionRef.current.value}`,
  //   });
  //   setDataCards(cards);
  //   titleRef.current.value = "";
  //   descriptionRef.current.value = "";
  // };
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
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="title"
              ref={titleRef}
              className="input-add-notes"
              placeholder="Add title"
            />
            <input
              type="text"
              name="description"
              ref={descriptionRef}
              className="input-add-notes description"
              placeholder="Add Description"
            />
            <button
              type="submit"
              // onClick={addCard}
              className="lightgreen-background normal-button submit-button"
            >
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
