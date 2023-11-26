import React from "react";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templatePopularMoviesPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const PopularPage = () => {

  const {  data, error, isLoading, isError }  = useQuery('latest', getPopularMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const popular = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = popular.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 


  return (
    <PageTemplate
      popular={popular}
      title='Popular Movies'
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};
export default PopularPage;