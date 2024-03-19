export default function Video({selectedAnimal}){
    return(<>
      <section className="video-">
          <video key={selectedAnimal}  controls autoPlay>
            <source src={selectedAnimal} type="video/mp4" />
          </video>
        </section></>)
}