import {
  Box,
  Button,
  Container,
  Divider,
  Grid2,
  List,
  Stack,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  accountTabSelector,
  handleChangeAccountTab,
} from "../../../redux/page.slice";
import { AccountTab } from "../../../constants";
import PersonalData from "./components/PersonalData";
import PurchasedItem from "./components/PurchasedItem";
import ChangedPass from "./components/ChangedPass";
import Address from "./components/Address";
import LovedList from "./components/LovedList";
import { PATH } from "../../router.config";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedTab = useSelector(accountTabSelector);

  const sidebarItemsConfig = [
    {
      key: AccountTab.PersonalDataTab,
      label: "Dữ liệu cá nhân",
      component: <PersonalData />,
    },
    {
      key: AccountTab.PurchasedItemTab,
      label: "Đơn mua hàng",
      component: <PurchasedItem />,
    },
    {
      key: AccountTab.ChangedPasswordTab,
      label: "Đổi mật khẩu",
      component: <ChangedPass />,
    },
    {
      key: AccountTab.AddressTab,
      label: "Địa chỉ nhận hàng",
      component: <Address />,
    },
    {
      key: AccountTab.LovedListTab,
      label: "Danh sách yêu thích",
      component: <LovedList />,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ paddingBlock: "2rem" }}>
      <Grid2 container rowSpacing={1} columnSpacing={1}>
        <Grid2
          size={4}
          sx={{ paddingInlineEnd: "1rem", borderRight: "1px solid #bbb" }}
        >
          <Stack alignItems="start" gap={2}>
            <Typography variant="h3">Tài khoản</Typography>
            <Typography variant="body1">
              Quản lý tài khoản cá nhân để bảo vệ tài khoản
            </Typography>
            <Divider sx={{ height: "1px", width: "100%" }} />
            <List>
              {sidebarItemsConfig.map((item) => (
                <Typography
                  variant={`${
                    item.key === selectedTab ? "subtitle2" : "subtitle1"
                  }`}
                  key={item.key}
                  onClick={() => dispatch(handleChangeAccountTab(item.key))}
                  sx={{
                    cursor: "pointer",
                    width: "100%",
                    paddingBlock: "0.5rem",
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </List>
            <Button
              variant="contained"
              size="medium"
              sx={{
                marginTop: 2,
                backgroundColor: "#fdcc7f",
                width: 120,
                textTransform: "initial",
              }}
              onClick={() => navigate(`/${PATH.SHOP}/${PATH.LOGIN}`)}
            >
              Đăng xuất
            </Button>
          </Stack>
        </Grid2>
        <Grid2 size={8}>
          <Box paddingInlineStart="0.5rem" sx={{ height: "100%" }}>
            {
              sidebarItemsConfig.find((item) => item.key === selectedTab)
                ?.component
            }
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Account;
