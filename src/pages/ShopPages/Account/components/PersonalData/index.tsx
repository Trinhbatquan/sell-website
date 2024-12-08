import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const PersonalData = () => {
  const [registerState, setRegisterState] = useState<{
    name: string;
    phone: string;
    email: string;
  }>({
    name: "Nguyễn Thị Phương Thanh",
    phone: "0979263102",
    email: "phgthanh01@gmail.com",
  });
  const [isUpdate, setUpdate] = useState<boolean>(false);

  const handleChange = (key: string, value: string) =>
    setRegisterState((prev) => ({
      ...prev,
      [key]: value,
    }));

  return (
    <Stack
      gap={1}
      alignItems="center"
      justifyContent="space-between"
      sx={{ height: "100%" }}
    >
      <Stack alignItems="center" sx={{ width: "100%" }}>
        <Typography variant="h3" sx={{ paddingBlockEnd: "1rem" }}>
          HỒ SƠ CỦA TÔI
        </Typography>
        <Grid2
          container
          rowSpacing={1}
          columnSpacing={1}
          sx={{ width: "100%" }}
        >
          <Grid2
            size={4}
            display="flex"
            alignItems="center"
            justifyContent="end"
          >
            <Typography textAlign="right" variant="subtitle2">
              Tên đăng nhập:
            </Typography>
          </Grid2>
          <Grid2 size={8}>
            {isUpdate ? (
              <TextField
                fullWidth
                label=""
                hiddenLabel
                variant="outlined"
                margin="normal"
                type="text"
                placeholder="Hãy nhập tên đăng nhập của bạn"
                value={registerState.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            ) : (
              <Typography
                textAlign="left"
                variant="subtitle1"
                sx={{ paddingBlock: "0.5rem" }}
              >
                {registerState.name}
              </Typography>
            )}
          </Grid2>
        </Grid2>
        <Grid2
          container
          rowSpacing={1}
          columnSpacing={1}
          sx={{ width: "100%" }}
        >
          <Grid2
            size={4}
            display="flex"
            alignItems="center"
            justifyContent="end"
          >
            <Typography textAlign="right" variant="subtitle2">
              Email:
            </Typography>
          </Grid2>
          <Grid2 size={8}>
            {isUpdate ? (
              <TextField
                fullWidth
                label=""
                hiddenLabel
                variant="outlined"
                margin="normal"
                type="email"
                placeholder="Hãy nhập email của bạn"
                value={registerState.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            ) : (
              <Typography
                textAlign="left"
                variant="subtitle1"
                sx={{ paddingBlock: "0.5rem" }}
              >
                {registerState.email}
              </Typography>
            )}
          </Grid2>
        </Grid2>
        <Grid2
          container
          rowSpacing={1}
          columnSpacing={1}
          sx={{ width: "100%" }}
        >
          <Grid2
            size={4}
            display="flex"
            alignItems="center"
            justifyContent="end"
          >
            <Typography
              textAlign="right"
              variant="subtitle2"
              display="flex"
              alignItems="center"
              justifyContent="end"
            >
              Số điện thoại:
            </Typography>
          </Grid2>
          <Grid2 size={8}>
            {isUpdate ? (
              <TextField
                fullWidth
                label=""
                hiddenLabel
                variant="outlined"
                margin="normal"
                type="number"
                placeholder="Hãy nhập số điện thoại của bạn"
                value={registerState.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            ) : (
              <Typography
                textAlign="left"
                variant="subtitle1"
                sx={{ paddingBlock: "0.5rem" }}
              >
                {registerState.phone}
              </Typography>
            )}
          </Grid2>
        </Grid2>
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
          onClick={() => setUpdate(!isUpdate)}
        >
          {isUpdate ? "Lưu" : "Chỉnh sửa"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default PersonalData;
