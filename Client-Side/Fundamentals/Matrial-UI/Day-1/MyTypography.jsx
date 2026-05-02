import { Typography } from "@mui/material";
import React from "react";

export default function MyTypography() {
  return (
    <div>
      {/* component -> actual HTML Tag
            variant -> visual style*/}

      <Typography component="span" variant="h4" color="secondary">
        {" "}
        hello
      </Typography>
            <Typography component="span" variant="h4" color="secondary">
        {" "}
        hello
      </Typography>
            <Typography component="span" variant="h4" color="secondary">
        {" "}
        hello
      </Typography>

      <Typography variant="h2" align="center" color="error" gutterBottom>Center Text</Typography>


      <Typography component="a" href="https://google.com" target="_blank">Go to google</Typography>
      <Typography component="span" color="primary"> new span</Typography>
      <Typography component="span" color="primary"> new span</Typography>
      <Typography component="span" color="primary"> new span</Typography>
    </div>
  );
}
