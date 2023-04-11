import React from "react";
import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootPage from "./pages/auth";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LayoutComponent from "./components/layout";
import WatchlistPage from "./pages/watchlist";
import NewsPage from "./pages/news";
import SettingsPage from "./pages/settings";
import SingleAssetPage from "./pages/single-asset";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutComponent>
          <div className="App">
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/watchlist" element={<WatchlistPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/single/:id" element={<SingleAssetPage />} />
              </Route>

              <Route path="login" element={<AuthRootPage />} />
              <Route path="register" element={<AuthRootPage />} />
            </Routes>
          </div>
        </LayoutComponent>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
