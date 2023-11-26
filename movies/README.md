# Assignment 1 - ReactJS app.
Name: [ Dawid Beres]

## Overview.
Movies website based off tmdb database which uses the api's from tmdb.

### Features.
+ Three static endpoints have been added latest page , trending page and popular page.

+ Multiple parameterised endpoints have been added such as recommended movies page after clicking the like icon on the movie card and actors under movie overview

+ extensive linking of information has been added in the movie details after clicking more details actors who play in the movie will show when they are clicked under that actor movies the actor played in will show "movies contains links to actors and actors contains links to movies"

+ Filering options have been added by filtering the movies by rating 

+ Searching options have been added to actors page to search actors by name.

+ pagination has been integrated at the bottom left under the search box

+ Third party authetication has been added with firebase 

+ create account and login page have been created 

## Setup requirements.
npm install is required to run the react pages.

## API endpoints.
+ latest Movie - /movies/latest
+ actors details - /movies/:id/actors/:id
+ popular movies - /movies/popular
+ trending movies - /movies/trending
+ sign in page - /signin
+ create account page - /signup
+ actors page - /movies/:id/actors
+ recommended movies page - /movies/:id/recommended

## Routing.
+ /movies/latest - displays  the latest released movie
+ /movies/:id/actors/:id - displays movies and gets associated actors with the movie
+ /movies/popular - displays popular movies
+ /movies/trending - displays trending movies 
+ /signin - displays sign in page
+ /signup - displays signup page
+ /movies/:id/actors - displays movies and it's associated actors
+ /movies/:id/recommended - displays recommended movies
