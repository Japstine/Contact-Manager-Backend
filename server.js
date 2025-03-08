const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler.js");

const app = express();

const port = process.env.PORT || 7000;

// Middleware for parsing the request body
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use(errorHandler);

app.listen(port, () => {
  // Use `` for log (to pass a variable)
  console.log(`Server running on port: ${port}`);
});
