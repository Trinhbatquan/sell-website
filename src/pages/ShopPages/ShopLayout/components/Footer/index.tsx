import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#344943",
        paddingBlock: "3rem",
        "& > *": { color: "#fff" },
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container rowSpacing={1} columnSpacing={4}>
          <Grid2 size={3}>
            <Stack gap={2}>
              <Typography variant="h5">THÔNG TIN LIÊN HỆ</Typography>
              <Typography variant="body1">
                Thương hiệu nội thất và trang trí Việt Nam, góp phần xây dựng
                thêm nhiều tổ ấm mỗi ngày
              </Typography>
            </Stack>
          </Grid2>
          <Grid2 size={3}>
            <Stack gap={2}>
              <Typography variant="h5">CHĂM SÓC KHÁCH HÀNG</Typography>
              <Typography variant="body1">
                Thời gian hỗ trợ 24/7 <br />
                Không kể ngày lễ
              </Typography>
              <Typography variant="body1">
                Hotline <br />
                1800.0000
              </Typography>
            </Stack>
          </Grid2>
          <Grid2 size={3}>
            <Stack gap={2}>
              <Typography variant="h5">HƯỚNG DẪN</Typography>
              <Typography variant="body1">Chính sách mua bán</Typography>
              <Typography variant="body1">Hệ thống kiểm duyệt</Typography>
              <Typography variant="body1">Chính sách bảo mật</Typography>
              <Typography variant="body1">Hướng dẫn mua hàng</Typography>
            </Stack>
          </Grid2>
          <Grid2 size={3}>
            <Stack gap={2} alignItems="start">
              <Typography variant="h5">KẾT NỐI</Typography>
              <Stack direction="row" gap={1} sx={{ marginRight: "0.25rem" }}>
                <InstagramIcon
                  sx={{
                    cursor: "pointer",
                    paddingBlock: "0.25rem",
                    paddingInlineEnd: "0.25rem",
                  }}
                />
                <FacebookIcon sx={{ cursor: "pointer", padding: "0.25rem" }} />
                <TwitterIcon sx={{ cursor: "pointer", padding: "0.25rem" }} />
              </Stack>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Footer;
