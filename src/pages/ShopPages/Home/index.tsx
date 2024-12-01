import { useEffect, useState } from "react";
import Collection from "./components/Collection";
import HotProduct from "./components/HotProduct";
import Slider from "./components/Slider";
import { Box, CircularProgress } from "@mui/material";

const Home = () => {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 800);
  });

  return (
    <>
      <div style={{ opacity: isShow ? 1 : 0 }}>
        <Slider />
        <HotProduct />
        <Collection />
      </div>
      {!isShow && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100vh"
          sx={{
            position: "fixed",
            zIndex: 9999,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default Home;
