import { Alert, AlertTitle } from "@mui/material";
import React from "react";

export default function MyAlert() {
  return (
    <div>
      <Alert> default message</Alert>
      <Alert severity="success"> success message</Alert>
      <Alert severity="error"> error message</Alert>
      <Alert severity="warning"> warning message</Alert>
      <Alert severity="info"> info message</Alert>
      <Alert severity="info" variant="filled">
        info message
      </Alert>
      <Alert severity="info" variant="outlined">
        info message
      </Alert>

      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success Alert with an encouraging title.
      </Alert>
    </div>
  );
}
