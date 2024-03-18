import { useState } from "react";
import "./App.css";
import Question from "./Question";

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 2,
    title: "How much does it cost?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 3,
    title: "When can I get it?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
];

function App() {

  return (
    <>
      <p className="heading">Project 2: FAQ/Accordion</p>
      <section className="main">
        <p className="heading main-heading">Frequently Asked Questions</p>
        {questions.map((question) => {
          return <Questionestion question={question} />;
        })}
      </section>
    </>
  );
}

export default App;

