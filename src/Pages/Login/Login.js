import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";

import "./Login.css";
import SocialLogin from "../../Pages/SocialLogin/SocialLogin";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const from = location.state?.from?.pathName || "/";

  let errorElement;

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    await sendPasswordResetEmail(email);
    alert("Sent Email");
  };

  return (
    <div className="form-container">
      <div className="container w-100 mx-auto">
        <h2 className="text-black text-center mt-4">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="mb-3">
            <label
              htmlfor="exampleInputEmail1"
              className="form-label text-black"
            >
              Email address
            </label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlfor="exampleInputPassword1"
              className="form-label text-black"
            >
              Password
            </label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p className="text-white">Loading...</p>}
          <Button
            className="login-btn w-50 d-block mx-auto px-4 mb-3"
            type="submit"
          >
            Login
          </Button>
          <Link
            onClick={resetPassword}
            className="form-check-label text-black form-link"
            to="/register"
            htmlfor="reset password"
          >
            Forget Password?
          </Link>
          {errorElement}

          <div className="d-flex mt-3">
            <p className="text-black me-2">New to Transport?</p>

            <Link
              className="form-check-label text-black form-link"
              to="/signup"
              htmlfor="exampleCheck1"
            >
              Create an account
            </Link>
          </div>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default Login;
