import React, {useState} from "react";
import { useQuery } from "react-query";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { getCast, getActorImages } from "../../api/tmdb-api";
import ActorList from "../actorList";
import ViewMore from "../cardIcons/viewMore";
import { TextField } from "@mui/material";
import FilterActorsCard from "../filterActorsCard";

const ActorDetails = ({ movie }) => {  
const [nameFilter, setNameFilter] = useState("");
  const {id} = useParams();
  //console.log(movie)
  const [drawerOpen, setDrawerOpen] = useState(false);

  const getActors = movie?.cast 
    .filter((a) => {
        return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })

const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
}


  const { data: actorsImages, error: actorsImagesError } = useQuery(
    getActors?.map((actor) => actor.id),// array of actor ids
    () =>
      Promise.all(// get all images for all actors
        getActors?.map((actor) => getActorImages(actor.id)) || [] // if bestActors is undefined, pass an empty array
      ).then((images) =>
        images.map((image) => ({// map the results to an array of objects with id and url properties
          id: image.file_path,// use the file_path as the id
          url: 'https://image.tmdb.org/t/p/w200/${image.file_path}', // use the file_path as the url
        }))
      )
  );

  

  return (
    <>
    <Grid>
    Search Actors
    <FilterActorsCard
        onUserInput={handleChange}
        nameFilter={nameFilter}
    />
    
    </Grid>
      <Typography variant="h5" component="h3">
        Actors
      </Typography>


      <Typography variant="h5" component="h3">
      </Typography>
      <Grid container spacing={2}>
        {getActors && <ActorList actors={getActors} images={actorsImages} />}
        </Grid>
      </>
  );
};
export default ActorDetails ;