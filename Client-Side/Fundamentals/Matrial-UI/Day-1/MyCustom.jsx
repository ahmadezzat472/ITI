import { Button } from "@mui/material";
import React from "react";

export default function MyCustom() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          bgcolor: "black",
          color: "white",
          px: 4,

          "&:hover": {
            bgcolor: "red",
            color: "black",
          },
        }}
      >
        custom button
      </Button>
    </div>
  );
}
