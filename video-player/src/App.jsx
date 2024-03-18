import { useRef, useState } from "react";
import "./App.css";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState(videos.cat);

  const handleChange = (event) => {
    const nameAnimal = event.target.value;
    setSelectedAnimal(videos[nameAnimal]);
  };
  return (
    <div className="app">
      <p className="heading">Project 6: Video Player</p>
      <section className="main">
        <section className="options">
          <label>
            <input
              type="radio"
              id="spider"
              name="animal"
              value="spider"
              onChange={handleChange}
            />
            Spider
          </label>
          <label>
            <input
              type="radio"
              id="snail"
              name="animal"
              value="snail"
              onChange={handleChange}
            />
            Snail
          </label>
          <label>
            <input
              type="radio"
              id="deer"
              name="animal"
              value="deer"
              onChange={handleChange}
            />
            Deer
          </label>
          <label>
            <input
              type="radio"
              id="cat"
              name="animal"
              value="cat"
              onChange={handleChange}
            />{" "}
            Cat
          </label>
        </section>
        <section className="video-">
          <video key={selectedAnimal}  controls autoPlay>
            <source src={selectedAnimal} type="video/mp4" />
          </video>
        </section>
      </section>
    </div>
  );
}

export default App;
