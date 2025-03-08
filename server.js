const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 7000;

app.get('/api/contacts', (req, res) => {
  res.json("Get all contacts");
})

app.listen(port, () => {
  // Use `` for log (to pass a variable)
  console.log(`Server running on port: ${port}`);
});
