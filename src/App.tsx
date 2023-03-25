import React from 'react';
import Home from "./components/home";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./components/auth/login";
import RegisterPage from './components/auth/register';
import PrivateRoute from "./components/utils/router/privateRoute";
import AuthRootComponent from "./components/auth";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<PrivateRoute/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>

                <Route path="login" element={<AuthRootComponent/>}/>
                <Route path="register" element={<AuthRootComponent/>}/>
            </Routes>
        </div>
    );
}

export default App;
