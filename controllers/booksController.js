const db = require("../models");
const axios = require("axios");

module.exports = {
    findAll: function (req, res) {
        db.Book
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function (req, res) {
        req.body.author = req.body.author.join(", ");
        db.Book
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      getGoogleBooks: function (req, res) {
        require('dotenv').config();
        var book = req.params.input
        var secret = process.env.googleAPIKey;
        var url = ` https://www.googleapis.com/books/v1/volumes?q=${book}&key=${secret}`;
        axios.get(url)
          .then(function (response) {
            res.json(response.data)
          })
      }
}