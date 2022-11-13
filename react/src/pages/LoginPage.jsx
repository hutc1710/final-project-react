import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginSchema from "../validtions/login.validation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Joi from "joi-browser";
import axios from "axios";
import { authActions } from "../store/auth.redux";
import "../css/LoginPage.css";

const LoginPage = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const focusRef = useRef();

  //routes
  const navigate = useNavigate();

  // redux
  const dispacth = useDispatch();

  const handleEmailChange = (ev) => {
    setEmailInput(ev.target.value);
  };
  const handlePasswordChange = (ev) => {
    setPasswordInput(ev.target.value);
  };

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const handleSumbit = (ev) => {
    ev.preventDefault();
    const validateValue = Joi.validate(
      {
        email: emailInput,
        password: passwordInput,
      },
      loginSchema
    );

    const { error } = validateValue;
    if (error) {
      toast.error("Email and/ or password is incorrect");
    } else {
      // send http post request to the server with body(email, password)
      axios
        .post("/users/login", { email: emailInput, password: passwordInput })
        .then((response) => {
          console.log("response", response);
          //save token from server to local storage
          localStorage.setItem("tokenKey", response.data.token);
          dispacth(authActions.setToken(response.data.token));
          navigate("/");
        })
        .catch((err) => {
          console.log("err.request", err);
          if (err.response) {
            //error from server
            toast("Something went wrong");
          } else {
            toast("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="loginForm">
      <h1 className="loginHeader">Login Page</h1>
      <form onSubmit={handleSumbit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={emailInput}
            onChange={handleEmailChange}
            ref={focusRef}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={passwordInput}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSumbit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
