import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export default function MyCard() {
  return (
    <Card sx={{ width: 300 }}>
      {/* card media */}
      <CardMedia image="spiderman.jpg" component="img" height="140" />

      {/* card content */}
      <CardContent>
        <Typography variant="h4">card title</Typography>
        <Typography variant="p">
          card description card description card description card description
        </Typography>
      </CardContent>

      {/* card actions */}
      <CardActions>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
