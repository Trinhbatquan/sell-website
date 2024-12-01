import { Fragment, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  IconButton,
  Container,
  Avatar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  cardProductSelector,
  handleChangeCardProduct,
} from "../../../redux/page.slice";
import { PATH } from "../../router.config";

const Checkout = () => {
  const cartProduct = useSelector(cardProductSelector);
  const [payment, setPayment] = useState<"COD" | "Paypal" | "">("");
  const [isConfirm, setConfirm] = useState<boolean>(false);
  const selectedProduct = cartProduct.filter((item) => item.isSelected);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDone, setDone] = useState(false);
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

  const calculateTotal = () => {
    return selectedProduct.reduce(
      (sum, item) =>
        sum +
        parseInt(item.price.replace(/\./g, "").replace(" đ", ""), 10) *
          item.selectedQuantity,
      0
    );
  };

  const handlePayment = (value: boolean, key: string) => {
    console.log(value, key);
    if (value) {
      setPayment(key as "COD" | "Paypal");
    } else {
      setPayment("");
    }
  };
  return (
    <Container maxWidth="lg">
      {!isDone ? (
        <Box
          sx={{
            width: "100%",
            margin: "auto",
            backgroundColor: "#F9F9F9",
            padding: 2,
            borderRadius: 2,
            boxShadow: 2,
            my: 3,
          }}
        >
          {/* Address Section */}
          <Box
            sx={{
              backgroundColor: "#2F4F4F",
              padding: 2,
              color: "#FFFFFF",
              borderRadius: 1,
            }}
          >
            <Typography variant="subtitle1">Địa chỉ nhận hàng</Typography>
            <Typography variant="body2">Nguyễn Thị Phương Thanh</Typography>
            <Typography variant="body2">(+84) 0979263102</Typography>
            <Typography variant="body2">
              96 Định Công, Hoàng Mai, Hà Nội
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                marginTop: 1,
                backgroundColor: "#FFFFFF",
                color: "#2F4F4F",
                textTransform: "none",
              }}
            >
              Thay đổi
            </Button>
          </Box>

          {/* Product Section */}
          <Box mt={2}>
            <Typography variant="h6" gutterBottom>
              Sản phẩm
            </Typography>
            {selectedProduct.map((product, index) => (
              <Fragment key={product.id}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ my: 1.5 }}
                >
                  <Box display="flex" alignItems="center">
                    <img
                      src={product.imgLink} // Replace with actual image URL
                      alt="Ghế Sofa Armchair Royal"
                      style={{
                        borderRadius: 8,
                        marginRight: 16,
                        width: 50,
                        height: 50,
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1">
                        {product.title}
                      </Typography>
                      <Typography variant="body2">{product.color}</Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center" mt={2}>
                    <Typography>Số lượng:</Typography>
                    <IconButton
                      onClick={() => handleQuantityChange(product.id, -1)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography>{product.selectedQuantity}</Typography>
                    <IconButton
                      onClick={() => handleQuantityChange(product.id, 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="h6" color="error">
                    {product.price}
                  </Typography>
                </Box>
                {index !== selectedProduct.length - 1 && (
                  <Divider sx={{ my: 1.5 }} />
                )}
              </Fragment>
            ))}

            {/* Notes and Discount Section */}
            <TextField
              label="Ghi chú"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Mã giảm giá"
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
            />
          </Box>

          {/* Payment Method Section */}
          <Box mt={2}>
            <Typography variant="h6" gutterBottom>
              Phương thức thanh toán
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={payment === "COD"}
                  onChange={(e) => handlePayment(e.target.checked, "COD")}
                />
              }
              label="Thanh toán khi nhận hàng (COD)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={payment === "Paypal"}
                  onChange={(e) => handlePayment(e.target.checked, "Paypal")}
                />
              }
              label="Thanh toán qua thẻ tín dụng"
            />
          </Box>

          {/* Total Section */}
          <Divider sx={{ my: 2 }} />
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography>Đơn giá</Typography>
            <Typography>{calculateTotal().toLocaleString()} ₫</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography>Phí vận chuyển</Typography>
            <Typography>Miễn phí</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Tổng tiền</Typography>
            <Typography variant="h6" color="error">
              {calculateTotal().toLocaleString()} ₫
            </Typography>
          </Box>

          {/* Agreement and Submit Button */}
          <FormControlLabel
            control={
              <Checkbox
                checked={isConfirm}
                onChange={(e) => {
                  setConfirm(e.target.checked);
                }}
              />
            }
            label="Tôi đồng ý với chính sách và điều khoản."
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            fullWidth
            disabled={!isConfirm || !payment}
            sx={{
              bgcolor: "#FFB84C",
              "&:hover": { bgcolor: "#FFA733" },
              textTransform: "none",
              fontWeight: "bold",
              mt: 3,
            }}
            onClick={() => {
              dispatch(handleChangeCardProduct([]));
              setDone(true);
            }}
          >
            Thanh toán
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            maxWidth: 500,
            margin: "auto",
            padding: 3,
            backgroundColor: "#FFF8E1",
            borderRadius: 2,
            textAlign: "center",
            boxShadow: 3,
            my: 3,
          }}
        >
          {/* Success Icon */}
          <Avatar
            sx={{
              margin: "auto",
              backgroundColor: "#4CAF50",
              width: 80,
              height: 80,
              marginBottom: 2,
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 50, color: "#FFFFFF" }} />
          </Avatar>

          {/* Success Message */}
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Đặt hàng thành công!
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#9E9E9E", marginBottom: 3 }}
          >
            ...................................................
          </Typography>

          {/* Shipping Information */}
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
            Thông tin giao hàng
          </Typography>
          <Typography variant="body1">Nguyễn Thị Phương Thanh</Typography>
          <Typography variant="body1">0979263102</Typography>
          <Typography variant="body1">
            96 Định Công, Hoàng Mai, Hà Nội
          </Typography>

          {/* Back to Home Button */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FFB84C",
              "&:hover": { bgcolor: "#FFA733" },
              textTransform: "none",
              fontWeight: "bold",
              mt: 3,
            }}
            onClick={() => navigate(`/${PATH.SHOP}`)}
          >
            Về trang chủ
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Checkout;
