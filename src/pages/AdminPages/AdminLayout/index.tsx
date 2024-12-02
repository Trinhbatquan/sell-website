import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Badge,
  Container,
  Breadcrumbs,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import admin from "../../../assets/image/admin.png";
import support from "../../../assets/image/support.png";
import { breadcrumbNameMapAdmin, PATH } from "../../router.config";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { LinkRouter } from "../../../components";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const AdminLayout = () => {
  const [openOrders, setOpenOrders] = useState(false);
  const [openMarketing, setOpenMarketing] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const { pathname } = useLocation();
  const pathNameList = pathname.split("/").filter((x) => x);

  const toggleOrders = () => setOpenOrders(!openOrders);
  const toggleMarketing = () => setOpenMarketing(!openMarketing);
  const toggleProduct = () => setOpenProduct(!openProduct);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f9f5f0",
      }}
    >
      <Box
        sx={{
          width: "240px",
          height: "100%",
          padding: "16px",
        }}
      >
        <Box
          textAlign="center"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(`/${PATH.ADMIN}`)}
        >
          <img srcSet={admin} src={admin} alt={admin} loading="lazy" />
        </Box>
        <List sx={{ marginBlockStart: "-2rem" }}>
          {/* Sản phẩm */}
          <ListItem sx={{ cursor: "pointer" }} onClick={toggleProduct}>
            <ListItemText primary="Sản phẩm" />
            {openProduct ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openProduct} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                sx={{ pl: 4, color: "#000" }}
                component={Link}
                to={`/${PATH.ADMIN}/${PATH.LIST_PRODUCT}`}
              >
                <ListItemText primary="Danh sách sản phẩm" />
              </ListItem>
              <ListItem
                sx={{ pl: 4, color: "#000" }}
                component={Link}
                to={`/${PATH.ADMIN}/${PATH.ADD_PRODUCT}`}
              >
                <ListItemText primary="Thêm sản phẩm" />
              </ListItem>
            </List>
          </Collapse>

          {/* Đơn hàng */}
          <ListItem sx={{ cursor: "pointer" }} onClick={toggleOrders}>
            <ListItemText primary="Đơn hàng" />
            {openOrders ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            sx={{ cursor: "pointer" }}
            in={openOrders}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem
                sx={{ pl: 4, color: "#000" }}
                component={Link}
                to={`/${PATH.ADMIN}/${PATH.ITEM}`}
              >
                <ListItemText primary="Đơn đặt hàng" />
              </ListItem>
              <ListItem
                sx={{ pl: 4, color: "#000" }}
                component={Link}
                to={`/${PATH.ADMIN}/${PATH.MANAGER_ITEM}`}
              >
                <ListItemText primary="Quản lý hàng trả" />
              </ListItem>
              <ListItem
                sx={{ pl: 4, color: "#000" }}
                component={Link}
                to={`/${PATH.ADMIN}/${PATH.MANAGER_FEEDBACK}`}
              >
                <ListItemText primary="Quản lý đánh giá" />
              </ListItem>
            </List>
          </Collapse>

          {/* Marketing */}
          <ListItem sx={{ cursor: "pointer" }} onClick={toggleMarketing}>
            <ListItemText primary="Marketing" />
            {openMarketing ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openMarketing} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                sx={{ pl: 4, color: "#000" }}
                component={Link}
                to={`/${PATH.ADMIN}/${PATH.MANAGER_VOUCHER}`}
              >
                <ListItemText primary="Quản lý khuyến mãi" />
              </ListItem>
            </List>
            <ListItem
              sx={{ pl: 4, color: "#000" }}
              component={Link}
              to={`/${PATH.ADMIN}/${PATH.CREATE_VOUCHER}`}
            >
              <ListItemText primary="Tạo khuyến mãi" />
            </ListItem>
          </Collapse>

          {/* Báo cáo */}
          <ListItem
            sx={{ color: "#000" }}
            component={Link}
            to={`/${PATH.ADMIN}/${PATH.REPORT}`}
          >
            <ListItemText primary="Báo cáo" />
          </ListItem>

          {/* Hỗ trợ */}
          <ListItem
            sx={{ color: "#000" }}
            component={Link}
            to={`/${PATH.ADMIN}/${PATH.SUPPORT}`}
          >
            <ListItemText primary="Hỗ trợ" />
          </ListItem>

          {/* Tài khoản */}
          <ListItem
            sx={{ color: "#000" }}
            component={Link}
            to={`/${PATH.ADMIN}/${PATH.ADMIN_ACCOUNT}`}
          >
            <ListItemText primary="Tài khoản" />
          </ListItem>
        </List>
      </Box>
      <div
        style={{
          flexGrow: 1,
          padding: "2rem",
          backgroundColor: "#f9f5f0",
          borderInline: "1px solid #ccc",
        }}
      >
        {pathNameList.length > 1 && (
          <Container maxWidth="lg">
            <Box paddingBlockEnd="1rem">
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<NavigateNextIcon fontSize="small" />}
              >
                {pathNameList.map((_, index) => {
                  const last = index === pathNameList.length - 1;
                  const to = `/${pathNameList.slice(0, index + 1).join("/")}`;

                  return last ? (
                    <Typography key={to} sx={{ color: "text.primary" }}>
                      {breadcrumbNameMapAdmin[to]}
                    </Typography>
                  ) : (
                    <LinkRouter
                      underline="hover"
                      color="inherit"
                      to={to}
                      key={to}
                    >
                      {breadcrumbNameMapAdmin[to]}
                    </LinkRouter>
                  );
                })}
              </Breadcrumbs>
            </Box>
          </Container>
        )}
        <Outlet />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          padding: "1rem",
        }}
      >
        {/* Chat Icon with Badge */}
        <IconButton aria-label="chat notifications">
          <Badge badgeContent={10} color="error">
            <ChatBubbleOutlineIcon fontSize="medium" />
          </Badge>
        </IconButton>

        {/* Notification Icon with Badge */}
        <IconButton aria-label="general notifications">
          <Badge badgeContent={10} color="error">
            <NotificationsNoneIcon fontSize="medium" />
          </Badge>
        </IconButton>

        {/* Support Icon with Badge */}
        <IconButton aria-label="support notifications">
          <img
            src={support}
            alt={support}
            style={{ width: "32px", height: "32px", objectFit: "contain" }}
          />
        </IconButton>
      </Box>
    </div>
  );
};

export default AdminLayout;
