import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import loginfunc from "../../../../../components/Layout/util/login";
import { API_BASE_URL } from "../../../../constant/appConstants";
import fetcher from "../../../../dataProvider";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { setToken, setUserData } from "../../../../redux/slices/user";
import Snackbar from "../../../common/Snackbar";
import TextField from "../../../common/TextField";

const LoginComponent = ({ handleModalClose }) => {
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
  const dispatch = useDispatch();
  const router = useRouter();
  const [, setAccessToken] = useLocalStorage("accessToken", null);
  const [, setRefreshToken] = useLocalStorage("refreshToken", null);

  const [snackbar, setSnackbar] = useState({
    show: false,
    status: "",
    message: "",
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  // user Login API
  const { mutate: userEmailLogin } = useMutation(
    (LoginFormObj) => fetcher.post(`${API_BASE_URL}/v1/auth/login-email`, LoginFormObj),
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
          message: `login with email successfully.`,
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
        alert(error);
      },
    }
  );

  const handleLoginSubmit = () => {
    if (!isValid) {
      trigger();
      alert("Please fill all required fields");
      return;
    }

    const loginFormObj = getValues();
    const { email, password } = loginFormObj;

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    userEmailLogin(loginFormObj);
  };

  return (
    <>
      <Box className="form-section">
        <Box className="logo clearfix">
          <a href="login-2.html">
            <img src="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png" alt="logo" />
          </a>
        </Box>
        <h3>Sign Into Your Account</h3>

        <form action="#" method="GET">
          <Box className="form-group form-box">
            <TextField
              name={"email"}
              placeholder="Email Address"
              className="form-control"
              type="text"
              register={register}
              errors={errors}
            />
            <MailIcon />
          </Box>
          <Box className="form-group form-box">
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
          </Box>
        </form>
        <Box className="checkbox form-group form-box">
          <Box className="form-check checkbox-theme">
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
          </Box>
        </Box>
        <Box className="form-group mb-0">
          <button
            type="submit"
            className="btn-md btn-theme w-100"
            style={{
              background: "hsl(161deg 87.73% 42.73%)",
              border: "1px solid #000",
              borderRadius: "14px",
              height: "40px",
              marginTop: "33px",
            }}
            onClick={() => handleLoginSubmit()}
          >
            Login
          </button>
        </Box>
        {snackbar.show ? <Snackbar {...snackbar} onClose={setSnackbar} /> : null}
      </Box>
    </>
  );
};

export default LoginComponent;
