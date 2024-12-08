import { useState } from "react";
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
      className={`scroll-top ${isScrollUpActive ? "active" : ""}`}
      onClick={handleScrollToTop}
    >
      <div className="arrow up"></div>
    </StyledScrollUp>
  );
};

export default ScrollToTop;
