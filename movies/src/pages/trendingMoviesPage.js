import React from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateTrendingMoviesPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const TrendingPage = () => {

  const {  data, error, isLoading, isError }  = useQuery('trending', getTrendingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const trending = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = trending.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
    trending={trending}
    title='Trending Movies'
    action={(movie) => {
      return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};
export default TrendingPage;