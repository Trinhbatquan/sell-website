import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Register = () => {
  const [registerState, setRegisterState] = useState<{
    name: string;
    emailOrPhone: string;
    account: string;
    password: string;
    confirmPassword: string;
  }>({
    name: "",
    emailOrPhone: "",
    account: "",
    confirmPassword: "",
    password: "",
  });

  const handleChange = (key: string, value: string) =>
    setRegisterState((prev) => ({
      ...prev,
      [key]: value,
    }));

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBlock: "2rem",
      }}
    >
      <Box
        sx={{
          width: 500,
          padding: 4,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stack display="flex" alignItems="center" sx={{ width: "100%" }}>
          <Typography variant="h3" fontWeight="bold" align="center" mb={3}>
            Đăng ký
          </Typography>
        </Stack>
        <TextField
          fullWidth
          label="Họ và tên"
          variant="outlined"
          margin="normal"
          type="email"
          value={registerState.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <TextField
          fullWidth
          label="Email hoặc số điện thoại"
          variant="outlined"
          margin="normal"
          type="email"
          value={registerState.emailOrPhone}
          onChange={(e) => handleChange("emailOrPhone", e.target.value)}
        />
        <TextField
          fullWidth
          label="Tài khoản"
          variant="outlined"
          margin="normal"
          type="tel"
          value={registerState.account}
          onChange={(e) => handleChange("account", e.target.value)}
        />
        <TextField
          fullWidth
          label="Mật khẩu"
          variant="outlined"
          margin="normal"
          type="password"
          value={registerState.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <TextField
          fullWidth
          label="Nhập lại mật khẩu"
          variant="outlined"
          margin="normal"
          type="password"
          value={registerState.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography variant="body2">
              Đồng ý với chính sách và điều khoản
            </Typography>
          }
          sx={{ mt: 0.5 }}
        />
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
            Đăng ký
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Register;
