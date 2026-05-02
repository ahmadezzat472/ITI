import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

export default function MyLayout() {
  return (
    //  stack -> flexbox helper for one direction (row or col)
    // <Stack direction="row" spacing={2} justifyContent="center" alignContent="" alignItems="">
    //   <Box sx={{ width: 100, height: 100, bgcolor: "red" }}></Box>
    //   <Box sx={{ width: 100, height: 100, bgcolor: "blue" }}></Box>
    //   <Box sx={{ width: 100, height: 100, bgcolor: "red" }}></Box>
    //   <Box sx={{ width: 100, height: 100, bgcolor: "blue" }}></Box>
    // </Stack>
    // <Stack direction={{xs: "column", sm: "row"  , md: "column" , lg: "row"}}>
    //   <Box sx={{ width: 100, height: 100, bgcolor: "red" }}></Box>
    //   <Box sx={{ width: 100, height: 100, bgcolor: "blue" }}></Box>
    //   <Box sx={{ width: 100, height: 100, bgcolor: "red" }}></Box>
    //   <Box sx={{ width: 100, height: 100, bgcolor: "blue" }}></Box>
    //   <Box sx={{ width: 100, height: 100, bgcolor: "red" }}></Box>
    //   <Box sx={{ width: 100, height: 100, bgcolor: "blue" }}></Box>
    // </Stack>

    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
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
    </Stack>
  );
}
