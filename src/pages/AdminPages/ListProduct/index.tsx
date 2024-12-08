import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Tabs,
  Tab,
  TextField,
  Checkbox,
  Container,
  Badge,
  Grid,
  MenuItem,
  BadgeProps,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Switch,
  Select,
  Pagination,
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
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import order1 from "../../../assets/banners/order1.png";
import order2 from "../../../assets/banners/order2.png";
import order3 from "../../../assets/banners/order3.png";
import order4 from "../../../assets/banners/order4.png";
import styled from "styled-components";

interface ProductVariant {
  id: number;
  name: string;
  price: number;
  stock: number;
  active: boolean;
  mId: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  active: boolean;
  likes: number;
  shares: number;
  comments: number;
  img: string;
  variants: ProductVariant[];
  isSelected: boolean;
}

const data: Product[] = [
  {
    id: 1,
    name: "Áo dạ dáng dài vải POPLIN",
    price: 1550000,
    stock: 180,
    active: true,
    likes: 4,
    shares: 50,
    comments: 15,
    img: order1,
    isSelected: false,
    variants: [
      {
        id: 1,
        name: "Áo trắng, int:S",
        price: 1550000,
        stock: 20,
        active: true,
        mId: "TTMA0226A0UT...",
      },
      {
        id: 2,
        name: "Áo trắng, int:M",
        price: 1550000,
        stock: 20,
        active: false,
        mId: "TTMA0226A0UT...",
      },
      {
        id: 3,
        name: "Áo trắng, int:L",
        price: 1550000,
        stock: 20,
        active: true,
        mId: "TTMA0226A0UT...",
      },
    ],
  },
  {
    id: 2,
    name: "Áo khoác lông màu trắng CADDY",
    price: 1750000,
    stock: 90,
    active: true,
    likes: 8,
    shares: 30,
    comments: 25,
    img: order2,
    isSelected: false,
    variants: [
      {
        id: 4,
        name: "Áo khoác, int:S",
        price: 1750000,
        stock: 30,
        active: true,
        mId: "GIMA0252U0TCX280...",
      },
      {
        id: 5,
        name: "Áo khoác, int:M",
        price: 1750000,
        stock: 30,
        active: true,
        mId: "GIMA0252U0TCX280...",
      },
      {
        id: 6,
        name: "Áo khoác, int:L",
        price: 1750000,
        stock: 30,
        active: false,
        mId: "GIMA0252U0TCX280...",
      },
    ],
  },
  {
    id: 3,
    name: "Áo thun cotton hữu cơ",
    price: 1150000,
    stock: 90,
    active: true,
    likes: 20,
    shares: 30,
    comments: 100,
    img: order3,
    isSelected: false,
    variants: [
      {
        id: 7,
        name: "Áo khoác, int:S",
        price: 1750000,
        stock: 30,
        active: true,
        mId: "THJE0263P1USCS87L...",
      },
      {
        id: 8,
        name: "Áo khoác, int:M",
        price: 1750000,
        stock: 30,
        active: true,
        mId: "THJE0263P1USCS87L...",
      },
      {
        id: 9,
        name: "Áo khoác, int:L",
        price: 1750000,
        stock: 30,
        active: false,
        mId: "THJE0263P1USCS87L...",
      },
    ],
  },
  {
    id: 4,
    name: "SANDAL bong bống có nút thắt bằng da",
    price: 1460000,
    stock: 120,
    active: true,
    likes: 30,
    shares: 45,
    comments: 345,
    img: order4,
    isSelected: false,
    variants: [
      {
        id: 10,
        name: "Áo khoác, int:S",
        price: 1750000,
        stock: 30,
        active: true,
        mId: "THJE0263P1USCS87L...",
      },
      {
        id: 11,
        name: "Áo khoác, int:M",
        price: 1750000,
        stock: 30,
        active: true,
        mId: "THJE0263P1USCS87L...",
      },
      {
        id: 12,
        name: "Áo khoác, int:L",
        price: 1750000,
        stock: 30,
        active: false,
        mId: "THJE0263P1USCS87L...",
      },
    ],
  },
];

interface TabData {
  label: string;
  badgeCount: string;
  isBadge: boolean;
}

const tabsData: TabData[] = [
  { label: "Tất cả", badgeCount: "100", isBadge: true },
  { label: "Đang hoạt động", badgeCount: "100", isBadge: true },
  { label: "Không hoạt động", badgeCount: "0", isBadge: true },
  { label: "Bản nháp", badgeCount: "0", isBadge: false },
  { label: "Đã xóa", badgeCount: "0", isBadge: false },
];

