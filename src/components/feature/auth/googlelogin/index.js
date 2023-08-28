import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import loginfunc from "../../../../../components/Layout/util/login";
import fetcher from "../../../../dataProvider";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { setToken, setUserData } from "../../../../redux/slices/user";
import Snackbar from "../../../common/Snackbar";

export default function GoogleSignInButton({ handleModalClose }) {
  const [, setAccessToken] = useLocalStorage("accessToken", null);
  const dispatch = useDispatch();
  const router = useRouter();

  const [snackbar, setSnackbar] = useState({
    show: false,
    status: "",
    message: "",
  });

  const handleFailure = (error) => {
    console.log("Google sign-in failed:", error);
  };

  const { mutate: loginGoogle } = useMutation(
    (id_token) => fetcher.post(`v1/auth/login-google?id_token=${id_token}`),
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
          message: `${res?.data.user.name} login successfully.`,
        });
        handleModalClose(); // Close the login modal
        router.push(`/`);
      },
      onError: (error) => {
        console.log("Error:", error);
      },
    }
  );

  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleSuccess = (credentialResponse) => {
    loginGoogle(credentialResponse?.credential);
  };

  return (
    <>
      <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      {snackbar.show ? <Snackbar {...snackbar} onClose={setSnackbar} /> : null}
    </>
  );
}
