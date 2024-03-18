import { useState } from "react";
import './App.css'

function App() {
  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    activeIndex > 0
      ? setActiveIndex(activeIndex - 1)
      : setActiveIndex(images.length - 1);
  };

  const handleNextClick = () => {
    activeIndex < images.length - 1
      ? setActiveIndex(activeIndex + 1)
      : setActiveIndex(0);
  };
  return (
    <>
      <p className="heading">Project 1: Carousel</p>
      <section className="carousel">
        <button className="changeImageButton" onClick={handlePrevClick}>&larr;</button>
        <img src={images[activeIndex]} alt="" />
        <button className="changeImageButton"  onClick={handleNextClick}>&rarr;</button>
      </section>
    </>
  );
}

export default App;
