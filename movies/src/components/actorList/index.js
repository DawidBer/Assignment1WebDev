import React from "react";
import Actor from "../actorCard";
import Grid from "@mui/material/Grid";

const ActorList = ({ actors, images }) => {
  return (
    <>
      {actors && images && actors.map((actor, index) => (
        <Grid key={index} item xs={12} sm={8} md={6} lg={4} xl={2}>
          <Actor actor={actor}  />
        </Grid>
      ))}
    </>
  );
};

export default ActorList;