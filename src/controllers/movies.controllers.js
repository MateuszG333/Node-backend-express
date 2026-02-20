import { movies } from "../data/movie.data.js";
export function getMovies(req, res) {
  res.json(movies);
}

export function createMovie(req, res, next) {
  const movie = req.body;

  if (!movie.title) {
    return next(new Error("Provide title"));
  }

    if (!movie.director) {
    return next(new Error("Provide Director"));
    };

  movies.push({
    id: movies.length +1,
    title: movie.title,
    director: movie.director,
    likes: 0
  })
  res.status(201).json({ message: "Dodano film", ...movie });
}

export function getMovieById(req, res) {
    const id = Number(req.params.id);
    const movie = movies.find((m) => m.id === id);

    if (!movie) {
        return res.status(404).json({ message: "Film not found" });
    }
    res.json(movie);
}