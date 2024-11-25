import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Container, Input, Stack } from "@mui/material";
import logo from "../../../../../assets/image/logo.png";
import { StyledHeader } from "./styled";
import { NavLink, useLocation } from "react-router-dom";
import { PATH } from "../../../../router.config";
import { useState } from "react";

export default function Header() {
  const [productEl, setProductEl] = useState<null | HTMLElement>(null);
  const productMenuId = "primary-search-account-menu";
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProductEl(event.currentTarget);
  };
  const handleMenuClose = () => setProductEl(null);
  const renderProductMenu = (
    <Menu
      anchorEl={productEl}
      id={productMenuId}
      keepMounted
      open={!!productEl}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Giường</MenuItem>
      <MenuItem onClick={handleMenuClose}>Tủ</MenuItem>
      <MenuItem onClick={handleMenuClose}>Ghế</MenuItem>
      <MenuItem onClick={handleMenuClose}>Đèn</MenuItem>
      <MenuItem onClick={handleMenuClose}>Cây trang trí</MenuItem>
    </Menu>
  );

  const location = useLocation();
  const getLinkClass = (path: string) => {
    const pathNameConfig = (location.pathname || "").split("/");
    return pathNameConfig[pathNameConfig.length - 1] === path
      ? "link active"
      : "link";
  };

  return (
    <StyledHeader>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#344943" }}
          style={{ paddingBlock: "0.75rem" }}
        >
          <Container maxWidth="lg">
            <Toolbar style={{ gap: "2rem" }}>
              <NavLink to={PATH.HOME}>
                <img src={logo} alt="logo" loading="lazy" className="logo" />
              </NavLink>
              <NavLink to={PATH.HOME} end className={getLinkClass(PATH.HOME)}>
                Trang chủ
              </NavLink>
              <NavLink to={PATH.INTRO} end className={getLinkClass(PATH.INTRO)}>
                Giới thiệu
              </NavLink>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.15rem",
                  cursor: "pointer",
                }}
                aria-controls={productMenuId}
                onClick={handleProfileMenuOpen}
              >
                <Typography
                  noWrap
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "lighter",
                  }}
                >
                  Sản phẩm
                </Typography>
                {!!productEl ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </Box>
              <NavLink to={PATH.NEWS} end className={getLinkClass(PATH.NEWS)}>
                Tin tức
              </NavLink>
              <NavLink
                to={PATH.CONTACT}
                end
                className={getLinkClass(PATH.CONTACT)}
              >
                Liên hệ
              </NavLink>
              <Box sx={{ flexGrow: 1 }} />
              <Stack direction="row" alignItems="center" gap="0.05rem">
                <div className="search">
                  <SearchIcon />
                  <Input
                    className="input-container"
                    sx={{ border: "none", outline: "none" }}
                  />
                </div>
                <IconButton size="large" color="inherit">
                  <Badge badgeContent={4} color="error">
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton size="large" color="inherit">
                  <Badge badgeContent={17} color="error">
                    <NotificationsOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton size="large" color="inherit">
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
        {renderProductMenu}
      </Box>
    </StyledHeader>
  );
}
