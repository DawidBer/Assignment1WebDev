import React from "react";
import { useParams } from 'react-router-dom';
import PageTemplate from "../components/templateActorsPage";
import { getCast } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const ActorsPage = (props) => {
  const { id } = useParams();
  const { data: credits, error, isLoading, isError } = useQuery(
    ["movie credits", { id: id }],
    () => getCast(id));

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
        <>
          <PageTemplate movie={credits}>

          </PageTemplate>
        </>
  );
};

export default ActorsPage;