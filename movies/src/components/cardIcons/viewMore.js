import React from "react";
import IconButton from "@mui/material/IconButton";
import ViewMore from "@mui/icons-material/ReadMoreSharp";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ViewMoreIcon = ({ movie }) => {

  const moviesId = movie.id;

  return (
    <Link to={`/movies/${moviesId}/actors`}>
    <IconButton 
        aria-label="more info" 
        sx={{height: 400,  
            marginLeft: 5, 
            marginTop: 10, 
            width: 250, 
            borderRadius: 5,  
            flexDirection: 'column',
            alignItems: 'center',
            }} >
        <ViewMore color="primary" fontSize="large" />
        
        <Typography sx={{ fontWeight: 'bold'}} >
            View More   
        </Typography>
    </IconButton>
    </Link>
  );
};

export default ViewMoreIcon;