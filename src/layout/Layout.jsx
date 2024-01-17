import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useMemo } from "react";
import { theme } from "@/theme/theme";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

export default function Layout() {
  const { darkMode } = useSelector(myStore => myStore.darkModeSlice);

  const modeColorText = useMemo(() => {
    if (darkMode) return theme.palette.lightMode.main;
    return theme.palette.darkMode.main;
  }, [darkMode]);

  const modeBackground = useMemo(() => {
    if (darkMode) return theme.palette.darkMode.main;
    return theme.palette.lightMode.main;
  }, [darkMode]);

  return (

        <Box
          style={{
            background: modeBackground,
            color: modeColorText,
            display: "flex",
            // Use flex-direction to make the children stack vertically
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </Box>

  );
}
