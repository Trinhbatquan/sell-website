import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import {
  CustomPrimaryBtn,
  ProductCard,
  ReviewCard,
} from "../../../../../components";
import {
  getProductList,
  ProductType,
  reviewList,
} from "../../../../../constants";
import banner1 from "../../../../../assets/banners/banner1.png";
import banner2 from "../../../../../assets/banners/banner2.png";
import banner3 from "../../../../../assets/banners/banner3.png";

const Collection = () => {
  return (
    <Box
      sx={{
        paddingBlock: "3rem",
      }}
    >
      <Container maxWidth="lg">
        <Stack gap={4} alignItems="center">
          <Typography variant="h3">BỘ SƯU TẬP</Typography>
          <Grid2 container rowSpacing={1} columnSpacing={4}>
            <Grid2 size={3}>
              <CustomPrimaryBtn
                title="Hiện đại"
                productType={ProductType.HIEN_DAI}
              />
            </Grid2>
            <Grid2 size={3}>
              <CustomPrimaryBtn
                title="Cổ điển"
                productType={ProductType.CO_DIEN}
              />
            </Grid2>
            <Grid2 size={3}>
              <CustomPrimaryBtn
                title="Đơn giản"
                productType={ProductType.DON_GIAN}
              />
            </Grid2>
            <Grid2 size={3}>
              <CustomPrimaryBtn
                title="Sang trọng"
                productType={ProductType.SANG_TRONG}
              />
            </Grid2>
          </Grid2>
          <Grid2 container rowSpacing={1} columnSpacing={4}>
            {getProductList([ProductType.COLLECTION]).map((item) => (
              <Grid2 size={3} key={item.id}>
                <ProductCard {...item} />
              </Grid2>
            ))}
          </Grid2>
          <Box
            sx={{
              position: "relative",
              borderRadius: "1rem",
              height: "fit-content",
            }}
          >
            <img
              alt="enjoy"
              src={banner1}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
            <Stack
              gap={1}
              alignItems="center"
              sx={{
                position: "absolute",
                top: "14%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Typography variant="h3" sx={{ color: "#fdcc7f" }}>
                NGUỒN CẢM HỨNG BẤT TẬN
              </Typography>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", color: "#fff" }}
              >
                Khám phá nội thất thiết kế đương đại mang đến cảm giác <br />
                thoải mái, sang trọng. Cá nhân hoá trong từng sản phẩm <br />{" "}
                phù hợp với mọi không gian sống
              </Typography>
            </Stack>
          </Box>
          <Grid2 container rowSpacing={1} columnSpacing={4}>
            {getProductList([ProductType.HOME1]).map((item) => (
              <Grid2 size={3} key={item.id}>
                <ProductCard {...item} />
              </Grid2>
            ))}
            <Grid2 size={6}>
              <img
                alt="banner2"
                src={banner2}
                style={{
                  width: "100%",
                  height: "382px",
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
              />
            </Grid2>
          </Grid2>
          <Grid2 container rowSpacing={1} columnSpacing={4}>
            <Grid2 size={6}>
              <img
                alt="banner3"
                src={banner3}
                style={{
                  width: "100%",
                  height: "382px",
                  objectFit: "cover",
                }}
              />
            </Grid2>
            {getProductList([ProductType.HOME2]).map((item) => (
              <Grid2 size={3} key={item.id}>
                <ProductCard {...item} />
              </Grid2>
            ))}
          </Grid2>
          <Typography variant="h3">ĐÁNH GIÁ TỪ KHÁCH HÀNG</Typography>
          <Grid2 container rowSpacing={1} columnSpacing={3}>
            {reviewList.map((item) => (
              <Grid2 size={4} key={item.name}>
                <ReviewCard {...item} />
              </Grid2>
            ))}
          </Grid2>
        </Stack>
      </Container>
    </Box>
  );
};

export default Collection;
