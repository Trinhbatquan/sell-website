import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import color1 from "../../../assets/image/color1.png";
import color2 from "../../../assets/image/color2.png";
import chart from "../../../assets/image/chart.png";
import tick from "../../../assets/image/tick.png";
import { productList } from "../../../constants";

const ManagerFeedback: React.FC = () => {
  const productData = [
    {
      id: 1,
      name: "Đèn chùm Rosemas pha lê",
      image: productList[6].imgLink, // Replace with actual image path
      visitors: 234,
      orders: 4,
    },
    {
      id: 2,
      name: "Ghế Sofa Chicago 3 chỗ",
      image: productList[7].imgLink, // Replace with actual image path
      visitors: 390,
      orders: 2,
    },
    {
      id: 3,
      name: "Đèn ngủ để bàn",
      image: productList[9].imgLink, // Replace with actual image path
      visitors: 245,
      orders: 2,
    },
  ];
  return (
    <Box>
      {/* Summary Cards */}
      <Grid container spacing={2} marginBottom={2}>
        <Grid item xs={4}>
          <Card
            sx={{
              backgroundColor: "#344349",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">7</Typography>
              <Typography variant="body2">
                Đơn hàng chờ xử lý {"  "} {">"}
                {">"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              backgroundColor: "#344349",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">1</Typography>
              <Typography variant="body2">
                Đơn hàng trả chờ xử lý {"  "} {">"}
                {">"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              backgroundColor: "#344349",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">10</Typography>
              <Typography variant="body2">
                Đơn hàng chờ đánh giá {"  "} {">"}
                {">"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ boxShadow: 2, padding: 2 }}>
        <CardContent>
          <Grid container spacing={2}>
            {/* Left Section: Chart and Metrics */}
            <Grid item xs={6}>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="primary"
                  gutterBottom
                >
                  Phân tích nâng cao
                </Typography>

                {/* Revenue Details */}
                <Box
                  display="flex"
                  alignItems="start"
                  gap={2}
                  flexDirection="column"
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight="bold"
                      gutterBottom
                      display="flex"
                      gap={1}
                      alignItems="center"
                    >
                      <img
                        src={color1}
                        alt={color1}
                        style={{ width: "14px", height: "14px" }}
                      />
                      Doanh thu hôm nay
                    </Typography>
                    <Typography variant="h4" color="error" fontWeight="bold">
                      12.500.000
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight="bold"
                      gutterBottom
                      display="flex"
                      gap={1}
                      alignItems="center"
                    >
                      <img
                        src={color2}
                        alt={color2}
                        style={{ width: "14px", height: "14px" }}
                      />
                      So với hôm qua
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ color: "success.main" }}
                    >
                      + 23,44%
                    </Typography>
                  </Box>
                </Box>

                <img
                  src={chart}
                  alt="Chart"
                  style={{ width: "100%", objectFit: "contain" }}
                />
              </Box>
            </Grid>

            {/* Right Section: KPI Cards */}
            <Grid item xs={6}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                gap={2}
                paddingInline={4}
                height="100%"
              >
                {/* Revenue Card */}
                <Paper
                  elevation={3}
                  sx={{
                    paddingBlock: 3,
                    paddingInline: 5,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#f49af7",
                    color: "#fff",
                  }}
                >
                  <Typography variant="body2">Doanh thu (đ)</Typography>
                  <Typography variant="h6" fontWeight="bold">
                    12,500,000
                  </Typography>
                </Paper>

                {/* Orders Card */}
                <Paper
                  elevation={3}
                  sx={{
                    paddingBlock: 3,
                    paddingInline: 5,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Đơn hàng
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    7
                  </Typography>
                </Paper>

                {/* Visitors Card */}
                <Paper
                  elevation={3}
                  sx={{
                    paddingBlock: 3,
                    paddingInline: 5,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Khách truy cập
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    500
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: 3,
              borderRadius: 2,
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              maxWidth: 600,
              minHeight: "116px",
              margin: "0 auto",
            }}
          >
            {/* Quick Delivery Rate Section */}
            <Box textAlign="center">
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Tỷ số giao hàng nhanh
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: "red", marginY: 1 }}
              >
                85,67%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Target &gt;= 95%
              </Typography>
            </Box>

            {/* Chat Response Rate Section */}
            <Box textAlign="center">
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Tỷ lệ phản hồi chat
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: "orange", marginY: 1 }}
              >
                0.54%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Target &lt;= 0.5%
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: 2,
              borderRadius: 2,
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            {/* Title */}
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1 }}>
              Trung tâm phát triển
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: 1 }}
            >
              Bạn có 2 thông số cần tối ưu
            </Typography>

            {/* Options */}
            <Box
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <Typography
                variant="body1"
                sx={{ flex: 1, display: "flex", alignItems: "center", gap: 1 }}
              >
                <img
                  src={tick}
                  style={{
                    width: "20px",
                    height: "20px",
                    objectFit: "contain",
                  }}
                />{" "}
                Đảm bảo tỷ lệ giao hàng đúng hạn
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ backgroundColor: "#2F4F4F", textTransform: "inherit" }}
              >
                Đến
              </Button>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body1"
                sx={{ flex: 1, display: "flex", alignItems: "center", gap: 1 }}
              >
                <img
                  src={tick}
                  style={{
                    width: "20px",
                    height: "20px",
                    objectFit: "contain",
                    opacity: 0,
                  }}
                />
                Đảm bảo tỷ lệ phản hồi chat
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ backgroundColor: "#2F4F4F", textTransform: "inherit" }}
              >
                Đến
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Top Products Table */}
      <Paper elevation={3} sx={{ padding: 2, marginTop: 3, boxShadow: 2 }}>
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          Top sản phẩm xếp hạng theo ngày
        </Typography>

        <TableContainer>
          <Table>
            {/* Table Header */}
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", color: "text.secondary" }}
                >
                  STT
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", color: "text.secondary" }}
                >
                  Sản phẩm
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", color: "text.secondary" }}
                >
                  Khách truy cập
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", color: "text.secondary" }}
                >
                  Đơn hàng
                </TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {productData.map((product) => (
                <TableRow key={product.id}>
                  {/* STT */}
                  <TableCell align="left">
                    <Typography fontWeight="bold">{product.id}</Typography>
                  </TableCell>

                  {/* Product Details */}
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={2}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 8,
                          objectFit: "cover",
                          border: "1px solid rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Typography>{product.name}</Typography>
                    </Box>
                  </TableCell>

                  {/* Visitors */}
                  <TableCell align="center">
                    <Typography fontWeight="bold">
                      {product.visitors}
                    </Typography>
                  </TableCell>

                  {/* Orders */}
                  <TableCell align="center">
                    <Typography fontWeight="bold">{product.orders}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ManagerFeedback;
