import React from "react";
import { Typography } from "@mui/material";

export function NavLeft() {
  return (
    <Typography variant="h1" noWrap component="div" sx={style.NavLeft}>
      Developer Assessment
    </Typography>
  );
}

const style = {
  NavLeft: {
    fontSize: 20,
    flexGrow: 1,
  },
};
