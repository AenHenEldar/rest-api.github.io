const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const app = express();

app.use(express.static(path.resolve(__dirname, "client")));

app.get("/api/users", async (req, res) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  res.status(200).send(users);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.listen(3001, () => console.log("hi, Eldar!"));
