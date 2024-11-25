import { Grid2, Typography } from "@mui/material";
import { StyledHotProductCard } from "./styled";
import { memo } from "react";

interface HotProductCardProps {
  leftTitle: string;
  imgLink: string;
}

const HotProductCard = ({ imgLink, leftTitle }: HotProductCardProps) => {
  return (
    <StyledHotProductCard>
      <Grid2 container spacing={0} columnSpacing={2}>
        <Grid2 size={6} className="left-content">
          <Typography variant="h5">{leftTitle}</Typography>
        </Grid2>
        <Grid2 size={6} className="right-content">
          <img alt="img-card" src={imgLink} />
        </Grid2>
      </Grid2>
    </StyledHotProductCard>
  );
};

export default memo(HotProductCard);
