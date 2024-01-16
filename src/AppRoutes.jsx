import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// project imports
import NotFound from "@/components/general_comps/NotFound";
import ROUTES from "@/constants/routeConstants";
import UsersPage from "./pages/UsersPage";
import AddUserPage from "./pages/AddUserPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route index element={<UsersPage />} />

        <Route path={ROUTES.ADD_USER} element={<AddUserPage />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-left" theme="colored" />
    </Router>
  );
}
