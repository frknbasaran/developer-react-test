import { createTheme } from "@mui/material/styles";
import { blue, common } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[100],
    },
    secondary: {
      main: common.black,
    },
  },
});

export default theme;
