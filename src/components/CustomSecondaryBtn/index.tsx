import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { memo } from "react";

interface CustomSecondaryBtnProps {
  onClick: VoidFunction;
  title?: string;
}

const CustomSecondaryBtn = ({
  onClick,
  title = "Thêm vào giỏ",
}: CustomSecondaryBtnProps) => {
  const StyledCustomSecondaryBtn = styled.div`
    .custom-secondary-btn {
      width: 100%;
      border-radius: 1.5rem;
      min-width: 200px;
      background-color: #fdcc7f;
    }
  `;

  return (
    <StyledCustomSecondaryBtn>
      <Button
        className="custom-secondary-btn"
        size="large"
        variant="contained"
        onClick={onClick}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <ShoppingCartOutlinedIcon />
          <Typography variant="h6" sx={{ textTransform: "initial" }}>
            {title}
          </Typography>
        </Stack>
      </Button>
    </StyledCustomSecondaryBtn>
  );
};

export default memo(CustomSecondaryBtn);
