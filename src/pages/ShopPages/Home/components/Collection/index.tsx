import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import { CustomPrimaryBtn, ProductCard } from "../../../../../components";
import { collectionList } from "../../../../../constants";
import banner1 from "../../../../../assets/banners/banner1.png";

const Collection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f1eeee",
        paddingBlock: "3rem",
      }}
    >
      <Container maxWidth="lg">
        <Stack gap={4} alignItems="center">
          <Typography variant="h5">BỘ SƯU TẬP</Typography>
          <Grid2 container rowSpacing={1} columnSpacing={4}>
            <Grid2 size={3}>
              <CustomPrimaryBtn title="Hiện đại" />
            </Grid2>
            <Grid2 size={3}>
              <CustomPrimaryBtn title="Cổ điển" />
            </Grid2>
            <Grid2 size={3}>
              <CustomPrimaryBtn title="Đơn giản" />
            </Grid2>
            <Grid2 size={3}>
              <CustomPrimaryBtn title="Song song" />
            </Grid2>
          </Grid2>
          <Grid2 container rowSpacing={1} columnSpacing={4}>
            {collectionList.map(({ id, ...rest }) => (
              <Grid2 size={3} key={id}>
                <ProductCard {...rest} onClick={() => {}} />
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
                Khám phá nội thất thiết kế đương đại mang đến cảm giác thoải
                mái, sang trọng. Cá nhân hoá trong từng sản phẩm phù hợp với mọi
                không gian sống
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Collection;
