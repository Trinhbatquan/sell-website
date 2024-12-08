import { Box, Typography } from "@mui/material";
import { memo, ReactNode, useRef, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "styled-components";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface CustomPopoverProps {
  productMenuId: string;
  content: ReactNode;
  onClick: VoidFunction;
}

const CustomPopover = ({ content, onClick }: CustomPopoverProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleProfileMenuOpen = () => {
    setOpen(true);
  };
  const handleMenuClose = () => setOpen(false);

  const Div = styled.div<{ isOpen: boolean }>`
    .child {
      opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
      position: absolute;
      top: 30px;
      left: 0;
      background-color: #fff;
      color: #000;
      visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
      border-radius: 4px;
    }
    .middle {
      visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
      opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

      position: absolute;
      top: 16px;
      left: 0;
      width: 100%;
      height: 20px;
      background-color: transparent;
    }
  `;

  useOnClickOutside(ref, () => {
    setOpen(false);
    ref.current?.blur();
  });

  return (
    <>
      <Div
        isOpen={isOpen}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.15rem",
          cursor: "pointer",
          position: "relative",
        }}
        onMouseLeave={handleMenuClose}
        onMouseEnter={handleProfileMenuOpen}
        ref={ref}
      >
        <Typography
          noWrap
          variant="h6"
          component="div"
          sx={{
            fontWeight: "lighter",
          }}
          onClick={onClick}
        >
          Sản phẩm
        </Typography>
        <div
          onClick={onClick}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        <div className="middle"></div>
        <div className="child">
          <Box>{content}</Box>
        </div>
      </Div>
    </>
  );
};

export default memo(CustomPopover);
