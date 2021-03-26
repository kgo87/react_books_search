import React from "react";



export default function Form(props) {
  // const Form = props => {
  return (
    <form>
      <div className="form-group">
        <label className="Search-text">Search For Book</label>
        <br></br>
        <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchBook"
          onChange={props.handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={props.handleFormSubmit}>
        Submit
      </button>
    </form>
  )
}



// export default Form
