export default function Card({closeButtonHandler, datum}){
    return(<div className='card'>
     <div className="card-content">
     <p className='title-font'>{datum.title}</p>
      <p>{datum.description}</p>
     </div>
     <div className="close-button-section">
        <button onClick={()=>closeButtonHandler(datum.title)} className='close-button lightgreen-background'>X</button>
      </div>
    </div>)
  }