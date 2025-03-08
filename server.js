const express = require("express");

const app = express();

const port = 7000;

app.listen(port, () => {
  // Use `` for log (to pass a variable)
  console.log(`Server running on port: ${port}`);
});
