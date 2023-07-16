const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  response.send(
    `${date.getDate()}-${1 + date.getMonth()}-${date.getFullYear()}`
  );
});
app.listen(3000);
module.exports = app;