const ListProduct: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to "Đang hoạt động"
  const [filters, setFilters] = useState({
    productName: "",
    productCode: "",
    category: "",
    sortBy: "",
  });
  const proList = [data, data, [], [], []];
  const [products, setProducts] = useState(proList[activeTab]);

  useEffect(() => {
    setProducts(proList[activeTab]);
  }, [activeTab]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    "& .MuiBadge-badge": {
      top: "-10px",
    },
  }));

  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [totalItems] = useState<number>(300);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleSelectAll = (value: boolean) => {
    if (value) {
      setProducts((prev) => {
        return prev.map((item) => ({
          ...item,
          isSelected: true,
        }));
      });
    } else {
      setProducts((prev) => {
        return prev.map((item) => ({
          ...item,
          isSelected: false,
        }));
      });
    }
  };

  const handleChangeSelected = (id: number, value: boolean) => {
    setProducts((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isSelected: value,
          };
        }
        return item;
      });
    });
  };

  const handleChangeActiveAll = (id: number, value: boolean) => {
    setProducts((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            active: value,
          };
        }
        return item;
      });
    });
  };

  const handleChangeActive = (id: number, subId: number, value: boolean) => {
    setProducts((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            variants: item.variants.map((variant) => {
              if (variant.id === subId) {
                return {
                  ...variant,
                  active: value,
                };
              }
              return variant;
            }),
          };
        }
        return item;
      });
    });
  };

  return (
    <Container maxWidth="lg">
      <Stack gap={3}>
        <Box sx={{ p: 2, bgcolor: "#fff8f0", borderRadius: "8px" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="fullWidth"
              scrollButtons="auto"
              sx={{ fontSize: "14px" }}
            >
              {tabsData.map((tab, index) => (
                <Tab
                  key={index}
                  label={
                    <StyledBadge
                      badgeContent={
                        tab.isBadge ? tab.badgeCount : +tab.badgeCount
                      }
                      color="error"
                      sx={{
                        top: "6px",
                      }}
                    >
                      {tab.label}
                    </StyledBadge>
                  }
                  sx={{
                    textTransform: "inherit",
                    fontWeight: activeTab === index ? "bold" : "normal",
                    fontSize: "14px",
                  }}
                />
              ))}
            </Tabs>
          </Box>

          {/* Filters */}
          <Box mt={2}>
            <Grid container spacing={3}>
              {/* Product Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Tên sản phẩm"
                  variant="outlined"
                  fullWidth
                  value={filters.productName}
                  onChange={(e) =>
                    handleFilterChange("productName", e.target.value)
                  }
                />
              </Grid>

              {/* Product Code */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mã sản phẩm"
                  variant="outlined"
                  fullWidth
                  value={filters.productCode}
                  onChange={(e) =>
                    handleFilterChange("productCode", e.target.value)
                  }
                />
              </Grid>

              {/* Category */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Ngành hàng"
                  variant="outlined"
                  fullWidth
                  select
                  value={filters.category}
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                >
                  <MenuItem value="">Tất cả</MenuItem>
                  <MenuItem value="category1">Danh mục 1</MenuItem>
                  <MenuItem value="category2">Danh mục 2</MenuItem>
                </TextField>
              </Grid>

              {/* Sort By */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Sắp xếp"
                  variant="outlined"
                  fullWidth
                  select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange("sortBy", e.target.value)}
                >
                  <MenuItem value="">Không sắp xếp</MenuItem>
                  <MenuItem value="asc">Giá tăng dần</MenuItem>
                  <MenuItem value="desc">Giá giảm dần</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box sx={{ p: 2, bgcolor: "#fff8f0", borderRadius: "8px" }}>
          <Box sx={{ mb: 2, display: "flex", justifyContent: "end", gap: 2 }}>
            <Button
              size="small"
              variant="outlined"
              sx={{ textTransform: "inherit" }}
            >
              Xóa hàng loạt
            </Button>
            <Button
              size="small"
              variant="outlined"
              sx={{ textTransform: "inherit" }}
            >
              Chỉnh sửa hàng loạt
            </Button>
          </Box>
          <TableContainer>
            <Table>
              <TableHead sx={{ bgcolor: "#427892", color: "#fff" }}>
                <TableRow sx={{ bgcolor: "#427892", color: "#fff" }}>
                  <TableCell sx={{ color: "#fff" }} padding="checkbox">
                    <Checkbox
                      sx={{ color: "#fff" }}
                      checked={
                        products.length > 0 &&
                        products.every((item) => item.isSelected)
                      }
                      onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    Thông tin sản phẩm
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>Giá bán</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Kho hàng</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Đang hoạt động</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Thao tác</TableCell>
                </TableRow>
              </TableHead>
              {products.length > 0 && (
                <TableBody>
                  {products.map((product) => (
                    <>
                      {/* Parent Product Row */}
                      <TableRow>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={product.isSelected}
                            onChange={(e) =>
                              handleChangeSelected(product.id, e.target.checked)
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Box
                              component="img"
                              src={product.img}
                              alt="Product"
                              width={80}
                              height={80}
                              sx={{ marginRight: 2 }}
                            />
                            <Box>
                              <Typography variant="subtitle1">
                                {product.name}
                              </Typography>
                              <Box
                                display="flex"
                                alignItems="center"
                                gap={2}
                                mt={0.5}
                              >
                                <Typography
                                  variant="caption"
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    opacity: 0.8,
                                  }}
                                >
                                  <ShoppingBagOutlinedIcon
                                    sx={{ fontSize: "18px" }}
                                  />{" "}
                                  {product.likes}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    opacity: 0.8,
                                  }}
                                >
                                  <FavoriteBorderOutlinedIcon
                                    sx={{ fontSize: "18px" }}
                                  />{" "}
                                  {product.comments}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    opacity: 0.8,
                                  }}
                                >
                                  <VisibilityOutlinedIcon
                                    sx={{ fontSize: "18px" }}
                                  />{" "}
                                  {product.shares}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "red",
                            fontSize: "16px",
                            fontWeight: "normal",
                          }}
                        >
                          {product.price.toLocaleString("vi-VN")}đ
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: "16px", fontWeight: "normal" }}
                        >
                          {product.stock}
                        </TableCell>
                        <TableCell>
                          <Switch
                            size="medium"
                            checked={product.active}
                            onChange={(e) =>
                              handleChangeActiveAll(
                                product.id,
                                e.target.checked
                              )
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body1"
                            color="secondary"
                            sx={{ cursor: "pointer" }}
                          >
                            Chỉnh sửa
                          </Typography>
                          <Typography
                            variant="body1"
                            color="secondary"
                            sx={{ cursor: "pointer", mt: 0.5 }}
                          >
                            Xóa
                          </Typography>
                        </TableCell>
                      </TableRow>

                      {product.variants.map((variant, index) => (
                        <TableRow
                          key={variant.id}
                          sx={{ width: "100%", padding: 0 }}
                        >
                          <TableCell padding="checkbox" />
                          <TableCell>
                            <>
                              <Box display="flex" alignItems="center">
                                <Box
                                  component="img"
                                  src={product.img}
                                  alt="Product"
                                  width={50}
                                  height={50}
                                  sx={{ marginRight: 2 }}
                                />
                                <Stack gap={0.5}>
                                  <Typography variant="caption">
                                    {variant.name}
                                  </Typography>
                                  <Typography variant="caption">
                                    Mã sản phầm: {variant.mId}
                                  </Typography>
                                </Stack>
                              </Box>
                              {index === product.variants.length - 1 && (
                                <Typography
                                  variant="body1"
                                  color="secondary"
                                  sx={{ cursor: "pointer", mt: 2.5, ml: 2 }}
                                >
                                  Xem thêm 6 biến thể
                                </Typography>
                              )}
                            </>
                          </TableCell>

                          <TableCell
                            sx={{
                              fontSize: "13px",
                              fontWeight: "normal",
                              color: "red",
                            }}
                          >
                            {variant.price.toLocaleString("vi-VN")}đ
                          </TableCell>
                          <TableCell
                            sx={{ fontSize: "13px", fontWeight: "normal" }}
                          >
                            {variant.stock}
                          </TableCell>
                          <TableCell>
                            <Switch
                              size="small"
                              checked={variant.active}
                              onChange={(e) =>
                                handleChangeActive(
                                  product.id,
                                  variant.id,
                                  e.target.checked
                                )
                              }
                            />
                          </TableCell>
                          <TableCell />
                        </TableRow>
                      ))}
                    </>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>
          {products.length === 0 ? (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="fit-content"
              textAlign="center"
              bgcolor="#f9f9f9"
              p={4}
              minWidth="400px"
            >
              <ShoppingCartIcon
                sx={{ fontSize: 60, color: "#bdbdbd", mb: 2 }}
              />
              <Typography variant="h5" gutterBottom>
                Không có sản phẩm
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
                Không tìm thấy sản phẩm thuộc trạng thái trên
              </Typography>
            </Box>
          ) : (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                padding: 2,
                border: "1px solid #E0E0E0",
                borderRadius: 1,
                backgroundColor: "#F9F9F9",
              }}
            >
              {/* Total items */}
              <Typography variant="body2" color="textSecondary">
                Tổng sản phẩm: {totalItems}
              </Typography>

              {/* Items per page */}
              <Select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                size="small"
                sx={{ marginRight: 2, minWidth: 60 }}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </Select>

              {/* Previous Button */}
              <Button
                variant="outlined"
                size="small"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                sx={{ textTransform: "none" }}
              >
                Trang trước
              </Button>

              {/* Pagination */}
              <Pagination
                count={Math.ceil(totalItems / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                size="small"
                siblingCount={1}
                boundaryCount={1}
                showFirstButton
                showLastButton
              />

              {/* Next Button */}
              <Button
                variant="outlined"
                size="small"
                disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, Math.ceil(totalItems / itemsPerPage))
                  )
                }
                sx={{ textTransform: "none", marginLeft: 2 }}
              >
                Tiếp theo
              </Button>

              {/* Go to Page */}
              <Box display="flex" alignItems="center" ml={2}>
                <Typography variant="body2" color="textSecondary" mr={1}>
                  Truy cập trang:
                </Typography>
                <TextField
                  size="small"
                  type="number"
                  sx={{ width: 60, marginRight: 1 }}
                  onChange={(e) =>
                    setCurrentPage(
                      Math.min(
                        Number(e.target.value),
                        Math.ceil(totalItems / itemsPerPage)
                      )
                    )
                  }
                />
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ textTransform: "none" }}
                >
                  Xem
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default ListProduct;
