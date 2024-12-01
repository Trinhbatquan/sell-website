import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Checkbox,
  Divider,
  Container,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  cardProductSelector,
  handleChangeCardProduct,
} from "../../../redux/page.slice";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../router.config";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  const cartProduct = useSelector(cardProductSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useState<number[]>(
    cartProduct.filter((item) => item.isSelected).map((item) => item.id)
  );

  useEffect(() => {
    setSelectedItems(
      cartProduct.filter((item) => item.isSelected).map((item) => item.id)
    );
  }, [cartProduct]);

  const handleQuantityChange = (id: number, delta: number) => {
    dispatch(
      handleChangeCardProduct(
        cartProduct.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              selectedQuantity: Math.max(1, item.selectedQuantity + delta),
            };
          }
          return item;
        })
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    dispatch(
      handleChangeCardProduct(cartProduct.filter((item) => item.id !== id))
    );
  };

  const handleSelectItem = (id: number) => {
    dispatch(
      handleChangeCardProduct(
        cartProduct.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              isSelected: !item.isSelected,
            };
          }
          return item;
        })
      )
    );
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      handleChangeCardProduct(
        cartProduct.map((item) => {
          return {
            ...item,
            isSelected: event.target.checked,
          };
        })
      )
    );
  };

  const calculateTotal = () => {
    return cartProduct
      .filter((item) => selectedItems.includes(item.id))
      .reduce(
        (sum, item) =>
          sum +
          parseInt(item.price.replace(/\./g, "").replace(" đ", ""), 10) *
            item.selectedQuantity,
        0
      );
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          bgcolor: "#FFF8F0",
          p: 3,
          maxWidth: 1200,
          mx: "auto",
          boxShadow: 2,
          borderRadius: 2,
          my: 3,
        }}
      >
        {/* Table Header */}
        <Box
          sx={{ display: "flex", py: 1, bgcolor: "#ECECEC", borderRadius: 1 }}
        >
          <Typography sx={{ flex: 1, pl: 2 }}>Sản phẩm</Typography>
          <Typography sx={{ width: 100, textAlign: "center" }}>
            Số lượng
          </Typography>
          <Typography sx={{ width: 150, textAlign: "center" }}>
            Thành tiền
          </Typography>
          <Typography sx={{ width: 50, textAlign: "center" }}>Xóa</Typography>
        </Box>

        <Divider />

        {/* Cart Items */}
        {cartProduct.length === 0 ? (
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
            <ShoppingCartIcon sx={{ fontSize: 80, color: "#bdbdbd", mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Không tìm thấy sản phẩm nào
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
              Xin lỗi, chúng tôi không tìm thấy bất cứ sản phẩm nào bây giờ
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFB84C",
                "&:hover": { bgcolor: "#FFA733" },
                textTransform: "none",
                fontWeight: "bold",
              }}
              onClick={() => navigate(`/${PATH.SHOP}`)}
            >
              Mua sắm
            </Button>
          </Box>
        ) : (
          cartProduct.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                py: 2,
                borderBottom: "1px solid #ECECEC",
              }}
            >
              <Checkbox
                checked={selectedItems.includes(item.id)}
                onChange={() => handleSelectItem(item.id)}
              />
              <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                <img
                  src={item.imgLink}
                  alt={item.imgLink}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 8,
                    marginRight: 16,
                    objectFit: "cover",
                  }}
                />
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "gray", fontSize: 14 }}>
                    Màu sắc: {item.color}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", width: 100 }}>
                <IconButton onClick={() => handleQuantityChange(item.id, -1)}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{item.selectedQuantity}</Typography>
                <IconButton onClick={() => handleQuantityChange(item.id, 1)}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Typography
                sx={{ width: 150, textAlign: "center", color: "red" }}
              >
                {item.price.toLocaleString()} ₫
              </Typography>
              <IconButton onClick={() => handleRemoveItem(item.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))
        )}

        {/* Footer */}
        {cartProduct.length > 0 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 4,
              px: 2,
            }}
          >
            <Checkbox
              checked={selectedItems.length === cartProduct.length}
              onChange={handleSelectAll}
            />
            <Typography>Chọn tất cả</Typography>
            <Typography>Số lượng: {selectedItems.length}</Typography>
            <Typography>
              Tổng tiền:{" "}
              <Typography
                component="span"
                sx={{ color: "red", fontWeight: "bold" }}
              >
                {calculateTotal().toLocaleString()} ₫
              </Typography>
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFB84C",
                "&:hover": { bgcolor: "#FFA733" },
                textTransform: "none",
                fontWeight: "bold",
              }}
              disabled={selectedItems.length === 0}
              onClick={() => navigate(`/${PATH.SHOP}/${PATH.PAYMENT}`)}
            >
              Đặt hàng
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Cart;
