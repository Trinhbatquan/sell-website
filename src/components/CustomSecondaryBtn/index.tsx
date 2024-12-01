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
  type = "primary",
  isHaveProductCart,
}: CustomSecondaryBtnProps) => {
  const titleConvert = isHaveProductCart ? "Đã có trong giỏ" : title;
  const StyledCustomSecondaryBtn = styled.div<{
    type: "primary" | "secondary";
  }>`
    .custom-secondary-btn {
      width: 100%;
      border-radius: 1.5rem;
      min-width: 200px;
      background-color: ${({ type }) =>
        type === "primary" ? "#fdcc7f" : "#fff"};
      color: ${({ type }) => (type === "primary" ? "#fff" : "#000")};
    }
  `;

  return (
    <StyledCustomSecondaryBtn type={type}>
      <Button
        className="custom-secondary-btn"
        size="large"
        variant={type === "primary" ? "contained" : "outlined"}
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
