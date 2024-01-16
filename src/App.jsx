

import { cacheRtl, theme } from "@/theme/theme";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import AppRoutes from "./AppRoutes";
import "./App.css";

function App() {

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
