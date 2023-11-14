import { Route, Routes } from "react-router";
import NonAuthLayout from "../layouts/NonAuth";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import NotFoundPage from "../pages/404Page";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { getValueFromLocalStorage } from "../utils";
import { login } from "../redux/action/user";
import { getUser } from "../services";
import { toast } from "react-hot-toast";
import AddEditProduct from "../pages/AddEditProduct";
import ProductManagement from "../pages/ProductManagement";

const AppRouter = () => {
  const token = getValueFromLocalStorage("token");

  return (
    <Routes>
      <Route path="/auth" element={<NonAuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
      </Route>
      {token && (
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/add-product" element={<AddEditProduct />} />
        </Route>
      )}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
