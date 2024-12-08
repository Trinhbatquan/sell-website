import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { memo } from "react";

interface CustomSecondaryBtnProps {
  onClick: VoidFunction;
  title?: string;
  type?: "primary" | "secondary";
  isHaveProductCart: boolean;
}

const CustomSecondaryBtn = ({
  onClick,
  title = "Thêm vào giỏ",
  isHaveProductCart,
}: CustomSecondaryBtnProps) => {
  const titleConvert = isHaveProductCart ? "Đã có trong giỏ" : title;
  const StyledCustomSecondaryBtn = styled.div<{
    isHaveProductCart: boolean;
  }>`
    .custom-secondary-btn {
      width: 100%;
      border-radius: 1.5rem;
      background-color: ${({ isHaveProductCart }) =>
        isHaveProductCart ? "#ddd" : "#fdcc7f"};
      cursor: ${({ isHaveProductCart }) =>
        isHaveProductCart ? "text" : "pointer"};
      color: #fff;
      transition: all 0.3s ease-in-out;
      border: 1px solid #ccc;
      &:hover {
        background-color: #fff;
        color: #000;
      }
    }
  `;

  return (
    <StyledCustomSecondaryBtn isHaveProductCart={isHaveProductCart}>
      <Button
        className="custom-secondary-btn"
        size="medium"
        variant="outlined"
        onClick={onClick}
        disabled={isHaveProductCart}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <ShoppingCartOutlinedIcon />
          <Typography variant="h6" sx={{ textTransform: "initial" }}>
            {titleConvert}
          </Typography>
        </Stack>
      </Button>
    </StyledCustomSecondaryBtn>
  );
};

export default memo(CustomSecondaryBtn);
