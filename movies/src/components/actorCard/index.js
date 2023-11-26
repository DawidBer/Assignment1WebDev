import { Link } from "react-router-dom";
import React  from "react";
import { useQuery } from "react-query";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from "../../images/actor_placeholder.jpeg";
import { getActorImages}  from "../../api/tmdb-api";

const ActorCard = ({ actor }) => {
    console.log("Actor Card", actor)
    const {data: images, error} = useQuery(["Actors", actor.id], 
    () => getActorImages(actor.id));
    if (error) {
        console.error("Error no actors", error);
    }
  

    const actorImage = images?.profiles[0]?.file_path;

 return (
     <Card sx={{ maxWidth: 365 }}>
      <Link to={`/movies/:id/actors/${actor.id}`}>
       <CardMedia
          component="img"
            height="350"
           image={
              actor.profile_path
              ? `https://image.tmdb.org/t/p/w500${actorImage}`
              : img
              }
            alt={actor.name}
          />
          </Link>
        <CardContent>
          <Typography variant="h5" component="div">
            {actor.name}
          </Typography>
        </CardContent>
      </Card>
      
    );
  };
  
  export default ActorCard;