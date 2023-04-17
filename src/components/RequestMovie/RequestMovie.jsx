import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";

const RequestMovie = () => {
  const [RequestMovie, setRequestMovie] = useState({
    title: "",
    genre_id: "",
  });
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Date"
          multiline
          required
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="Name"
          required
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Request"
          multiline
          required
          rows={4}
          defaultValue="Text"
        />
        <Button>Submit</Button>
      </div>
    </Box>
  );
};
export default RequestMovie;
