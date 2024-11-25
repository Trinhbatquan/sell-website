import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { memo } from "react";

interface CustomPrimaryBtnProps {
  title: string;
}

const CustomPrimaryBtn = ({ title }: CustomPrimaryBtnProps) => {
  const StyledCustomPrimaryBtn = styled.div`
    .custom-primary-btn {
      border-radius: 1rem;
      min-width: 180px;
    }
  `;

  return (
    <StyledCustomPrimaryBtn>
      <Button
        className="custom-primary-btn"
        size="large"
        variant="outlined"
        color="inherit"
      >
        {title}
      </Button>
    </StyledCustomPrimaryBtn>
  );
};

export default memo(CustomPrimaryBtn);
