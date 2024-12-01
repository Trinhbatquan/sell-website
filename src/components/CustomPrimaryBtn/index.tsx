import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { memo } from "react";
import { ProductType } from "../../constants";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../pages/router.config";

interface CustomPrimaryBtnProps {
  title: string;
  productType: ProductType;
}

const CustomPrimaryBtn = ({ title, productType }: CustomPrimaryBtnProps) => {
  const navigate = useNavigate();
  const StyledCustomPrimaryBtn = styled.div`
    .custom-primary-btn {
      border-radius: 1.25rem;
      min-width: 180px;
    }
  `;

  const handleClick = () => {
    navigate(`/${PATH.SHOP}/${PATH.COLLECTION}`, {
      state: { to: productType },
    });
  };
  return (
    <StyledCustomPrimaryBtn>
      <Button
        className="custom-primary-btn"
        size="large"
        variant="outlined"
        color="inherit"
        onClick={handleClick}
      >
        {title}
      </Button>
    </StyledCustomPrimaryBtn>
  );
};

export default memo(CustomPrimaryBtn);
