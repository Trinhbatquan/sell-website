import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Input,
  Stack,
} from "@mui/material";
import logo from "../../../../../assets/image/logo.png";
import { StyledHeader } from "./styled";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../../../../router.config";
import { useRef, useState } from "react";
import { productList, ProductType } from "../../../../../constants";
import { useSelector } from "react-redux";
import { cardProductSelector } from "../../../../../redux/page.slice";
import useOnClickOutside from "../../../../../hooks/useOnClickOutside";
import CustomPopover from "../../../../../components/CustomPopover";

export default function Header() {
  const cart = useSelector(cardProductSelector);
  const navigate = useNavigate();
  const handleClickMenuItem = (productType: ProductType) => {
    navigate(`/${PATH.SHOP}/${productType}`, { state: { to: productType } });
  };
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleCart = () => {
    navigate(`/${PATH.SHOP}/${PATH.CART}`);
  };

  const location = useLocation();
  const getLinkClass = (path: string) => {
    const pathNameConfig = (location.pathname || "").split("/");
    return pathNameConfig[pathNameConfig.length - 1] === path
      ? "link active"
      : "link";
  };

  function normalizeVietnamese(input: string): string {
    // Normalize the string and remove diacritics (accents)
    return input
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  const searchList = productList.filter((item) => {
    const name = normalizeVietnamese(item.title.toLowerCase());
    return name.includes(normalizeVietnamese(search.toLowerCase().trim()));
  });

  useOnClickOutside(searchRef, () => setShowSearch(false));

  return (
    <StyledHeader>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#344943" }}
          style={{ paddingBlock: "0.25rem" }}
        >
          <Container maxWidth="lg">
            <Toolbar style={{ gap: "1.5rem" }}>
              <NavLink to={PATH.HOME}>
                <img src={logo} alt="logo" loading="lazy" className="logo" />
              </NavLink>
              <NavLink to={PATH.HOME} end className={getLinkClass(PATH.HOME)}>
                Trang chủ
              </NavLink>
              <NavLink to={PATH.INTRO} end className={getLinkClass(PATH.INTRO)}>
                Giới thiệu
              </NavLink>
              <CustomPopover
                onClick={() => {
                  navigate(`/${PATH.SHOP}/all`, {
                    state: { to: ProductType.ALL },
                  });
                }}
                content={
                  <>
                    <MenuItem
                      onClick={() => handleClickMenuItem(ProductType.GIUONG)}
                    >
                      Giường
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleClickMenuItem(ProductType.TU)}
                    >
                      Tủ
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleClickMenuItem(ProductType.GHE)}
                    >
                      Ghế
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleClickMenuItem(ProductType.DEN)}
                    >
                      Đèn
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleClickMenuItem(ProductType.TRANG_TRI)}
                    >
                      Cây trang trí
                    </MenuItem>
                  </>
                }
                productMenuId="testing"
              />
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
                <div className="search" style={{ position: "relative" }}>
                  <SearchIcon />
                  <Input
                    className="input-container"
                    sx={{ border: "none", outline: "none", color: "#fff" }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => setShowSearch(true)}
                  />
                  <Box
                    ref={searchRef}
                    sx={{
                      width: 320,
                      margin: "auto",
                      padding: 2,
                      backgroundColor: "#f2eaea",
                      borderRadius: 2,
                      boxShadow: 2,
                      position: "absolute",
                      top: 40,
                      left: 0,
                      height: 300,
                      overflowY: "auto",
                      scrollbarWidth: "thin",
                      display: search.length && showSearch ? "block" : "none",
                    }}
                  >
                    {/* Title */}
                    <Typography
                      variant="caption"
                      gutterBottom
                      sx={{ color: "#000" }}
                    >
                      Kết quả tìm kiếm cho:{" "}
                      <span style={{ color: "#D2691E" }}>{`"${search}"`}</span>
                    </Typography>

                    {/* Product Cards */}
                    {searchList.map((product, index) => (
                      <Card
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          paddingInline: 1.5,
                          paddingBlock: 0.25,
                          mt: 1,
                          mb: 2,
                          boxShadow: 1,
                          borderRadius: 2,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          navigate(`/${PATH.SHOP}/${PATH.DETAIL}`, {
                            state: { to: product.id },
                          });
                          setShowSearch(false);
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{ width: 40, height: 40, borderRadius: 1 }}
                          image={product.imgLink}
                          alt={product.title}
                        />
                        <CardContent
                          sx={{
                            paddingLeft: 2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography variant="caption">
                            {product.title}
                          </Typography>
                          <Typography variant="caption" color="error">
                            {product.price}
                          </Typography>
                        </CardContent>
                      </Card>
                    ))}
                  </Box>
                </div>
                <IconButton size="large" color="inherit" onClick={handleCart}>
                  <Badge
                    badgeContent={cart.length > 0 ? cart.length : undefined}
                    color="error"
                  >
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton size="large" color="inherit">
                  <Badge badgeContent={17} color="error">
                    <NotificationsOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={() => navigate(`/${PATH.SHOP}/${PATH.ACCOUNT}`)}
                >
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </StyledHeader>
  );
}
