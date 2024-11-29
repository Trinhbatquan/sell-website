import {
  Button,
  FormControl,
  FormHelperText,
  Grid2,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ChangedPass = () => {
  const [registerState, setRegisterState] = useState<{
    email: string;
    code: string;
    password: string;
    confirmPass: string;
  }>({
    email: "",
    code: "",
    password: "",
    confirmPass: "",
  });

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
      <Stack gap={1} alignItems="center" sx={{ width: "100%" }}>
        <Typography variant="h3" sx={{ paddingBlockEnd: "1rem" }}>
          ĐỔI MẬT KHẨU
        </Typography>
        <Grid2
          container
          rowSpacing={1}
          columnSpacing={4}
          sx={{ width: "100%" }}
        >
          <Grid2 size={9}>
            <TextField
              fullWidth
              label="Nhập email"
              variant="outlined"
              margin="normal"
              type="tel"
              value={registerState.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Grid2>
          <Grid2 size={3}></Grid2>
        </Grid2>
        <Grid2
          container
          rowSpacing={1}
          columnSpacing={4}
          sx={{ width: "100%" }}
        >
          <Grid2 size={9}>
            <FormControl
              sx={{ m: 1, width: "100%", margin: "16px 0 8px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="component-helper">Nhập mã</InputLabel>
              <OutlinedInput
                id="component-helper"
                value={registerState.code}
                onChange={(e) => handleChange("code", e.target.value)}
              />
              <FormHelperText id="component-helper-text">
                Mã sẽ được gửi về Email của bạn, nhập mã để đổi mật khẩu
              </FormHelperText>
            </FormControl>
          </Grid2>
          <Grid2 size={3}>
            <Button
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: "#fdcc7f",
                width: 140,
                textTransform: "initial",
                mt: 2,
              }}
            >
              Gửi lại
            </Button>
          </Grid2>
        </Grid2>
        <Grid2
          container
          rowSpacing={1}
          columnSpacing={4}
          sx={{ width: "100%" }}
        >
          <Grid2 size={9}>
            <FormControl
              sx={{ m: 1, width: "100%", margin: "16px 0 8px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="component-helper">
                Nhập mật khẩu mới
              </InputLabel>
              <OutlinedInput
                id="component-helper"
                value={registerState.password}
                onChange={(e) => handleChange("pasword", e.target.value)}
              />
              <FormHelperText id="component-helper-text">
                Mật khẩu gồm chữ hoa, chữ thường, số và kí tự đặc biệt
              </FormHelperText>
            </FormControl>
          </Grid2>
          <Grid2 size={3}></Grid2>
        </Grid2>
        <Grid2
          container
          rowSpacing={1}
          columnSpacing={4}
          sx={{ width: "100%" }}
        >
          <Grid2 size={9}>
            <TextField
              fullWidth
              label="Nhập lại mật khẩu"
              variant="outlined"
              margin="normal"
              type="tel"
              value={registerState.confirmPass}
              onChange={(e) => handleChange("confirmPass", e.target.value)}
            />
          </Grid2>
          <Grid2 size={3}></Grid2>
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
        >
          Lưu
        </Button>
      </Stack>
    </Stack>
  );
};

export default ChangedPass;
