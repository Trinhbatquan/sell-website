import { Box, Button, Divider, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Address = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleToggle = () => setOpen((prev) => !prev);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [addressList, setAddressList] = useState([
    {
      id: 1,
      name: "Nguyễn Thị Thanh Phương",
      phone: "0982674593",
      address: "Trâu Quỳ, Gia Lâm, Hà Nội",
      isDefault: false,
    },
    {
      id: 2,
      name: "Nguyễn Thị Phương Thanh",
      phone: "0979263102",
      address: "96 Định Công, Hoàng Mai, Hà Nội",
      isDefault: true,
    },
  ]);

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

  const handleDelete = () => {
    setAddressList(addressList.filter((item) => item.id !== selectedId));
    handleToggle();
  };

  return (
    <>
      <Stack
        gap={1}
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "100%", marginLeft: "6rem" }}
      >
        <Stack gap={2} alignItems="center" sx={{ width: "100%" }}>
          <Typography variant="h3" sx={{ paddingBlockEnd: "1rem" }}>
            ĐỊA CHỈ CỦA BẠN
          </Typography>
          {addressList.length === 0 ? (
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
                Không có địa chỉ
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
                Thêm địa chỉ của bạn để quá trình đặt hàng được diễn ra
              </Typography>
            </Box>
          ) : (
            <Stack gap={7} alignItems="center" sx={{ width: "100%" }}>
              {addressList.map((item) => (
                <Stack
                  gap={2}
                  alignItems="center"
                  sx={{ width: "100%", position: "relative" }}
                  key="index"
                >
                  {item.isDefault && (
                    <Button
                      sx={{
                        position: "absolute",
                        top: "-31px",
                        left: 0,
                        textTransform: "inherit",
                        backgroundColor: "#344943",
                        color: "#fff",
                      }}
                      variant="contained"
                      size="small"
                    >
                      Đặt làm mặc định
                    </Button>
                  )}
                  <Divider sx={{ height: "1px", width: "100%" }} />

                  <Stack
                    direction="row"
                    gap={1}
                    alignItems="start"
                    justifyContent="space-between"
                    sx={{ height: "100%", width: "100%" }}
                  >
                    <Stack gap={0.5} alignItems="start" sx={{ width: "100%" }}>
                      <Typography variant="subtitle1">{item.name}</Typography>
                      <Typography variant="subtitle1">{item.phone}</Typography>
                      <Typography variant="subtitle1">
                        {item.address}
                      </Typography>
                    </Stack>
                    <Stack
                      gap={1}
                      direction="row"
                      alignItems="start"
                      justifyContent="end"
                      sx={{ width: "100%" }}
                    >
                      <Button
                        variant="contained"
                        size="medium"
                        sx={{
                          backgroundColor: "#fdcc7f",
                          width: 100,
                          textTransform: "initial",
                        }}
                        onClick={() => {}}
                      >
                        Chỉnh sửa
                      </Button>
                      <Button
                        variant="contained"
                        size="medium"
                        sx={{
                          backgroundColor: "#fdcc7f",
                          width: 60,
                          textTransform: "initial",
                        }}
                        onClick={() => {
                          handleToggle();
                          setSelectedId(item.id);
                        }}
                      >
                        Xoá
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
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
            Thêm
          </Button>
        </Stack>
      </Stack>
      <Modal open={open} onClose={handleToggle}>
        <Box sx={{ ...style }}>
          <Stack gap={2} alignItems="center" sx={{ width: "100%" }}>
            <Typography id="modal-modal-title" variant="h3">
              Xoá địa chỉ
            </Typography>
            <Typography variant="subtitle1">
              Bạn có chắc chắn muốn xoá địa chỉ này không?
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
                onClick={handleDelete}
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
    </>
  );
};

export default Address;
