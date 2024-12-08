import { useEffect, useState } from "react";
import Collection from "./components/Collection";
import HotProduct from "./components/HotProduct";
import Slider from "./components/Slider";
import { Box, CircularProgress } from "@mui/material";
import chat from "../../../assets/image/chat.png";

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
      <img
        alt="chat"
        src={chat}
        style={{
          position: "fixed",
          bottom: "40px",
          right: "16px",
          cursor: "pointer",
          width: "100px",
          height: "auto",
          objectFit: "contain",
          zIndex: "99",
        }}
      />
    </>
  );
};

export default Home;
