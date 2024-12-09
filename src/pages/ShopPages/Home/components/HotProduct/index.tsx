import { Box, Grid2, Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import { HotProductCard } from "../../../../../components";
import hotProduct1 from "../../../../../assets/image/hot-product-1.png";
import hotProduct2 from "../../../../../assets/image/hot-product-2.png";
import hotProduct3 from "../../../../../assets/image/hot-product-3.png";
import hotProduct4 from "../../../../../assets/image/hot-product-4.png";
import hotProduct5 from "../../../../../assets/image/hot-product-5.png";
import styled from "@emotion/styled";
import { ProductType } from "../../../../../constants";

const HotProduct = () => {
  const HotProductContainer = styled.div`
    .react-slideshow-container {
      .nav:first-of-type {
        left: -11px;
      }
      .nav:last-of-type {
        right: -4px;
      }
      button {
        padding: 0.5rem;
        width: 31px;
        height: 31px;
        background-color: rgb(212 212 212 / 60%);
      }
    }
  `;

  return (
    <HotProductContainer>
      <Box
        sx={{
          backgroundColor: "#fdcc7f",
          paddingBlock: "3rem",
          paddingInline: "8rem 0.5rem",
        }}
      >
        <Grid2 container rowSpacing={2} columnSpacing={3}>
          <Grid2
            size={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Typography variant="h4">Các dòng sản phẩm nổi bật</Typography>
          </Grid2>
          <Grid2 size={9}>
            <Slide
              slidesToScroll={1}
              slidesToShow={3}
              indicators={false}
              duration={4000}
              autoplay={false}
            >
              <HotProductCard
                leftTitle="GHẾ"
                imgLink={hotProduct1}
                productType={ProductType.GHE}
              />
              <HotProductCard
                leftTitle="ĐÈN"
                imgLink={hotProduct2}
                productType={ProductType.DEN}
              />
              <HotProductCard
                leftTitle="TỦ"
                imgLink={hotProduct3}
                productType={ProductType.TU}
              />
              <HotProductCard
                leftTitle="GIƯỜNG"
                imgLink={hotProduct4}
                productType={ProductType.GIUONG}
              />
              <HotProductCard
                leftTitle="BÀN"
                imgLink={hotProduct5}
                productType={ProductType.BAN}
              />
            </Slide>
          </Grid2>
        </Grid2>
      </Box>
    </HotProductContainer>
  );
};

export default HotProduct;
