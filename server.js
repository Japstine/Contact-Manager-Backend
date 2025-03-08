const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 7000;

// Middleware 
app.use("/api/contacts", require("./routes/contactRoutes.js"));

app.listen(port, () => {
  // Use `` for log (to pass a variable)
  console.log(`Server running on port: ${port}`);
});
