import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import { Pagination } from "@mui/material";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [ratingFilter, setRatingFilter] = useState("0");

  const genreId = Number(genreFilter);
  const ratingAverage = Number(ratingFilter);
  const [viewPage, setviewPage] = useState(1);
  const numberOfMovies = 5;
  const beginIndex = (viewPage -1)*numberOfMovies
  const finishIndex = beginIndex + numberOfMovies



  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((movies) => {
      return ratingAverage > 0 ? movies.vote_average >= ratingAverage && movies.vote_average < (ratingAverage + 1) : true;
    });

    const paginationMovies = displayedMovies.slice(beginIndex,finishIndex);

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if(type === "genre") setGenreFilter(value);
    else if (type === "rating") setRatingFilter(value);
  };

  const ChangePage = (event, newPage) => {
    setviewPage(newPage);
  };


  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            ratingFilter={ratingFilter}
          />
        </Grid>
        <MovieList action={action} movies={paginationMovies}></MovieList>
        <Pagination
        count={Math.ceil(displayedMovies.length / numberOfMovies)}
        page={viewPage}
        onChange={ChangePage}
        sx={{ marginTop: -10, marginLeft: 4 }}
        />
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;