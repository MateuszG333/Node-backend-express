import { Router } from "express";

const movieRoute = Router();

movieRoute.get("/api/movies", (req, res) => {
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

movieRoute.post("/api/movies", (req, res, next) => {
  const movie = req.body;

  if (!movie.title) {
    return next(new Error("Provide title"));
  }

  res.status(201).json({ message: "Dodano film", ...movie });
});

export default movieRoute;
