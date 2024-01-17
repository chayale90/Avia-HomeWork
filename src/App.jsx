

import { cacheRtl, theme } from "@/theme/theme";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
//project imports
import AppRoutes from "./AppRoutes";
import darkModeSlice from "./slices/darkModeSlice";
import "./App.css";


export const myStore = configureStore({
  reducer: {
    darkModeSlice
  }
})

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Provider store={myStore}>
          <AppRoutes />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
