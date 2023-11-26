import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateUpcomingMoviesList';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchListIcon from "../components/cardIcons/watchListIcon";


const UpcomingPage = () => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const upcoming = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchlist = upcoming.filter(m => m.watchlist)
  localStorage.setItem('watchlist', JSON.stringify(watchlist))
  const upcomingMoviesPage = (movieId) => true 

  return (
    <PageTemplate
      title='Watch List'
      upcoming={upcoming}
      action={(movie) => {
        return <AddToWatchListIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingPage;