import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Modal,
  Paper,
  Rating,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useDispatch, useSelector } from "react-redux";
import { OrderStatus, productList } from "../../../../../constants";
import ClearIcon from "@mui/icons-material/Clear";
import icon1 from "../../../../../assets/image/icon1.png";
import icon2 from "../../../../../assets/image/icon2.png";
import {
  handleChangeOrderStatus,
  orderStatusSelector,
} from "../../../../../redux/page.slice";
import { ChangeEvent, useState } from "react";

const PurchasedItem = () => {
  const selectedPro = productList[10];
  const orderStatus = useSelector(orderStatusSelector);
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const handleToggle = () => setOpen((prev) => !prev);
  const style = {
    with: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [isFeedback, setFeedback] = useState<boolean>(false);
  const statusConfig = [
    {
      key: OrderStatus.ConfirmWaiting,
      label: "Chờ xác nhận",
    },
    {
      key: OrderStatus.GetItemWaiting,
      label: "Chờ lấy hàng",
    },
    {
      key: OrderStatus.Delivered,
      label: "Vận chuyển",
    },
    {
      key: OrderStatus.Shipping,
      label: "Đã giao",
    },
    {
      key: OrderStatus.Feedback,
      label: "Đánh giá",
    },
  ];
  const tabValue = statusConfig.findIndex((item) => item.key === orderStatus);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("event", event);
    dispatch(
      handleChangeOrderStatus(
        statusConfig.find((_, index) => index === newValue)?.key ||
          OrderStatus.ConfirmWaiting
      )
    );
  };

  const [rating, setRating] = useState<number | null>(0);
  const [reviewText, setReviewText] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);

  // Handle image upload
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;
    if (!files) return;
    const imageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  // Handle video upload
  const handleVideoUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;
    if (!files) return;
    const videoUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setVideos((prevVideos) => [...prevVideos, ...videoUrls]);
  };

  // Remove uploaded image
  const handleRemoveImage = (index: number): void => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Remove uploaded video
  const handleRemoveVideo = (index: number): void => {
    setVideos((prevVideos) => prevVideos.filter((_, i) => i !== index));
  };

  return (
    <Stack
      gap={1}
      alignItems="center"
      justifyContent="space-between"
      sx={{ height: "100%", marginLeft: "1rem" }}
    >
      <Box sx={{ width: "100%", bgcolor: "#FFF8F0" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="order tabs"
          >
            {statusConfig.map((item) => (
              <Tab label={item.label} key={item.key} />
            ))}
          </Tabs>
        </Box>

        {/* Tab Content */}
        {!isFeedback && (
          <Box sx={{ p: 2 }}>
            <TableContainer component={Paper} sx={{ bgcolor: "#FFF8F0" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "#2D4235" }}>
                    <TableCell sx={{ color: "#FFF" }}>Sản phẩm</TableCell>
                    <TableCell sx={{ color: "#FFF" }}>Số lượng</TableCell>
                    <TableCell sx={{ color: "#FFF" }}>Thành tiền</TableCell>
                    <TableCell sx={{ color: "#FFF" }}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Card
                            sx={{
                              width: 64,
                              height: 64,
                              boxShadow: "none",
                              borderRadius: 0,
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={selectedPro.imgLink}
                              alt="Ghế Sofa Armchair Royal"
                            />
                          </Card>
                        </Grid>
                        <Grid item>
                          <CardContent sx={{ p: 0 }}>
                            <Typography variant="body1">
                              {selectedPro.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {selectedPro.color}
                            </Typography>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell>
                      <Typography>1</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{selectedPro.price}</Typography>
                    </TableCell>
                    <TableCell>
                      {orderStatus === OrderStatus.Feedback ? (
                        <Typography
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          5/5
                          <StarRoundedIcon sx={{ color: "#fdcc7f" }} />
                        </Typography>
                      ) : (
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#fdcc7f",
                            color: "#fff",
                            textTransform: "initial",
                          }}
                          onClick={() => {
                            orderStatus === OrderStatus.Shipping
                              ? setFeedback(true)
                              : handleToggle();
                          }}
                        >
                          {orderStatus === OrderStatus.Shipping
                            ? "Đánh giá"
                            : "Huỷ đơn"}
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {/* Rating */}
        {isFeedback && (
          <>
            <Stack gap={2} alignItems="center" sx={{ width: "100%" }}>
              <Typography variant="h3" sx={{ paddingBlockEnd: "1rem", mt: 4 }}>
                ĐÁNH GIÁ SẢN PHẨM
              </Typography>
            </Stack>
            {/* Product Info */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <img
                src={selectedPro.imgLink} // Replace with the actual image URL
                alt="Product"
                style={{
                  width: 100,
                  height: 150,
                  borderRadius: 4,
                  marginRight: 16,
                }}
              />
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  {selectedPro.title}
                </Typography>
                <Typography sx={{ color: "gray", fontSize: 14 }}>
                  {selectedPro.color}
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ mb: 1 }}>Đánh giá chất lượng sản phẩm</Typography>
            <Rating
              value={rating}
              onChange={(_, newValue) => setRating(newValue)}
              size="large"
              sx={{ mb: 3 }}
            />

            {/* Review Input */}
            <TextField
              placeholder="Hãy chia sẻ trải nghiệm mua sắm của bạn với những người mua hàng khác nhé"
              fullWidth
              multiline
              rows={3}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              sx={{ mb: 3 }}
            />

            {/* Buttons for Upload */}
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              {/* Image Upload */}
              <Button
                component="label"
                variant="outlined"
                fullWidth
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  textTransform: "none",
                }}
              >
                <img
                  src={icon1} // Replace with image upload icon URL
                  alt="Add Image"
                  style={{ width: 24, height: 24, objectFit: "contain" }}
                />
                Thêm hình ảnh
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={handleImageUpload}
                />
              </Button>

              {/* Video Upload */}
              <Button
                component="label"
                variant="outlined"
                fullWidth
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  textTransform: "none",
                }}
              >
                <img
                  src={icon2} // Replace with video upload icon URL
                  alt="Add Video"
                  style={{ width: 24, height: 24, objectFit: "contain" }}
                />
                Thêm video
                <input
                  hidden
                  accept="video/*"
                  multiple
                  type="file"
                  onChange={handleVideoUpload}
                />
              </Button>
            </Box>

            {/* Uploaded Images */}
            {images.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ mb: 1 }}>Hình ảnh đã tải lên:</Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {images.map((image, index) => (
                    <Card
                      key={index}
                      sx={{
                        width: 100,
                        height: 100,
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CardMedia
                        component="img"
                        src={image}
                        alt={`Uploaded ${index}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <IconButton
                        onClick={() => handleRemoveImage(index)}
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          bgcolor: "rgba(255, 255, 255, 0.7)",
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
                    </Card>
                  ))}
                </Box>
              </Box>
            )}

            {/* Uploaded Videos */}
            {videos.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ mb: 1 }}>Video đã tải lên:</Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {videos.map((video, index) => (
                    <Card
                      key={index}
                      sx={{
                        width: 150,
                        height: 100,
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CardMedia
                        component="video"
                        src={video}
                        controls
                        sx={{ width: "100%", height: "100%" }}
                      />
                      <IconButton
                        onClick={() => handleRemoveVideo(index)}
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          bgcolor: "rgba(255, 255, 255, 0.7)",
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
                    </Card>
                  ))}
                </Box>
              </Box>
            )}
            <Stack gap={2} alignItems="center" sx={{ width: "100%" }}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  marginTop: 3,
                  backgroundColor: "#fdcc7f",
                  width: 160,
                  textTransform: "initial",
                }}
                onClick={() => {
                  setFeedback(false);
                  dispatch(handleChangeOrderStatus(OrderStatus.Feedback));
                }}
              >
                Lưu
              </Button>
            </Stack>
          </>
        )}
      </Box>
      {!isFeedback && (
        <Stack display="flex" alignItems="center" sx={{ width: "100%" }}>
          <Button
            variant="contained"
            size="medium"
            sx={{
              marginTop: 3,
              backgroundColor: "#fdcc7f",
              width: 160,
              textTransform: "initial",
            }}
            onClick={() => {}}
          >
            Xem thêm
          </Button>
        </Stack>
      )}
      <Modal open={open} onClose={handleToggle}>
        <Box sx={{ ...style }}>
          <Stack gap={2} alignItems="center" sx={{ width: "100%" }}>
            <Typography id="modal-modal-title" variant="h3">
              Huỷ đơn hàng
            </Typography>
            <Typography variant="subtitle1">
              Bạn có chắc chắn muốn huỷ đơn hàng này không?
            </Typography>
            <Stack
              gap={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ width: "100%" }}
            >
              <Button
                variant="contained"
                size="medium"
                sx={{
                  backgroundColor: "#fdcc7f",
                  width: 60,
                  textTransform: "initial",
                }}
                onClick={() => {}}
              >
                Có
              </Button>
              <Button
                variant="outlined"
                size="medium"
                color="inherit"
                sx={{
                  width: 60,
                  textTransform: "initial",
                }}
                onClick={handleToggle}
              >
                Không
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};

export default PurchasedItem;
