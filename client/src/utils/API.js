/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API = {

  // Gets the books from Google
  getBooksGoo: function (input) {
    console.log("input: ", input)
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + input);
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    console.log("Book saved");
    return axios.post("/api/books", bookData);
  }
};

export default API;
