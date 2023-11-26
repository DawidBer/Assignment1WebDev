import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import LatestPage from "./pages/latestMoviesPage";
import PopularPage from "./pages/popularMoviesPage";
import TrendingPage from "./pages/trendingMoviesPage";
import ActorDetails from "./pages/actorDetailsPage";
import SignIn from "../src/components/signIn";
import SignUp from "../src/components/signUp";
import RecommendedMoviesPage from "./pages/recommendedMoviesPage";
import ActorsPage from "./pages/actorsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchWindowFocus: false 
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id/actors/:id" element={<ActorDetails />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/movies/latest" element={<LatestPage/>} />
          <Route path="/movies/popular" element={<PopularPage/>} />
          <Route path="/movies/trending" element={<TrendingPage/>} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/reviews/form" element={<AddMovieReviewPage />} />
          <Route path="/signin" element={<SignIn /> } />
          <Route path="/signup" element={<SignUp /> } />
          <Route path="/movies/:id/recommended" element={<RecommendedMoviesPage />} />
          <Route path="/movies/:id/actors" element={<ActorsPage />} />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);