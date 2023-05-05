const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Dragon ");
});

app.listen(port, () => {
  console.log("Dragon API on port: ${port}");
});
