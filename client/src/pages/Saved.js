import React, { Component } from "react";
import { Container } from "react-bootstrap";
import API from "../utils/API";
import SavedItemsCard from "../components/SavedItemsCard"



class Saved extends Component {
  state = {
      savedBooks: []
  };

  //when this component mounts, grab all books that were save to the database 
  componentDidMount() {
      API.getBooks()
          .then(res => this.setState({ savedBooks: res.data }))
          .catch(err => console.log(err))
  }

  //function to remove book by id
  handleDeleteButton = id => {
      API.deleteBook(id)
          .then(res => this.componentDidMount())
          .catch(err => console.log(err))
          .then(alert("The book has been deleted!"))
  }

  render() {
      return (
          <div>
              <Container>
                  <SavedItemsCard savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
              </Container>
          </div>
      )
  }
}



export default Saved
