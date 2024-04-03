import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  export function createTheme(options?: ThemeOptions): Theme;
}
