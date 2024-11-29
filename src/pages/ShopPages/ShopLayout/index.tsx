import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import { LinkRouter } from "../../../components";
import { breadcrumbNameMap } from "../../router.config";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ShopLayout = () => {
  const { pathname } = useLocation();
  const pathNameList = pathname.split("/").filter((x) => x);

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ backgroundColor: "#fff7ec" }}
    >
      <Header />
      {pathNameList.length > 1 && (
        <Container maxWidth="lg">
          <Box paddingBlockStart="2rem">
            <Breadcrumbs
              aria-label="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
            >
              {pathNameList.map((_, index) => {
                const last = index === pathNameList.length - 1;
                const to = `/${pathNameList.slice(0, index + 1).join("/")}`;

                return last ? (
                  <Typography key={to} sx={{ color: "text.primary" }}>
                    {breadcrumbNameMap[to]}
                  </Typography>
                ) : (
                  <LinkRouter
                    underline="hover"
                    color="inherit"
                    to={to}
                    key={to}
                  >
                    {breadcrumbNameMap[to]}
                  </LinkRouter>
                );
              })}
            </Breadcrumbs>
          </Box>
        </Container>
      )}
      <div style={{ minHeight: "calc(100vh - 290px - 90px)" }}>
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default ShopLayout;
