// import { BrowserRouter ,Routes,Route,Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import "./index.css";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
  //function to show password
  const [showPswIcon, setShowPswIcon] = useState("eyeOpen");
  const pass1 = document.querySelector("#userPassword");
  const show_password = () => {
    if (pass1.type === "password") {
      pass1.type = "text";
      setShowPswIcon("eyeClose");
    } else {
      pass1.type = "password";
      setShowPswIcon("eyeOpen");
    }
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: yup.object({
        email: yup
          .string("Enter your email")
          .email("Enter valid email")
          .required("Email is required")
          .min(3, "Please enter more then 3 characters ")
          .max(32, "Please enter within 32 characters "),
        password: yup
          .string("Enter your Password") //.password()
          .required("Password is required")
          .min(6, "Please enter more then 6 characters ")
          .max(64, "Please enter within 64 characters "),
      }),
      onSubmit: (inputValues) => {
        console.log(inputValues);
        console.log(errors);
      },
    });
  // console.log(Formik)

  return (
    <div className="loginForm">
      <br />
      <br />
      <br />
      <br />
      <br />

      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Welcome Back to Login</div>
        <br />
        <div className="subtitle">Thank you for staying connected!</div>
        <div className="subtitle" id="inputError"></div>

        <div className="input-container ic2">
          <input
            className="input"
            id="email"
            type="email"
            placeholder=" "
            name="email"
            autoComplete="on"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="cut"></div>
          <label htmlFor="email" className="placeholder">
            Email
          </label>

          {/* <span className="errorSpan" style={{ color: "red" }}>{errors.email}</span> */}
          {touched.email && Boolean(errors.email) ? (
            <span className="errorSpan">{errors.email}</span>
          ) : null}
        </div>
        <br />
        <div className="input-container ic2">
          <input
            id="userPassword"
            className="input"
            type="password"
            placeholder=" "
            name="password"
            autoComplete="on"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="cut cut-short"></div>
          <label htmlFor="password" className="placeholder">
            Password
          </label>
          <button type="button" className="showPswBtn" onClick={show_password}>
            {showPswIcon === "eyeOpen" ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
          {touched.password && Boolean(errors.password) ? (
            <span className="errorSpan">{errors.password}</span>
          ) : null}
        </div>

        <br />
        <br />

        <div className="mainDiv">
          <button type="submint" className="submitBtn">
            SUBMIT
          </button>
        </div>
        <br />

        <div className="subtitle">by Shehzad</div>
        <br />
      </form>
    </div>
  );
};

export default Login;
