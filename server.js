const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/templates/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/templates/about.html"));
});

app.get("/ajax", (req, res) => {
  res.sendFile(path.join(__dirname, "/templates/ajax.html"));
});

app.get("/api/movies", (req, res) => {
  const movies = [
    { id: 1, title: "Dhoom2" },
    { id: 2, title: "Jumanji" },
    { id: 3, title: "Toofan" },
    { id: 4, title: "KGF" },
  ];
  res.json(movies);
});

app.listen(PORT, () => console.log(`server listening on PORT ${PORT}`));
