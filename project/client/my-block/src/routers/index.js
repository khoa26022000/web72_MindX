import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getValueFromLocalStorage } from "../utils";
import NotFoundPage from "../pages/404Page";
import NonAuthLayout from "../layouts/NonAuth";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => {
  const user = useSelector((state) => state.user);
  const userFromLocalStorage = getValueFromLocalStorage("user");

  return (
    <Routes>
      <Route path="/auth" element={<NonAuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
      </Route>
      {(user?._id || userFromLocalStorage?._id) && (
        <Route path="/" element={<MainLayout />}></Route>
      )}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
