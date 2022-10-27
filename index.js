import express from "express";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/kushe", (req, res) => {
  res.send("Kushe o!");
});

app.listen(port, () => {
  console.log(`Krio app is listening on port ${port}`);
});
