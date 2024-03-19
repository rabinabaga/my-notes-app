export default function AddNotes({onSubmit}){
    return(<>
     <div className="add-notes-section">
          <p className="title-font">Add Notes</p>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="title"
            //   ref={titleRef}
              className="input-add-notes"
              placeholder="Add title"
            />
            <input
              type="text"
              name="description"
            //   ref={descriptionRef}
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
    </>)
}