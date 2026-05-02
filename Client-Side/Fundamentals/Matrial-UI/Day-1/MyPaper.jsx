import { Paper, Typography } from "@mui/material";
import React from "react";

export default function MyPaper() {
  return (
    <div>
      {/* Paper -> surface with shadow */}
      <Paper elevation={2} sx={{width:300}}>
        <Typography variant="h3" align="center"> Card Title</Typography>
        <Typography variant="h6" align="center"> simple card description</Typography>

      </Paper>
    </div>
  );
}
