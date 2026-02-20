import express from "express";
const app = express();

app.use(express.json());
const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/movies", (req, res) => {
  const movies = [
    {
      title: "Avatar",
      director: "James Cameron",
    },
    {
      title: "Interstellar",
      director: "XYZ",
    },
  ];

  res.json(movies);
});

app.post("/api/movies", (req, res) =>
{
  const movie = req.body;
  res.status(201).json(  {messege: "Dodano film" ,...movie});
});

app.listen(port, () => {
  console.log(`http://localhost:${port} on port ${port}`);
});
