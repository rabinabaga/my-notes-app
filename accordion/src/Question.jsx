export default function Question({ question }) {
    const [openStatus, setOpenStatus] = useState(false);
    const toggleDisplay = ()=>{
      setOpenStatus(!openStatus);
    }
    return (
      <>
        <div className="question-block">
          <div className="top-question-block">
            <p className=" heading question-heading">{question.title}</p>
            {!openStatus ? (
              <button onClick={toggleDisplay}>&#65291;</button>
            ) : (
              <button onClick={toggleDisplay}>&#45;</button>
            )}
          </div>
          <div className="info" style={{display: !openStatus?"none": "block"}}>
            {question.info}
          </div>
        </div>
      </>
    );
  }