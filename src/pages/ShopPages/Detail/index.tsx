import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
  CardMedia,
  Container,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useLocation, useNavigate } from "react-router-dom";
import { getProductListById, productList } from "../../../constants";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Slide } from "react-slideshow-image";
import { ProductCard } from "../../../components";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  cardProductSelector,
  handleChangeCardProduct,
} from "../../../redux/page.slice";
import { PATH } from "../../router.config";

const Detail = () => {
  const cartProduct = useSelector(cardProductSelector);
  const dispatch = useDispatch();
  const ids = useLocation()?.state;
  const navigate = useNavigate();
  const isHaveProductCart = cartProduct.find((item) => item.id === ids?.to);
  const selectedProduct =
    productList.find((item) => item.id === ids?.to) || productList[0];
  const [selectedColor, setSelectedColor] = useState<string>(
    selectedProduct.color
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [currentImage, setCurrentImage] = useState<string>(
    selectedProduct.imgLink
  );

  const images = [
    selectedProduct.imgLink,
    "https://via.placeholder.com/400x400?text=Sofa+2",
  ];

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
  };

  const ProductContainer = styled.div`
    .react-slideshow-container {
      .nav:first-of-type {
        left: -10px;
      }
      .nav:last-of-type {
        right: -6px;
      }
      button.nav {
        padding: 0.5rem;
        width: 31px;
        height: 31px;
        background-color: rgb(212 212 212 / 60%);
      }
    }
  `;

  const handleAddCart = () => {
    dispatch(
      handleChangeCardProduct([
        ...cartProduct,
        { ...selectedProduct, selectedQuantity: quantity, isSelected: true },
      ])
    );
  };

  const handleBuyNow = () => {
    dispatch(
      handleChangeCardProduct([
        { ...selectedProduct, selectedQuantity: quantity, isSelected: true },
      ])
    );
    navigate(`/${PATH.SHOP}/${PATH.PAYMENT}`);
  };

  return (
    <ProductContainer>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Box
          sx={{
            bgcolor: "#FFF8F0",
            p: 3,
            maxWidth: 1000,
            mx: "auto",
            boxShadow: 2,
            borderRadius: 2,
          }}
        >
          {/* Product Information */}
          <Box sx={{ display: "flex", gap: 4 }}>
            {/* Product Images */}
            <Box>
              <CardMedia
                component="img"
                src={currentImage}
                alt="Selected Product Image"
                sx={{
                  width: 400,
                  height: 400,
                  borderRadius: 2,
                  mb: 2,
                  objectFit: "cover",
                }}
              />
              <Box sx={{ display: "flex", gap: 2 }}>
                {images.map((image, index) => (
                  <CardMedia
                    key={index}
                    component="img"
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => handleImageClick(image)}
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: 1,
                      cursor: "pointer",
                      border:
                        currentImage === image
                          ? "2px solid #FFB84C"
                          : "1px solid #ccc",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Product Details */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                {selectedProduct.title}
              </Typography>
              <Typography variant="h6" sx={{ color: "red", mb: 2 }}>
                {selectedProduct.price}
              </Typography>
              <Divider />
              <Typography sx={{ my: 2 }}>Màu sắc: {selectedColor}</Typography>

              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <CardMedia
                  component="img"
                  src={selectedProduct.imgLink}
                  alt="Xanh lá"
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 1,
                    cursor: "pointer",
                    border:
                      selectedColor === selectedProduct.color
                        ? "2px solid #FFB84C"
                        : "1px solid #ccc",
                  }}
                  onClick={() => setSelectedColor(selectedProduct.color)}
                />
                <CardMedia
                  component="img"
                  src="https://via.placeholder.com/50x50?text=Be"
                  alt="Be"
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 1,
                    cursor: "pointer",
                    border:
                      selectedColor === "Be"
                        ? "2px solid #FFB84C"
                        : "1px solid #ccc",
                  }}
                  onClick={() => setSelectedColor("Be")}
                />
              </Box>

              <Typography sx={{ mb: 1 }}>Số lượng: Còn hàng</Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}
              >
                <IconButton onClick={decreaseQuantity}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{quantity}</Typography>
                <IconButton onClick={increaseQuantity}>
                  <AddIcon />
                </IconButton>
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#FFB84C",
                    "&:hover": { bgcolor: "#FFA733" },
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                  disabled={!!isHaveProductCart}
                  onClick={isHaveProductCart ? () => {} : handleAddCart}
                >
                  {isHaveProductCart
                    ? "Đã có trong giỏ hàng"
                    : "Thêm vào giỏ hàng"}
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#FF5733",
                    "&:hover": { bgcolor: "#FF451F" },
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                  onClick={handleBuyNow}
                >
                  Mua ngay
                </Button>
              </Box>
              <Divider />
              <Typography sx={{ color: "gray", fontSize: 14, mt: 2, mb: 1 }}>
                Quyền lợi và chính sách:
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="start"
                gap="1rem"
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    mb: 1,
                  }}
                >
                  <SwapHorizIcon />7 ngày hoàn trả miễn phí
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    display: "flex",
                    gap: "0.25rem",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <ShieldOutlinedIcon /> Bảo hành trong vòng 12 tháng
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    display: "flex",
                    gap: "0.25rem",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <LocalShippingOutlinedIcon /> Miễn phí vận chuyển
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Product Description */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Thông tin sản phẩm
          </Typography>
          <Typography sx={{ mb: 4 }}>
            Ghế sofa đơn mini vài bố. Sofa decor nhỏ nhắn gọn nhẹ phù hợp cho 1
            người ngồi. Ghế sofa đơn nhỏ gọn nhưng rất tiện ích, thiết kế khá
            đơn giản, hiện đại. Phù hợp với nhiều không gian phòng, không gian
            decor khác nhau.
          </Typography>

          {/* Product Specifications */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Mô tả chi tiết
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 2 }}>
            <Typography>Danh mục:</Typography>
            <Typography>Trang chủ &gt; {selectedProduct.title}</Typography>

            <Typography>Xuất xứ:</Typography>
            <Typography>Việt Nam</Typography>

            <Typography>Chất liệu:</Typography>
            <Typography>Nhung</Typography>

            <Typography>Màu sắc:</Typography>
            <Typography>Xanh lá, Be</Typography>

            <Typography>Kích thước:</Typography>
            <Typography>700 x 720 x 980 mm</Typography>

            <Typography>Bảo hành:</Typography>
            <Typography>3 tháng</Typography>
          </Box>
        </Box>
        <Typography variant="h3" sx={{ mt: 5, mb: 3, textAlign: "center" }}>
          SẢN PHẨM CÙNG DANH MỤC
        </Typography>
        <Slide
          slidesToScroll={1}
          slidesToShow={4}
          indicators={false}
          duration={4000}
        >
          {getProductListById([2, 4, 6, 8, 10, 12]).map((item) => (
            <ProductCard {...item} key={item.id} />
          ))}
        </Slide>
      </Container>
    </ProductContainer>
  );
};

export default Detail;
