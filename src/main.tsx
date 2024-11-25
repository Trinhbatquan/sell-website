import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.config.ts";
import "react-slideshow-image/dist/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
