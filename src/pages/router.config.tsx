import { IRouter } from "../interfaces";
import AdminLayout from "./AdminPages/AdminLayout";
import Account from "./ShopPages/Account";
import Cart from "./ShopPages/Cart";
import Checkout from "./ShopPages/Checkout";
import Contact from "./ShopPages/Contact";
import Detail from "./ShopPages/Detail";
import GetPassword from "./ShopPages/GetPassword";
import Home from "./ShopPages/Home";
import Intro from "./ShopPages/Intro";
import Login from "./ShopPages/Login";
import News from "./ShopPages/News";
import Product from "./ShopPages/Product";
import Register from "./ShopPages/Register";

export const breadcrumbNameMap: { [key: string]: string } = {
  "/shop": "Trang chủ",
  "/shop/account": "Tài khoản",
  "/shop/login": "Đăng nhập",
  "/shop/register": "Đăng ký",
  "/shop/get_password": "Lấy mật khẩu",
  "/shop/cart": "Giỏ hàng",
  "/shop/cart/payment": "Thanh toán",
  "/shop/collection": "Bộ sưu tập",
  "/shop/giuong": "Giường",
  "/shop/tu": "Tủ",
  "/shop/den": "Đèn",
  "/shop/trang_tri": "Cây trang trí",
  "/shop/ghe": "Ghế",
  "/shop/ban": "Bàn",
  "/shop/all": "Tất cả sản phẩm",
  "/shop/detail": "Sản phẩm",
  "/shop/news": "Tin tức",
  "/shop/news/detail":
    "Hướng dẫn tự decor phòng ngủ đẹp và chuẩn phong thủy 2024",
};

export const PATH = {
  // shop role
  SHOP: "shop",
  HOME: "",
  ACCOUNT: "account",
  LOGIN: "login",
  REGISTER: "register",
  GET_PASSWORD: "get_password",
  INTRO: "intro",
  NEWS: "news",
  NEWS_DETAIL: "news/detail",
  CONTACT: "contact",
  CART: "cart",
  DETAIL: "detail",
  PAYMENT: "cart/payment",
  COLLECTION: "collection",
  GIUONG: "giuong",
  TU: "tu",
  DEN: "den",
  TRANG_TRI: "trang_tri",
  GHE: "ghe",
  ALL: "all",
  BAN: "ban",

  //admin role
  ADMIN: "admin",
  ANALYTIC: "analytic",
};

export const shopRouterList: Array<IRouter> = [
  {
    name: "Home",
    path: PATH.HOME,
    element: <Home />,
  },
  {
    name: "Account",
    path: PATH.ACCOUNT,
    element: <Account />,
  },
  {
    name: "Login",
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    name: "Register",
    path: PATH.REGISTER,
    element: <Register />,
  },
  {
    name: "GetPassword",
    path: PATH.GET_PASSWORD,
    element: <GetPassword />,
  },
  {
    name: "Intro",
    path: PATH.INTRO,
    element: <Intro />,
  },
  {
    name: "News",
    path: PATH.NEWS,
    element: <News />,
  },
  {
    name: "News",
    path: PATH.NEWS_DETAIL,
    element: <News />,
  },
  {
    name: "Contact",
    path: PATH.CONTACT,
    element: <Contact />,
  },
  {
    name: "Detail",
    path: PATH.DETAIL,
    element: <Detail />,
  },
  {
    name: "Cart",
    path: PATH.CART,
    element: <Cart />,
  },
  {
    name: "Checkout",
    path: PATH.PAYMENT,
    element: <Checkout />,
  },
  {
    name: "Product",
    path: PATH.COLLECTION,
    element: <Product />,
  },
  {
    name: "Product",
    path: PATH.DEN,
    element: <Product />,
  },
  {
    name: "Product",
    path: PATH.GIUONG,
    element: <Product />,
  },
  {
    name: "Product",
    path: PATH.GHE,
    element: <Product />,
  },
  {
    name: "Product",
    path: PATH.TU,
    element: <Product />,
  },
  {
    name: "Product",
    path: PATH.TRANG_TRI,
    element: <Product />,
  },
  {
    name: "Product",
    path: PATH.ALL,
    element: <Product />,
  },
  {
    name: "Product",
    path: PATH.BAN,
    element: <Product />,
  },
];

export const adminRouterList: Array<IRouter> = [
  {
    name: "Analytic",
    path: PATH.ANALYTIC,
    element: <AdminLayout />,
  },
];
