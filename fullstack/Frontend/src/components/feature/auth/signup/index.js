import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../../common/TextField/index";

const SignupComponent = () => {
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

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div class="form-section">
      <div class="logo clearfix">
        <a href="login-20.html">
          <img src="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png" alt="logo" />
        </a>
      </div>
      <h3>Create An Cccount</h3>

      <form action="#" method="GET">
        <div class="form-group form-box">
          <TextField
            type="text"
            name={"fullname"}
            placeholder="Full name"
            className="form-control"
            // rules={{
            //   required: "Name is required",
            // }}
            register={register}
            errors={errors}
          />
          <AccountCircleIcon />
        </div>
        <div class="form-group form-box">
          <TextField
            name={"email"}
            placeholder="Email Address"
            className="form-control"
            type="text"
            register={register}
            errors={errors}
          />
          <EmailIcon />
        </div>
        <div class="form-group form-box">
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
        </div>
      </form>
    </div>
  );
};

export default SignupComponent;
