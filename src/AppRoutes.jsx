import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "@/components/generalComps/NotFound";
import ROUTES from "@/constants/routes";
import Layout from "./layout/Layout";
import AddUserPage from "./pages/AddUserPage";
import UsersPage from "./pages/UsersPage";
import UserInfoPage from "./pages/UserInfoPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<UsersPage />} />
          <Route path={ROUTES.ADD_USER} element={<AddUserPage />} />
          <Route path={ROUTES.USER_INFO + ":email"} element={<UserInfoPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-left" theme="colored" />
    </Router>
  );
}
