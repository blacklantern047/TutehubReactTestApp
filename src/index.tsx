import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContext, AuthProvider, TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter, Route, Routes, useRoutes} from "react-router-dom";
import CommunityPage from "./components/CommunityPage";
import UserInfo from "./components/UserInfo";
import CoursePage from "./components/CoursePage";
import {Paths, Urls} from "./config";
import Navbar from "./components/Navbar"
const authConfig: TAuthConfig = {
  clientId: 'e5tzviowoxgwbbzk7pau',
  authorizationEndpoint: Urls.authorizationEndpoint,
  tokenEndpoint: Urls.tokenEndpoint,
  redirectUri: Urls.redirectUri,
  onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => window.confirm('Session expired. Refresh page to continue using the site?') && event.login(),
    autoLogin: false,
    refreshTokenExpiresIn: 1708862080,
    preLogin: () => localStorage.setItem('preLoginPath', window.location.pathname),
  postLogin: () => window.location.replace(localStorage.getItem('preLoginPath') || ''),
    decodeToken: true

}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path={Paths.homePath}  element={<App/>}></Route>
                <Route path={Paths.coursePath} element={<CoursePage/>}></Route>
                <Route path={Paths.communityPath} element={<CommunityPage/>}></Route>
                <Route path={Paths.loginPath} element={
                    <AuthProvider authConfig={authConfig}>
                        <UserInfo />
                    </AuthProvider>
                }>
                </Route>
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
