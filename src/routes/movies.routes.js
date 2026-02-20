import { Router } from "express";
import { createMovie, getMovieById, getMovies } from "../controllers/movies.controllers.js";

const movieRoute = Router();

movieRoute.get("/", getMovies);
movieRoute.post("/", createMovie);
movieRoute.get("/:id", getMovieById)

export default movieRoute;
