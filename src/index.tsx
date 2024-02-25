import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContext, AuthProvider, TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce"
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes} from "react-router-dom";
import CommunityPage from "./components/CommunityPage";
import UserInfo from "./components/UserInfo";
import CoursePage from "./components/CoursePage";

const authConfig: TAuthConfig = {
  clientId: 'e5tzviowoxgwbbzk7pau',
  authorizationEndpoint: 'https://cowpte.com:8702/oauth2/authorize',
  tokenEndpoint: 'https://cowpte.com:8702/oauth2/token',
  redirectUri: 'http://localhost:3000/authorized',
  onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => window.confirm('Session expired. Refresh page to continue using the site?') && event.login(),
    autoLogin: true,

}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
            <Routes>
                <Route path="/"  element={<App/>}></Route>
                <Route path="/courses" element={<CoursePage/>}></Route>
                <Route path="/community" element={<CommunityPage/>}></Route>
                <Route path="/login" element={
                    <AuthProvider authConfig={authConfig}>
                        <UserInfo />
                    </AuthProvider>
                }>
                </Route>
            </Routes>
        </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
