import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import fetcher from "../../../../dataProvider";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { setToken, setUserData } from "../../../../redux/slices/user";
import Snackbar from "../../../common/Snackbar";
import TextField from "../../../common/TextField/index";
import { API_BASE_URL } from "../../../../constant/appConstants";

const SignupComponent = ({ handleModalClose }) => {
  const {
    register,
    formState: { errors, isValid },
    trigger,
    getValues,
    reset,
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  const [snackbar, setSnackbar] = useState({
    show: false,
    status: "",
    message: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const [agree, setAgree] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [, setAccessToken] = useLocalStorage("accessToken", null);
  const [, setRefreshToken] = useLocalStorage("refreshToken", null);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  // user signup API
  const { mutate: userEmailSignup } = useMutation(
    (signupFormObj) => fetcher.post(`${API_BASE_URL}/v1/auth/user-signup`, signupFormObj),
    {
      onSuccess: (res) => {
        const accessToken = res?.data?.tokens?.access?.token;
        dispatch(setUserData(res?.data.user));
        loginfunc(
          res?.data.tokens?.access?.token,
          res?.data.user.name,
          res?.data.user.email,
          res?.data.user._id
        );
        const refreshToken = res?.data?.tokens?.refresh?.token;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        dispatch(
          setToken({
            accessToken: accessToken,
            refreshToken: refreshToken,
            isLoggedIn: true,
          })
        );
        setSnackbar({
          show: true,
          status: "success",
          message: `login successfully.`,
        });
        handleModalClose(); // Close the login modal
        router.push(`/`);
      },
      onError: (error) => {
        setSnackbar({
          show: true,
          status: "error",
          message: `login failed.`,
        });
        reset({
          name: "",
          email: "",
          password: "",
          role: "",
        });
        console.log("Error:", error);
      },
    }
  );

  const handleSubmitSignup = () => {
    if (!isValid) {
      trigger();
      alert("Please fill all required fields");
      return;
    } else {
      let signupFormObj = getValues();
      // append file path and url
      signupFormObj.role = "user";
      console.log("Signup Object ==>>", signupFormObj);
      const { email, password, role, name } = signupFormObj;

      if (
        !email ||
        !password ||
        !role ||
        !name ||
        email.trim() === "" ||
        password.trim() === "" ||
        role.trim() === "" ||
        name.trim() === ""
      ) {
        alert("Please enter all required fields");
        return;
      }
      userEmailSignup(signupFormObj);
    }
  };

  return (
    <div className="form-section">
      <div className="logo clearfix">
        <a href="login-20.html">
          <img src="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png" alt="logo" />
        </a>
      </div>
      <h3>Create An Cccount</h3>

      <form action="#" method="GET">
        <div className="form-group form-box">
          <TextField
            type="text"
            name={"name"}
            placeholder="Full name"
            className="form-control"
            register={register}
            errors={errors}
          />
          <AccountCircleIcon />
        </div>
        <div className="form-group form-box">
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
            Remember me
          </label>
          <a href="forgot-password-2.html">Forgot Password</a>
        </div>
      </div>
      <div className="form-group mb-0">
        <button
          type="submit"
          className="btn-md btn-theme w-100"
          disabled={!agree}
          style={{
            background: "hsl(161deg 87.73% 42.73%)",
          }}
          onClick={() => handleSubmitSignup()}
        >
          Sign Up
        </button>
      </div>
      {snackbar.show ? <Snackbar {...snackbar} onClose={setSnackbar} /> : null}
    </div>
  );
};

export default SignupComponent;
