import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";


function ActorDetailsPageTemplate({details, title, allMovies,  action, children }) {
  const actorId = details?.id;
  console.log("binladen",details)

  let displayedMovies = allMovies

  return (
  <>
     <Header title={title} />
     <Grid container style={{ padding: '20px' }}>
        <Grid item xs={3} md={3}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              marginTop: -10,
            }}
          >
            <ImageList cols={1}>
              <ImageListItem key={details?.profile_path} cols={1}>
                <img
                  style={{ width: '80%', height: 'auto' }}
                  src={`https://image.tmdb.org/t/p/w500/${details?.profile_path}`}
                  alt={details?.profile_path}
                />
              </ImageListItem>
            </ImageList>
          </div>
        </Grid>
  
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container spacing={5}>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </>
  );
  
}

export default ActorDetailsPageTemplate;
