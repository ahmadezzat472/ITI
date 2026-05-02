import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

export default function MyGrid() {
  const boxStyle = {
    border: "1px solid black",
    backgroundColor: "red",
  };

  //    <Grid container>
  //     <Grid item></Grid>
  //     <Grid item></Grid>
  //    <Grid container>

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box sx={{ ...boxStyle, height: 50 }}>Header</Box>
        </Grid>

        <Grid item xs={12} sm={4} lg={2}>
          <Box sx={{ ...boxStyle, bgcolor: "blue" }}>Sidebar</Box>
        </Grid>

        <Grid item xs={12} sm={8} lg={10}>
          <Box sx={{ ...boxStyle, bgcolor: "white" }}>
            <Grid container spacing={2}>
              {/* grid system (each card -> 12 col in xs , 6 col in md) */}
              <Grid item xs={12} md={4}>
                <Card sx={{ width: 300 }}>
                  {/* card media */}
                  <CardMedia image="spiderman.jpg" component="img" />

                  {/* card content */}
                  <CardContent>
                    <Typography variant="h4">card title</Typography>
                    <Typography variant="p">
                      card description card description card description card
                      description
                    </Typography>
                  </CardContent>

                  {/* card actions */}
                  <CardActions>
                    <Button variant="contained" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ width: 300 }}>
                  {/* card media */}
                  <CardMedia image="spiderman.jpg" component="img" />

                  {/* card content */}
                  <CardContent>
                    <Typography variant="h4">card title</Typography>
                    <Typography variant="p">
                      card description card description card description card
                      description
                    </Typography>
                  </CardContent>

                  {/* card actions */}
                  <CardActions>
                    <Button variant="contained" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ width: 300 }}>
                  {/* card media */}
                  <CardMedia image="spiderman.jpg" component="img" />

                  {/* card content */}
                  <CardContent>
                    <Typography variant="h4">card title</Typography>
                    <Typography variant="p">
                      card description card description card description card
                      description
                    </Typography>
                  </CardContent>

                  {/* card actions */}
                  <CardActions>
                    <Button variant="contained" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ width: 300 }}>
                  {/* card media */}
                  <CardMedia image="spiderman.jpg" component="img" />

                  {/* card content */}
                  <CardContent>
                    <Typography variant="h4">card title</Typography>
                    <Typography variant="p">
                      card description card description card description card
                      description
                    </Typography>
                  </CardContent>

                  {/* card actions */}
                  <CardActions>
                    <Button variant="contained" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ ...boxStyle, height: 50 }}>Footer</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
