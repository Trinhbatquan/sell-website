import {
  Button,
  FormControl,
  FormHelperText,
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
      <Stack gap={1} alignItems="center" sx={{ width: "70%" }}>
        <Typography variant="h3" sx={{ paddingBlockEnd: "1rem" }}>
          ĐỔI MẬT KHẨU
        </Typography>
        <TextField
          fullWidth
          label="Nhập email"
          variant="outlined"
          margin="normal"
          type="tel"
          value={registerState.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <FormControl
          sx={{
            m: 1,
            width: "100%",
            margin: "16px 0 8px",
            position: "relative",
          }}
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
          <Button
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: "#fdcc7f",
              width: 100,
              textTransform: "initial",
              mt: 2,
              position: "absolute",
              right: "-112px",
              top: "-10px",
            }}
          >
            Gửi lại
          </Button>
        </FormControl>
        <FormControl
          sx={{ m: 1, width: "100%", margin: "16px 0 8px" }}
          variant="outlined"
        >
          <InputLabel htmlFor="component-helper">Nhập mật khẩu mới</InputLabel>
          <OutlinedInput
            id="component-helper"
            value={registerState.password}
            onChange={(e) => handleChange("pasword", e.target.value)}
          />
          <FormHelperText id="component-helper-text">
            Mật khẩu gồm chữ hoa, chữ thường, số và kí tự đặc biệt
          </FormHelperText>
        </FormControl>
        <TextField
          fullWidth
          label="Nhập lại mật khẩu"
          variant="outlined"
          margin="normal"
          type="tel"
          value={registerState.confirmPass}
          onChange={(e) => handleChange("confirmPass", e.target.value)}
        />
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
