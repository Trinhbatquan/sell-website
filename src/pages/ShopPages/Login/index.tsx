import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
  FormControlLabel,
  Checkbox,
  Stack,
  Link,
} from "@mui/material";
import { useState } from "react";
import { PATH } from "../../router.config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [registerState, setRegisterState] = useState<{
    account: string;
    password: string;
    email: string;
  }>({
    account: "",
    password: "",
    email: "",
  });
  const [isForget, setForget] = useState<boolean>(false);
  const navigate = useNavigate();

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
            Đăng nhập
          </Typography>
        </Stack>
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
        <Stack
          width="100%"
          // sx={{ mt: 0.5 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="body2">Ghi nhớ đăng nhập</Typography>}
          />
          <Link
            underline="none"
            color="textPrimary"
            onClick={() => navigate(`/${PATH.SHOP}/${PATH.REGISTER}`)}
            sx={{ cursor: "pointer" }}
          >
            <Typography variant="body2">
              Nếu chưa có tài khoản, đăng ký tại đây
            </Typography>
          </Link>
        </Stack>
        <Stack display="flex" alignItems="center" sx={{ width: "100%" }}>
          <Button
            variant="contained"
            size="medium"
            sx={{
              marginTop: 2,
              backgroundColor: "#fdcc7f",
              width: 160,
              textTransform: "initial",
            }}
          >
            Đăng nhập
          </Button>
        </Stack>
        <Stack display="flex" alignItems="center" sx={{ width: "100%", mt: 2 }}>
          <Typography
            variant="body2"
            sx={{ cursor: "pointer" }}
            onClick={() => setForget((prev) => !prev)}
          >
            Quên mật khẩu
          </Typography>
        </Stack>
        {isForget && (
          <>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="password"
              value={registerState.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <Stack display="flex" alignItems="center" sx={{ width: "100%" }}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  marginTop: 1,
                  backgroundColor: "#fdcc7f",
                  width: 160,
                  textTransform: "initial",
                }}
                onClick={() => navigate(`/${PATH.SHOP}/${PATH.GET_PASSWORD}`)}
              >
                Lấy lại mật khẩu
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Login;
