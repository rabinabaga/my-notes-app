import { useRef, useState } from "react";
import "./App.css";
import Options from "./Options";
import Video from "./Video";

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
       <Options handleChange={handleChange}/>
      <Video selectedAnimal={selectedAnimal}/>
      </section>
    </div>
  );
}

export default App;
