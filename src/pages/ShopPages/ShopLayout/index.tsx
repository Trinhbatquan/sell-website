import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Box } from "@mui/material";

const ShopLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default ShopLayout;
