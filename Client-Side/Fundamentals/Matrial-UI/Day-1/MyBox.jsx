import { Box } from "@mui/material";
import React from "react";

export default function MyBox() {
  return (
    <div>
      {/* box -> div with superpowers (sx styling)
      control css properties  + responsive*/}
      <Box
        sx={{
          bgcolor: "red",
          color: "white",
          width: 200,
          height: 100,
          p: 2,
          m: 2,
          borderRadius: 6,
        }}
      >
        hello Box
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: 300, md: 600, lg: 900 },
          bgcolor: { xs: "red" },
        }}
      >
        Box 2
      </Box>
    </div>
  );
}
