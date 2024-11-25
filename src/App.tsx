import "./App.css";
// import HomePage from "./pages/HomePage";
// import ScrollToTop from "./ScrollToTop.tsx";
// import LoginPage from "./pages/Login/index.tsx";
// import RegisterPage from "./pages/Register/index.tsx";
// import ForgotPassPage from "./pages/ForgotPass/index.tsx";
// import NewPassword from "./pages/ForgotPass/component/index.tsx";
// import IntroducePage from "./pages/IntroducePage/index.tsx";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  adminRouterList,
  PATH,
  shopRouterList,
} from "./pages/router.config.tsx";
import ShopLayout from "./pages/ShopPages/ShopLayout/index.tsx";
import AdminLayout from "./pages/AdminPages/AdminLayout/index.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={PATH.SHOP} />} />

      {/* shop route */}
      <Route path={PATH.SHOP} element={<ShopLayout />}>
        {shopRouterList.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>

      {/* admin route */}
      <Route path={PATH.ADMIN} element={<AdminLayout />}>
        {adminRouterList.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>

      <Route path="*" element={<Navigate replace to={PATH.SHOP} />} />
    </Routes>
  );
};

export default App;
