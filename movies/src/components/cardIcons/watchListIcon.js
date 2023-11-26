import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchListIcon = (e) => {
    e.preventDefault();
    context.AddToWatchListIcon(movie);
  };

  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToWatchListIcon}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchListIcon;