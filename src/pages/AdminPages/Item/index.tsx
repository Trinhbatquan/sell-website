import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Tabs,
  Tab,
  TextField,
  Checkbox,
  Avatar,
  Divider,
  IconButton,
  Container,
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
import { productList } from "../../../constants";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IProduct } from "../../../interfaces";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Order extends IProduct {
  id: number;
  customerName: string;
  quantity: number;
  totalPrice: string;
  orderId: string;
  orderDate: string;
  status: string;
}

const Item: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [orderCode, setOrderCode] = useState("");

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const orders: Order[] = [
    {
      ...productList[2],
      customerName: "Su ra",
      quantity: 1,
      totalPrice: "8.000.000 đ",
      orderId: "466123626681203",
      orderDate: "27 Mar 2024 14:00",
      status: "Chờ xác nhận",
      id: 1,
    },
    {
      ...productList[8],
      customerName: "Nga",
      quantity: 1,
      totalPrice: "2.500.000 đ",
      orderId: "466123626681203",
      orderDate: "27 Mar 2024 14:00",
      status: "Chờ xác nhận",
      id: 2,
    },
    {
      ...productList[14],
      customerName: "Dung",
      quantity: 1,
      totalPrice: "5.000.000 đ",
      orderId: "466123626681203",
      orderDate: "27 Mar 2024 14:00",
      status: "Chờ xác nhận",
      id: 3,
    },
    {
      ...productList[17],
      customerName: "Thanh",
      quantity: 2,
      totalPrice: "10.000.000 đ",
      orderId: "466123626681203",
      orderDate: "27 Mar 2024 14:00",
      status: "Chờ xác nhận",
      id: 3,
    },
    {
      ...productList[20],
      customerName: "Hồng",
      quantity: 4,
      totalPrice: "8.000.000 đ",
      orderId: "466123626681203",
      orderDate: "27 Mar 2024 14:00",
      status: "Chờ xác nhận",
      id: 3,
    },
  ];

  const [order, setOrder] = useState<Array<Order[]>>([orders, [], [], [], []]);
  const selectedOrder = order[activeTab];

  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Handle Select All Checkbox
  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    setSelectedOrders(checked ? orders.map((order) => order.id) : []);
  };

  // Handle Individual Checkbox
  const handleCheckboxChange = (orderId: number, checked: boolean) => {
    setSelectedOrders((prev) =>
      checked ? [...prev, orderId] : prev.filter((id) => id !== orderId)
    );
  };

  return (
    <Container maxWidth="lg">
      <Stack gap={1}>
        <Box sx={{ p: 2, bgcolor: "#fff8f0", borderRadius: "8px" }}>
          {/* Tabs for order status */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            variant="fullWidth"
            sx={{
              mb: 3,
              borderBottom: "1px solid #ddd",
            }}
          >
            <Tab sx={{ textTransform: "inherit" }} label="Chờ xác nhận" />
            <Tab
              sx={{ textTransform: "inherit" }}
              label="Chờ đóng gói và bàn giao"
            />
            <Tab sx={{ textTransform: "inherit" }} label="Đang vận chuyển" />
            <Tab sx={{ textTransform: "inherit" }} label="Đã giao" />
            <Tab sx={{ textTransform: "inherit" }} label="Thất bại" />
          </Tabs>

          {/* Input Fields */}
          <Box
            display="flex"
            gap={2}
            sx={{ mb: 3 }}
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <TextField
              label="Tên khách hàng"
              variant="outlined"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              fullWidth
              sx={{ flex: 1, minWidth: "300px" }}
            />
            <TextField
              label="Mã đơn hàng"
              variant="outlined"
              value={orderCode}
              onChange={(e) => setOrderCode(e.target.value)}
              fullWidth
              sx={{ flex: 1, minWidth: "300px" }}
            />
          </Box>

          {/* Buttons */}
          <Box display="flex" gap={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: "inherit" }}
              size="small"
            >
              Đóng gói và in
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ textTransform: "inherit" }}
              size="small"
            >
              In danh sách chọn
            </Button>
          </Box>
        </Box>
        <Box sx={{ p: 2, bgcolor: "#fefefe", borderRadius: "8px" }}>
          {/* Header */}
          <Box
            display="flex"
            alignItems="center"
            p={1}
            bgcolor="#344943"
            color="#fff"
            borderRadius="8px"
          >
            <Checkbox
              sx={{ color: "#fff" }}
              checked={selectAll}
              onChange={(e) => handleSelectAll(e.target.checked)}
            />
            <Typography sx={{ flex: 1, fontWeight: "bold" }}>
              Sản phẩm
            </Typography>
            <Typography sx={{ width: "12%", textAlign: "center" }}>
              Số lượng
            </Typography>
            <Typography sx={{ width: "14%", textAlign: "center" }}>
              Tổng tiền
            </Typography>
            <Typography sx={{ width: "15%", textAlign: "center" }}>
              Trạng thái
            </Typography>
            <Typography sx={{ width: "15%", textAlign: "center" }}>
              Thao tác
            </Typography>
          </Box>

          {selectedOrder.length === 0 ? (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="fit-content"
              textAlign="center"
              bgcolor="#f9f9f9"
              p={4}
            >
              <ShoppingCartIcon
                sx={{ fontSize: 60, color: "#bdbdbd", mb: 2 }}
              />
              <Typography variant="h5" gutterBottom>
                Không có đơn hàng
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
                Xin lỗi, chúng tôi không tìm thấy đơn hàng nào bây giờ
              </Typography>
            </Box>
          ) : (
            selectedOrder.map((order) => (
              <Box
                key={order.id}
                display="flex"
                alignItems="center"
                flexDirection="column"
                p={1}
                mt={2}
                borderRadius="8px"
                border="1px solid #ddd"
                bgcolor="#fff"
                gap={1}
              >
                <Stack
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  flexDirection="row"
                  gap={2}
                >
                  <Stack
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    flexDirection="row"
                    gap={1}
                  >
                    <Checkbox
                      checked={selectedOrders.includes(order.id)}
                      onChange={(e) =>
                        handleCheckboxChange(order.id, e.target.checked)
                      }
                    />
                    <PersonIcon style={{ fontSize: "24px" }} />
                    <Typography fontWeight="bold">
                      {order.customerName}
                    </Typography>
                    <IconButton color="inherit">
                      <MessageIcon style={{ fontSize: "20px" }} />
                    </IconButton>
                    <Typography fontWeight="bold">
                      {"("} 1 sản phẩm {")"}{" "}
                    </Typography>
                  </Stack>
                  <Stack
                    display="flex"
                    alignItems="center"
                    justifyContent="end"
                    flexDirection="row"
                    gap={4}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Số đơn hàng: {order.orderId}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Thời gian đặt hàng: {order.orderDate}
                    </Typography>
                    <IconButton color="inherit" size="small">
                      <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
                    </IconButton>
                  </Stack>
                </Stack>
                <Divider sx={{ height: "1px", width: "100%" }} />
                <Stack
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  flexDirection="row"
                  gap={1}
                  pl={8}
                >
                  <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={order.imgLink}
                      alt={order.imgLink}
                      sx={{ mr: 2, width: 56, height: 56 }}
                    />
                    <Box>
                      <Typography>{order.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Màu sắc: {order.color}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ width: "12%", textAlign: "center" }}>
                    x {order.quantity}
                  </Typography>
                  <Typography sx={{ width: "14%", textAlign: "center" }}>
                    {order.totalPrice} (COD)
                  </Typography>
                  <Typography sx={{ width: "15%", textAlign: "center" }}>
                    {order.status}
                  </Typography>
                  <Box width="15%">
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        width: "100px",
                        textAlign: "center",
                        textTransform: "inherit",
                        bgcolor: "#344943",
                        color: "#fff",
                      }}
                    >
                      Hủy đơn
                    </Button>
                  </Box>
                </Stack>
              </Box>
            ))
          )}

          {selectedOrder.length !== 0 && (
            <Stack display="flex" alignItems="center" sx={{ width: "100%" }}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  marginTop: 3,
                  backgroundColor: "#fdcc7f",
                  width: 120,
                  textTransform: "initial",
                }}
                onClick={() => {}}
              >
                Xem thêm
              </Button>
            </Stack>
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default Item;
