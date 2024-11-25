import { Box, Stack, Typography } from "@mui/material";
import { memo } from "react";
import CustomSecondaryBtn from "../CustomSecondaryBtn";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

interface ProductCardProps {
  imgLink: string;
  title: string;
  price: string;
  onClick: VoidFunction;
}

const ProductCard = ({ imgLink, price, title, onClick }: ProductCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "1rem",
        height: "350px",
        borderRadius: "0.5rem",
      }}
    >
      <Stack gap={1} sx={{ position: "relative" }}>
        <img
          src={imgLink}
          alt="img"
          style={{ width: "100%", height: "50%", objectFit: "contain" }}
        />
        <Typography variant="body2">{title}</Typography>
        <Typography variant="body1" color="error">
          {price}
        </Typography>
        <CustomSecondaryBtn onClick={onClick} />
        <FavoriteBorderOutlinedIcon
          sx={{
            position: "absolute",
            top: "-0.25rem",
            right: "-0.25rem",
            cursor: "pointer",
          }}
        />
      </Stack>
    </Box>
  );
};

export default memo(ProductCard);
