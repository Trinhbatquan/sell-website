import { Slide } from "react-slideshow-image";
import slider1 from "../../../../../assets/banners/slider11.png";
import slider2 from "../../../../../assets/banners/slider22.png";
import slider3 from "../../../../../assets/banners/slider33.png";
import slider4 from "../../../../../assets/banners/slider44.png";
import slider5 from "../../../../../assets/banners/slider55.png";
import styled from "@emotion/styled";

const Slider = () => {
  const StyledImg = styled.img`
    width: 100vw;
    height: 100%;
    object-fit: cover;
  `;
  return (
    <Slide
      slidesToScroll={1}
      slidesToShow={1}
      indicators={false}
      arrows={false}
      duration={4000}
      pauseOnHover={false}
    >
      <StyledImg src={slider5} alt="slider5" />
      <StyledImg src={slider2} alt="slider2" />
      <StyledImg src={slider3} alt="slider3" />
      <StyledImg src={slider4} alt="slider4" />
      <StyledImg src={slider1} alt="slider1" />
    </Slide>
  );
};

export default Slider;
