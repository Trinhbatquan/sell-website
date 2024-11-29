import { Box, Stack, Typography } from "@mui/material";
import { memo } from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

interface ReviewCardProps {
  imgLink: string;
  title: string;
  name: string;
  location: string;
}

const ReviewCard = ({ imgLink, location, name, title }: ReviewCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "1rem",
        height: "145px",
      }}
    >
      <Stack gap={5} alignItems="start" justifyContent="space-between">
        <Stack gap={1} alignItems="start" justifyContent="center">
          <Stack
            direction="row"
            gap={0.2}
            alignItems="center"
            justifyContent="start"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <StarRoundedIcon key={index} sx={{ color: "#fdcc7f" }} />
            ))}
          </Stack>
          <Typography variant="body1">{title}</Typography>
        </Stack>
        <Stack
          direction="row"
          gap={4}
          alignItems="center"
          justifyContent="start"
        >
          <img
            src={imgLink}
            alt="img"
            style={{
              width: "30px",
              height: "30px",
              objectFit: "contain",
              borderRadius: "50%",
            }}
          />
          <Typography variant="body1">
            <b>{name}</b> - {location}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default memo(ReviewCard);
