import { Grid2, Typography } from "@mui/material";
import { StyledHotProductCard } from "./styled";
import { memo } from "react";
import { ProductType } from "../../constants";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../pages/router.config";

interface HotProductCardProps {
  leftTitle: string;
  imgLink: string;
  productType: ProductType;
}

const HotProductCard = ({
  imgLink,
  leftTitle,
  productType,
}: HotProductCardProps) => {
  const navigate = useNavigate();
  return (
    <StyledHotProductCard
      onClick={() =>
        navigate(`/${PATH.SHOP}/${productType}`, { state: { to: productType } })
      }
    >
      <Grid2 container spacing={1} columnSpacing={1}>
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
