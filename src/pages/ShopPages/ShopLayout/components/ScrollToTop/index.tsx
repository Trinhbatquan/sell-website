import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { StyledScrollUp } from "./styled";

const ScrollToTop = () => {
  const [isScrollUpActive, setScrollUpActive] = useState<boolean>(false);

  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  window.onscroll = () => {
    const { scrollY } = window;
    if (scrollY > 500) {
      return setScrollUpActive(true);
    }
    return setScrollUpActive(false);
  };

  return (
    <StyledScrollUp
      className={isScrollUpActive ? "active" : ""}
      onClick={handleScrollToTop}
    >
      <KeyboardArrowUpIcon />
    </StyledScrollUp>
  );
};

export default ScrollToTop;
