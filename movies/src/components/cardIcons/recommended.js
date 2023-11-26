import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import RecommendedIcon from "@mui/icons-material/Recommend";
import IcontButton from "@mui/material/IconButton";

const RecommendedIcon = ({ movie }) => {
const context = useContext(MoviesContext);

const handleAddToWatchList = (e) => {
e.preventDefault();
};

return (
    <IconButton aria-label="more info">
        <RecommendedIcon color="primary" />
    </IconButton>
);
};
export default RecommendedIcon;
