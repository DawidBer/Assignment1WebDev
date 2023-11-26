import React from "react";
import { Typography } from "@mui/material";

const ActorsDetails = ({ details }) => {
  console.log("Actor Details", details)
    return(
    <>
      <Typography variant="h5">
       {details?.name} Biography
      </Typography>
      <Typography>
        {details?.biography}
      </Typography>

      <div>
        <Typography variant="h6" style={{ display: 'inline' }}>
          Date of birth:&nbsp;
        </Typography>
      </div>

      <div>
        <Typography variant="h6" style={{ display: 'inline' }}>
          Born in:&nbsp;
        </Typography>

        <Typography style={{ display: 'inline' }}>
          {details?.place_of_birth}
        </Typography>
      </div>
    </>
);
};

export default ActorsDetails;