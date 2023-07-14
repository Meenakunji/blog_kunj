import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import KeyIcon from "@mui/icons-material/Key";
import TextField from "../../../common/TextField";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const LoginComponent = () => {
  const {
    register,
    formState: { errors, isValid },
    trigger,
    getValues,
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const [agree, setAgree] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  return (
    <>
      <div className="form-section">
        <div className="logo clearfix">
          <a href="login-2.html">
            <img
              src="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png"
              alt="logo"
            />
          </a>
        </div>
        <h3>Sign Into Your Account</h3>

        <form action="#" method="GET">
          <div className="form-group form-box">
            <TextField
              name={"email"}
              placeholder="Email Address"
              className="form-control"
              type="text"
              register={register}
              errors={errors}
            />
            <MailIcon />
          </div>
          <div className="form-group form-box">
            <TextField
              name={"password"}
              placeholder="Password"
              className="form-control"
              type={passwordShown ? "text" : "password"}
              register={register}
              errors={errors}
            />
            {passwordShown ? (
              <Box onClick={togglePassword}>
                <LockOpenIcon />
              </Box>
            ) : (
              <Box onClick={togglePassword}>
                <LockIcon />
              </Box>
            )}
            {/* <KeyIcon /> */}
          </div>
        </form>
        <div className="checkbox form-group form-box">
          <div className="form-check checkbox-theme">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="rememberMe"
              onClick={checkboxHandler}
              defaultChecked={agree}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              I agree to the <a href="#">terms of service</a>
            </label>
          </div>
        </div>
        <div className="form-group mb-0">
          <button
            type="submit"
            className="btn-md btn-theme w-100"
            style={{
              background: "hsl(161deg 87.73% 42.73%)",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
