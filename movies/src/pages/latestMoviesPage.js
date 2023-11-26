import React from "react";
import { getLatestMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMoviePage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";




const LatestMoviesPage = (props) => {
  const { id } = useParams();
  const { data: latest, error, isLoading, isError } = useQuery(
    ["latest", { id: id }],
    getLatestMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
       
        <>
          <PageTemplate movie={latest}>
            <MovieDetails movie={latest} />
          </PageTemplate>
        </> 
      
    {/* )} */}
    </>
  );
};

export default LatestMoviesPage;