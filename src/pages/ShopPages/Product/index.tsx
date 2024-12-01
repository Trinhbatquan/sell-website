import { Container } from "@mui/material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import main from "../../../assets/products/main.png";
import { useLocation } from "react-router-dom";
import {
  getProductList,
  getProductListById,
  ProductType,
} from "../../../constants";
import { ProductCard } from "../../../components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Slide } from "react-slideshow-image";
import { useState } from "react";
import styled from "@emotion/styled";

const Product = () => {
  const state = useLocation()?.state;
  const isHaveStylePro = [
    ProductType.CO_DIEN,
    ProductType.DON_GIAN,
    ProductType.HIEN_DAI,
    ProductType.SANG_TRONG,
  ].includes(state?.to as ProductType);
  const [stylePro, setStylePro] = useState<ProductType | "">(
    isHaveStylePro ? state?.to : ""
  );
  const [price, setPrice] = useState<string[]>([]);
  const products = getProductList(
    [
      isHaveStylePro
        ? ("" as ProductType)
        : (state?.to as ProductType) || ProductType.ALL,
      stylePro as ProductType,
    ].filter((item) => item),
    price
  );
  const checkCheckedPrice = (value: string) => {
    return price.includes(value);
  };
  const handleCheckedPrice = (value: boolean, key: string) => {
    setPrice((prev) =>
      value ? [...prev, key] : prev.filter((item) => item !== key)
    );
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

  return (
    <ProductContainer>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#FFF8F0", p: 2 }}>
          {/* Hero Image */}
          <Box
            component="img"
            src={main}
            alt="Hero Banner"
            sx={{ width: "100%", borderRadius: 2, mb: 2 }}
          />

          {/* Content Layout */}
          <Grid container spacing={2}>
            {/* Sidebar */}
            <Grid item xs={3}>
              <Box sx={{ bgcolor: "#FFF8F0", p: 2, borderRadius: 2 }}>
                {/* Categories */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    DANH MỤC SẢN PHẨM
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, cursor: "pointer" }}
                    variant={
                      stylePro === ProductType.HIEN_DAI ? "body2" : "body1"
                    }
                    onClick={() =>
                      setStylePro(
                        stylePro === ProductType.HIEN_DAI
                          ? ""
                          : ProductType.HIEN_DAI
                      )
                    }
                  >
                    Hiện đại
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, cursor: "pointer" }}
                    variant={
                      stylePro === ProductType.CO_DIEN ? "body2" : "body1"
                    }
                    onClick={() =>
                      setStylePro(
                        stylePro === ProductType.CO_DIEN
                          ? ""
                          : ProductType.CO_DIEN
                      )
                    }
                  >
                    Cổ điển
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, cursor: "pointer" }}
                    variant={
                      stylePro === ProductType.DON_GIAN ? "body2" : "body1"
                    }
                    onClick={() =>
                      setStylePro(
                        stylePro === ProductType.DON_GIAN
                          ? ""
                          : ProductType.DON_GIAN
                      )
                    }
                  >
                    Đơn giản
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, cursor: "pointer" }}
                    variant={
                      stylePro === ProductType.SANG_TRONG ? "body2" : "body1"
                    }
                    onClick={() =>
                      setStylePro(
                        stylePro === ProductType.SANG_TRONG
                          ? ""
                          : ProductType.SANG_TRONG
                      )
                    }
                  >
                    Sang trọng
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Price Filter */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    BỘ LỌC
                  </Typography>
                  <Typography
                    sx={{ mb: 1, fontSize: "14px", fontWeight: "bold" }}
                  >
                    Chọn khoảng giá
                  </Typography>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(checked) =>
                          handleCheckedPrice(
                            checked.target.checked,
                            "Dưới 1 triệu"
                          )
                        }
                        checked={checkCheckedPrice("Dưới 1 triệu")}
                      />
                    }
                    label="Dưới 1 triệu"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(checked) =>
                          handleCheckedPrice(
                            checked.target.checked,
                            "Từ 1 triệu đến 2 triệu"
                          )
                        }
                        checked={checkCheckedPrice("Từ 1 triệu đến 2 triệu")}
                      />
                    }
                    label="Từ 1 triệu đến 2 triệu"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(checked) =>
                          handleCheckedPrice(
                            checked.target.checked,
                            "Từ 2 triệu đến 3 triệu"
                          )
                        }
                        checked={checkCheckedPrice("Từ 2 triệu đến 3 triệu")}
                      />
                    }
                    label="Từ 2 triệu đến 3 triệu"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(checked) =>
                          handleCheckedPrice(
                            checked.target.checked,
                            "Từ 3 triệu đến 5 triệu"
                          )
                        }
                        checked={checkCheckedPrice("Từ 3 triệu đến 5 triệu")}
                      />
                    }
                    label="Từ 3 triệu đến 5 triệu"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(checked) =>
                          handleCheckedPrice(
                            checked.target.checked,
                            "Trên 5 triệu"
                          )
                        }
                        checked={checkCheckedPrice("Trên 5 triệu")}
                      />
                    }
                    label="Trên 5 triệu"
                  />
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Material Filter */}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    CHẤT LIỆU
                  </Typography>
                  <FormControlLabel control={<Checkbox />} label="Gỗ xoan" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Gỗ công nghiệp"
                  />
                  <FormControlLabel control={<Checkbox />} label="Gỗ ổi" />
                  <FormControlLabel control={<Checkbox />} label="Gỗ hương" />
                  <FormControlLabel control={<Checkbox />} label="Nhựa" />
                </Box>
              </Box>
            </Grid>

            {/* Product Grid */}
            <Grid item xs={9}>
              {products.length > 0 ? (
                <>
                  <Grid container spacing={2}>
                    {products.map((product, index) => (
                      <Grid item xs={4} key={index}>
                        <ProductCard {...product} />
                      </Grid>
                    ))}
                  </Grid>

                  {/* Load More Button */}
                  <Box sx={{ textAlign: "center", my: 6 }}>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#fdcc7f",
                        color: "#fff",
                        "&:hover": { bgcolor: "#FFC78A" },
                        textTransform: "inherit",
                        fontSize: "16px",
                        borderRadius: "1.5rem",
                        paddingInline: "1.25rem",
                      }}
                    >
                      Xem thêm &gt;
                    </Button>
                  </Box>
                </>
              ) : (
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
                    sx={{ fontSize: 80, color: "#bdbdbd", mb: 2 }}
                  />
                  <Typography variant="h5" gutterBottom>
                    Không tìm thấy sản phẩm nào
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ mb: 4 }}
                  >
                    Xin lỗi, chúng tôi không tìm thấy bất cứ sản phẩm nào bây
                    giờ
                  </Typography>
                </Box>
              )}
            </Grid>
          </Grid>
          <Typography variant="h3" sx={{ mt: 5, mb: 3, textAlign: "center" }}>
            SẢN PHẨM GỢI Ý
          </Typography>
          <Slide
            slidesToScroll={1}
            slidesToShow={4}
            indicators={false}
            duration={4000}
          >
            {getProductListById([1, 3, 5, 7, 9, 11]).map((item) => (
              <ProductCard {...item} isSlide key={item.id} />
            ))}
          </Slide>
          <Typography variant="h3" sx={{ mt: 5, mb: 3, textAlign: "center" }}>
            SẢN PHẨM BÁN CHẠY
          </Typography>
          <Slide
            slidesToScroll={1}
            slidesToShow={4}
            indicators={false}
            duration={4000}
          >
            {getProductListById([2, 4, 6, 8, 10, 12]).map((item) => (
              <ProductCard
                {...item}
                key={item.id}
                isSlide
                typeBtn="secondary"
              />
            ))}
          </Slide>
        </Box>
      </Container>
    </ProductContainer>
  );
};

export default Product;
