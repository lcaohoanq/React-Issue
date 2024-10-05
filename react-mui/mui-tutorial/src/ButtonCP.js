import { Button } from "@mui/material";
import React from "react";

const ButtonCP = () => {
  return (
    <div>
      <Button
        onClick={() => {
          alert("Button clicked");
        }}
        color="success"
        sx={{ margin: 3, cursor: "pointer" }}
        size="large"
        variant="contained"
      >
        First
      </Button>
      <Button size="medium" variant="outlined">
        Second
      </Button>
      <Button size="small" variant="text">
        Third
      </Button>
    </div>
  );
};

export default ButtonCP;
