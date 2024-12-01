import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const GetPassword = () => {
  const [getPasswordState, setGetPasswordState] = useState<{
    code: string;
    password: string;
    confirmPassword: string;
  }>({
    code: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (key: string, value: string) =>
    setGetPasswordState((prev) => ({
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
          width: 600,
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stack display="flex" alignItems="center" sx={{ width: "100%" }}>
          <Typography variant="h3" fontWeight="bold" align="center" mb={3}>
            ĐỔI MẬT KHẨU
          </Typography>
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
              value={getPasswordState.code}
              onChange={(e) => handleChange("code", e.target.value)}
            />
            <FormHelperText id="component-helper-text">
              Mã được gửi về Email của bạn, nhập mã để đổi mật khẩu
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
            <InputLabel htmlFor="outlined-adornment-password1">
              Mật khẩu mới
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password1"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={getPasswordState.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <FormHelperText id="outlined-adornment-password1">
              Mật khẩu gồm chữ hoa, chữ thường, số và kí tự đặc biệt
            </FormHelperText>
          </FormControl>
          <FormControl
            sx={{ m: 1, width: "100%", margin: "16px 0 8px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password2">
              Nhập lại mật khẩu
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password2"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={getPasswordState.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
            />
          </FormControl>
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
      </Box>
    </Container>
  );
};

export default GetPassword;
