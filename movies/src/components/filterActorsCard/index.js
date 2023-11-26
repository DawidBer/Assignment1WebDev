import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";


const formControl = 
  {
    margin: 1,
    minWidth: 300,
    backgroundColor: "rgb(145, 200, 100)"
  };

export default function FilterActorsCard(props) {

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); 
  };

  const handleTextChange = (e) => {
    handleChange(e, "name", e.target.value);
  };
  
  
  return (
    <Card 
      sx={{
        width: 500,
        backgroundColor: "rgb(200, 70, 30)",
        height: 100
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
        Search Actors
          <TextField 
          style={{marginLeft: 50}}
          sx={{...formControl}}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.nameFilter}
          onChange={handleTextChange}
          />
        </Typography>
      </CardContent>
    </Card>
  );
}