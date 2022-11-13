import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";

import FooterComponent from "./components/FooterComponent";
import RegistrationPage from "../src/pages/RegistrationPage";
import HomePage from "../src/pages/HomePage";
import LoginPage from "../src/pages/LoginPage";
import AboutPage from "../src/pages/AboutPage";
import ContactPage from "../src/pages/ContactPage";
import NavbarComponent from "./components/NavbarComponent";
import LogoutPage from "./pages/LogoutPage";
import ForgotPwd from "./pages/FogotPwdPage";

import { Route, Routes } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { authActions } from "./store/auth.redux";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import AllReviews from "./pages/Reviews/AllReviewsPage";

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token);

  useEffect(() => {
    async function autoLogin() {
      if (!token) return;
      try {
        const result = await axios.get("/users/me", {
          headers: { "x-user-token": token },
        });
        if (result.data) {
          dispatch(authActions.login(result.data));
        }

        console.log(result);
      } catch (e) {
        dispatch(authActions.logout());
        console.log(e);
      }
    }
    autoLogin();
  }, [token]);

  return (
    <Fragment>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/logout" exact component={<LogoutPage />} />
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="forgotpwd" element={<ForgotPwd />} />
      </Routes>
      <ToastContainer />

      <FooterComponent />
    </Fragment>
  );
};

export default App;
