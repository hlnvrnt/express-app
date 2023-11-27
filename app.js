const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

const getMessage = (req, res) => {
    res.send('Welcome to my favorite movie list');
  };
  

  const getMovies = (req, res) => {
    res.status(200).json(movies);
  };
  



    const getId = (req, res) => {
         const movieId = movies.find((movie) =>movie.id == req.params.id)
            if (movieId === undefined){
                res.status(404).json("Not found")
            } else {
                res.status(200).json(movieId)
            }
            console.log(movieId)
    } 
     
    

  app.get("/api/", getMessage);
  app.get("/api/movies", getMovies);
  app.get("/api/movies/:id", getId);