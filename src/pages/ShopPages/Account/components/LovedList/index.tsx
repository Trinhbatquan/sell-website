import { Box, Grid2, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { loveListProductSelector } from "../../../../../redux/page.slice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { productList } from "../../../../../constants";
import { ProductCard } from "../../../../../components";

const LovedList = () => {
  const loveListProduct = useSelector(loveListProductSelector);
  const productLoveListData = productList.filter((item) =>
    loveListProduct.includes(item.id)
  );

  return (
    <Stack gap={1} alignItems="center" sx={{ width: "100%" }}>
      <Typography variant="h3" sx={{ paddingBlockEnd: "1rem" }}>
        DANH SÁCH YÊU THÍCH
      </Typography>
      {loveListProduct.length === 0 ? (
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
            Không có sản phẩm yêu thích
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
            Xin lỗi, chúng tôi không tìm thấy bất cứ sản phẩm yêu thích nào bây
            giờ
          </Typography>
        </Box>
      ) : (
        <Grid2
          container
          rowSpacing={1}
          columnSpacing={3}
          sx={{ width: "100%" }}
        >
          {productLoveListData.map((item) => (
            <Grid2 size={4} key={item.id}>
              <ProductCard {...item} typeBtn="secondary" />
            </Grid2>
          ))}
        </Grid2>
      )}
    </Stack>
  );
};

export default LovedList;
