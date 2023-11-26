import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templateMovieListPage";
import { getRecommended } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import { useQuery } from "react-query";



const RecommendedMoviesPage = () => {
    const { id } = useParams();
    const { data :movie, isLoading, isError } = useQuery(
        ["movie", {id: id}],
        () => getRecommended(id)
    );


    if (isLoading) {
        return <Spinner />;
    }

    if (isError){
        return console.log("Error loading movies");
    }

    const trendingMovies = movie.results;

    const trendingList = trendingMovies.filter(m => m.trendingList)
    localStorage.setItem("upcomingList", JSON.stringify(trendingList))
    const addToTrendingList = (movieId) => true

    return (
        <PageTemplate
        movies={trendingMovies}
        title="Personally Recommended Movies"
        action={(movie) => {
            return <AddToFavoritesIcon movie={movie} />
        }} />
    );
};
export default RecommendedMoviesPage;
