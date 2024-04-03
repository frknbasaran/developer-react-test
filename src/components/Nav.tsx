import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { NavRight } from "./NavRight";
import { NavLeft } from "./NavLeft";

export function Nav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLeft />
        <NavRight />
      </Toolbar>
    </AppBar>
  );
}
