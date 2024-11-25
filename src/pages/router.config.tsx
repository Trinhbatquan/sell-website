import { IRouter } from "../interfaces";
import AdminLayout from "./AdminPages/AdminLayout";
import Account from "./ShopPages/Account";
import Contact from "./ShopPages/Contact";
import Home from "./ShopPages/Home";
import Intro from "./ShopPages/Intro";
import Login from "./ShopPages/Login";
import News from "./ShopPages/News";

export const PATH = {
  // shop role
  SHOP: "shop",
  HOME: "",
  ACCOUNT: "account",
  LOGIN: "login",
  INTRO: "intro",
  COLLECTION: "collection",
  PRODUCT: "product",
  NEWS: "news",
  CONTACT: "contact",
  CART: "cart",
  DETAIL: "detail",
  PAYMENT: "cart/payment",

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
    name: "Contact",
    path: PATH.CONTACT,
    element: <Contact />,
  },
];

export const adminRouterList: Array<IRouter> = [
  {
    name: "Analytic",
    path: PATH.ANALYTIC,
    element: <AdminLayout />,
  },
];
