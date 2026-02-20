import express from "express";
import movieRoute from "./routes/movies.routes.js";

const app = express();

app.use(express.json());

const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", movieRoute);

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} on port ${port}`);
});
