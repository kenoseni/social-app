import { createTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: "#5c67a3",
      main: "#3f4771",
      dark: "#2e355b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#c8e6c9",
      main: "#388e3c",
      dark: "#1b5e20",
      contrastText: "#000",
    },
    openTitle: "#3f4771",
    protectedTitle: green["400"],
    type: "light",
  },
});

export default theme;
