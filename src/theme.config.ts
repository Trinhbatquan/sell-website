import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: {
      fontSize: 32,
    },
    h2: {
      fontSize: 28,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 20,
      fontWeight: "bold",
    },
    h5: {
      fontSize: 18,
      fontWeight: "bold",
    },
    h6: {
      fontSize: 16,
      fontWeight: "lighter",
    },
    body1: {
      fontSize: 14,
      fontWeight: "lighter",
    },
    body2: {
      fontSize: 14,
      fontWeight: "bold",
    },
  },
});