

import { cacheRtl, theme } from "@/theme/theme";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";
import usersSlice from "./slices/usersSlice";
import darkModeSlice from "./slices/darkModeSlice";
import ReadJsonData from "./components/generalComps/ReadJsonData";
import "./App.css";

export const myStore = configureStore({
  reducer: {
    darkModeSlice,
    usersSlice
  }
})

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Provider store={myStore}>
          <ReadJsonData />
          <AppRoutes />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
