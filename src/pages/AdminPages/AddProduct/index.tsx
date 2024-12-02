import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import "react-quill/dist/quill.snow.css"; // Quill styles
import ReactQuill from "react-quill";

interface RowData {
  color: string;
  size: string;
  price: string;
  stock: string;
  sku: string;
  isOpen: boolean;
}

const AddProduct = () => {
  const [colors, setColors] = useState<string[]>([""]);
  const [rows, setRows] = useState<RowData[]>([
    { color: "", size: "", price: "", stock: "", sku: "", isOpen: false },
  ]);
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  // Handle adding a new color input
  const handleAddColor = () => {
    setColors([...colors, ""]);
  };

  // Handle removing a color input
  const handleRemoveColor = (index: number) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  // Handle adding a new row in the table
  const handleAddRow = () => {
    setRows([
      ...rows,
      { color: "", size: "", price: "", stock: "", sku: "", isOpen: false },
    ]);
  };

  // Handle removing a row in the table
  const handleRemoveRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };
  const [dimensions, setDimensions] = useState({
    length: "",
    width: "",
    height: "",
  });
  const [weight, setWeight] = useState("");

  const handleDimensionChange = (key: string, value: string) => {
    setDimensions({ ...dimensions, [key]: value });
  };

  return (
    <Box>
      <Box
        sx={{
          padding: 3,
          maxWidth: 800,
          margin: "0 auto",
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        {/* Title */}
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          Thông tin cơ bản
        </Typography>

        {/* Product Name Input */}
        <Box mb={2}>
          <TextField
            fullWidth
            label="Tên sản phẩm *"
            variant="outlined"
            inputProps={{ maxLength: 255 }}
            helperText="0/255"
          />
        </Box>

        {/* Category Dropdown */}
        <Box mb={2}>
          <FormControl fullWidth>
            <InputLabel id="category-label">Danh mục ngành hàng *</InputLabel>
            <Select labelId="category-label" label="Danh mục ngành hàng *">
              <MenuItem value={"category1"}>Danh mục 1</MenuItem>
              <MenuItem value={"category2"}>Danh mục 2</MenuItem>
              <MenuItem value={"category3"}>Danh mục 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Product Images */}
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Ảnh sản phẩm
        </Typography>
        <Grid container spacing={2} mb={2}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid item xs={3} key={index}>
              <Card
                variant="outlined"
                sx={{
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px dashed #ccc",
                }}
              >
                <Tooltip title="Upload Image">
                  <IconButton>
                    <ImageIcon sx={{ fontSize: 40, color: "#ccc" }} />
                  </IconButton>
                </Tooltip>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Product Video */}
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Video sản phẩm
        </Typography>
        <Card
          variant="outlined"
          sx={{
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px dashed #ccc",
          }}
        >
          <Tooltip title="Upload Video">
            <IconButton>
              <VideoFileIcon sx={{ fontSize: 40, color: "#ccc" }} />
            </IconButton>
          </Tooltip>
        </Card>

        {/* Video Information */}
        <Typography
          variant="body2"
          color="text.secondary"
          mt={1}
          sx={{ fontStyle: "italic" }}
        >
          Kích thước: 480x480px; độ dài 60s; max kích thước tập tin: 100MB
          <br />
          Định dạng được hỗ trợ: MP4
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 3,
          padding: 3,
          maxWidth: 800,
          marginInline: "auto",
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        {/* Title */}
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          Đặc tính sản phẩm
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Cung cấp đầy đủ đặc tính sản phẩm để tối ưu kết quả tìm kiếm sản phẩm
        </Typography>

        {/* Input Fields */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Danh mục sản phẩm" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Bộ sưu tập" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Chất liệu" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phân loại sản phẩm"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          mt: 3,
          padding: 3,
          maxWidth: 800,
          marginInline: "auto",
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        {/* Section: Màu sắc */}
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          Giá bán, kho hàng, biến thể
        </Typography>
        <Typography sx={{ mt: 2 }}>Màu sắc *</Typography>
        {colors.map((color, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            sx={{ mt: 1, gap: 1 }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Nhập màu sắc"
              value={color}
              onChange={(e) =>
                setColors(
                  colors.map((c, i) => (i === index ? e.target.value : c))
                )
              }
            />
            <Button
              variant="contained"
              component="label"
              startIcon={<PhotoCameraIcon />}
            >
              Upload
              <input hidden accept="image/*" type="file" />
            </Button>
            <IconButton onClick={() => handleRemoveColor(index)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
        <Button onClick={handleAddColor} startIcon={<AddIcon />} sx={{ mt: 1 }}>
          Thêm
        </Button>

        {/* Section: Giá bán và kho hàng */}
        <Typography variant="h6" sx={{ mt: 4 }}>
          Giá bán và kho hàng *
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Màu sắc</TableCell>
              <TableCell>Kích thước</TableCell>
              <TableCell>Giá bán</TableCell>
              <TableCell>Kho hàng</TableCell>
              <TableCell>Mã hàng</TableCell>
              <TableCell>Mở bán</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    value={row.color}
                    onChange={(e) =>
                      setRows(
                        rows.map((r, i) =>
                          i === index ? { ...r, color: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Màu sắc"
                    variant="outlined"
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.size}
                    onChange={(e) =>
                      setRows(
                        rows.map((r, i) =>
                          i === index ? { ...r, size: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Kích thước"
                    variant="outlined"
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.price}
                    onChange={(e) =>
                      setRows(
                        rows.map((r, i) =>
                          i === index ? { ...r, price: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Giá bán"
                    variant="outlined"
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.stock}
                    onChange={(e) =>
                      setRows(
                        rows.map((r, i) =>
                          i === index ? { ...r, stock: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Kho hàng"
                    variant="outlined"
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.sku}
                    onChange={(e) =>
                      setRows(
                        rows.map((r, i) =>
                          i === index ? { ...r, sku: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Mã hàng"
                    variant="outlined"
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <Button variant="outlined">
                    {row.isOpen ? "Có" : "Không"}
                  </Button>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleRemoveRow(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button onClick={handleAddRow} startIcon={<AddIcon />} sx={{ mt: 2 }}>
          Thêm
        </Button>
      </Box>
      <Box
        sx={{
          mt: 3,
          padding: 3,
          maxWidth: 800,
          marginInline: "auto",
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: 2,
          height: "fit-content",
          minHeight: "200px",
        }}
      >
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          Mô tả sản phẩm
        </Typography>
        <ReactQuill
          value={description}
          onChange={handleDescriptionChange}
          theme="snow"
          placeholder="Nhập mô tả sản phẩm..."
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline", "strike"], // Text styles
              [{ list: "ordered" }, { list: "bullet" }], // Lists
              ["link", "image"], // Link and image
              ["clean"], // Remove formatting
            ],
          }}
          style={{ height: "100px" }}
        />
      </Box>
      <Box
        sx={{
          mt: 3,
          padding: 3,
          maxWidth: 800,
          marginInline: "auto",
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          Vận chuyển
        </Typography>
        {/* Dimensions Input */}
        <Typography variant="body1" sx={{ mb: 1 }}>
          Kích thước (Chiều dài x Chiều rộng x Chiều cao)
        </Typography>
        <Box display="flex" gap={2} sx={{ mb: 3 }}>
          <TextField
            placeholder="Chiều dài"
            variant="outlined"
            value={dimensions.length}
            onChange={(e) => handleDimensionChange("length", e.target.value)}
            fullWidth
          />
          <TextField
            placeholder="Chiều rộng"
            variant="outlined"
            value={dimensions.width}
            onChange={(e) => handleDimensionChange("width", e.target.value)}
            fullWidth
          />
          <TextField
            placeholder="Chiều cao"
            variant="outlined"
            value={dimensions.height}
            onChange={(e) => handleDimensionChange("height", e.target.value)}
            fullWidth
          />
        </Box>
        {/* Weight Input */}
        <Typography variant="body1" sx={{ mb: 1 }}>
          Khối lượng
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <TextField
            placeholder="Nhập khối lượng"
            variant="outlined"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Box>
      </Box>
      <Stack
        sx={{ my: 3, maxWidth: 800, marginInline: "auto" }}
        direction="row"
        gap={2}
        justifyContent="end"
        alignItems="center"
      >
        <Button
          variant="outlined"
          size="medium"
          sx={{
            width: 100,
            textTransform: "initial",
          }}
        >
          Bản nháp
        </Button>
        <Button
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: "#fdcc7f",
            width: 60,
            textTransform: "initial",
          }}
        >
          Gửi
        </Button>
      </Stack>
    </Box>
  );
};

export default AddProduct;
