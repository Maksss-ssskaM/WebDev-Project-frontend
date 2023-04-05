import React from 'react';
import Home from "./pages/home";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./components/auth/login";
import RegisterPage from './components/auth/register';
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/auth";
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import LayoutComponent from "./components/layout";
import WatchlistComponent from "./pages/watchlist";
import NewsComponent from "./pages/news";
import SettingsComponent from "./pages/settings";

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <LayoutComponent>
                    <div className="App">
                        <Routes>
                            <Route element={<PrivateRoute/>}>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/watchlist" element={<WatchlistComponent/>}/>
                                <Route path="/news" element={<NewsComponent/>}/>
                                <Route path="/settings" element={<SettingsComponent/>}/>
                            </Route>

                            <Route path="login" element={<AuthRootComponent/>}/>
                            <Route path="register" element={<AuthRootComponent/>}/>
                        </Routes>
                    </div>
                </LayoutComponent>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
