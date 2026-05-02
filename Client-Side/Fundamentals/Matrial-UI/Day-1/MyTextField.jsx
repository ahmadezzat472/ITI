import { Divider, InputAdornment, TextField } from "@mui/material";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import React from "react";

export default function MyTextField() {
  return (
    <div>
      {/* 
        variant -> [outlined - filled - standard]
        fullWidth
        error + helperText */}

      <TextField label="username" variant="outlined" fullWidth></TextField>
      <TextField label="username" variant="filled"></TextField>
      <TextField label="username" variant="standard"></TextField>

      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>

      <TextField type="password" label="password"></TextField>

      <Divider></Divider>

      <TextField
        label="username"
        variant="outlined"
        error
        helperText="invalid input"
      ></TextField>
      <TextField
        label="username"
        variant="filled"
        error
        helperText="must be numbers only"
      ></TextField>
      <TextField
        label="username"
        variant="standard"
        error
        helperText="must contain special char"
      ></TextField>

      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>

      {/* icon inside TextField */}
      <TextField
        label="search"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <SavedSearchIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>

      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>

      <TextField label="Description" multiline rows={4}></TextField>

      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>

      <TextField select label="choose" fullWidth>
        <option value="1">option 1</option>
        <option value="2">option 2</option>
      </TextField>
    </div>
  );
}
