import {
  Button,
  ButtonGroup,
  CircularProgress,
  Divider,
  IconButton,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

export default function MyButtons() {
  return (
    <div>
      {/* 
        variant -> [contained - outlined - text]
        color
        size
        npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
        startIcon
        endIcon*/}

      <Button>Default</Button>

      <Button variant="contained">Contained</Button>
      <Button variant="outlined"> Outlined</Button>
      <Button variant="text"> text</Button>

      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>

      <Button variant="contained" color="primary">
        Primary Contained
      </Button>
      <Button variant="contained" color="secondary">
        Primary Contained
      </Button>
      <Button variant="outlined" color="error">
        Primary Contained
      </Button>

      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>

      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>

      <Button size="small" variant="contained" color="success">
        {" "}
        custom
      </Button>
      <Button size="medium" variant="contained" color="success">
        {" "}
        custom
      </Button>
      <Button size="large" variant="contained" color="success">
        {" "}
        custom
      </Button>

      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>

      <Button startIcon={<AcUnitIcon />}> start icon</Button>
      <Button variant="contained" color="secondary" startIcon={<HomeIcon />}>
        {" "}
        Home
      </Button>

      <Divider></Divider>
      <Divider></Divider>

      <Button endIcon={<AcUnitIcon />}> start icon</Button>
      <Button variant="contained" color="secondary" endIcon={<HomeIcon />}>
        {" "}
        Home
      </Button>

      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>

      <Button
        variant="contained"
        startIcon={<CircularProgress size={20} />}
        disabled
      >
        Loading
      </Button>

      <Button
        variant="contained"
        endIcon={<CircularProgress size={10} />}
        disabled
      >
        Loading
      </Button>

      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>

      <IconButton color="error">
        <DeleteIcon />
      </IconButton>

      <IconButton color="primary">
        <EditIcon />
      </IconButton>

      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>

      <ButtonGroup variant="contained" color="secondary">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>

      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>

      <Button component="a" variant="contained" href="https://google.com">Go to google</Button>
    </div>
  );
}
