import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import { useMutation } from "react-query";
import fetcher from "../../../../dataProvider";
import { setToken, setUserData } from "../../../../redux/slices/user";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import loginfunc from "../../../../../components/Layout/util/login";
import SnackBar from "../../../common/Snackbar";
import { useRouter } from "next/router";

export default function GoogleSignInButton(props) {
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
    (id_token) => fetcher.post(`v1/auth/login?id_token=${id_token}`),
    {
      onSuccess: (res) => {
        const accessToken = res.data.token;
        dispatch(setUserData(res?.data.user));
        loginfunc(
          res?.data.token,
          res?.data.user.name,
          res?.data.user.email,
          res?.data.user._id
        );
        // const refreshToken = res.tokens?.refresh?.token;
        setAccessToken(accessToken);
        dispatch(
          setToken({
            accessToken: accessToken,
            //  refreshToken: refreshToken,
            isLoggedIn: true,
          })
        );
        setSnackbar({
          show: true,
          status: "success",
          message: "Blog New Entry created successfully.",
        });

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
    console.log("decode======>>>>", credentialResponse?.credential);
    loginGoogle(credentialResponse?.credential);
  };

  return (
    // <GoogleLogin
    //   // clientId="601621850906-1nn03iov4d6uin8g5lpvgt2ujccmmipb.apps.googleusercontent.com"
    //   clientId="426734307285-dlk38v03lrrbl6moh2lcja09gmsn9uip.apps.googleusercontent.com"
    //   buttonText={text}
    //   onSuccess={handleSuccess}
    //   onFailure={handleFailure}
    //   // cookiePolicy={"single_host_origin"}
    //   render={(renderProps) => (
    //     <button
    //       type="button"
    //       style={{ border: "none", cursor: "pointer" }}
    //       onClick={renderProps.onClick}
    //       disabled={renderProps.disabled}
    //       className="btn btn-link btn-floating mx-1"
    //     >
    //       <GoogleIcon />
    //     </button>
    //   )}
    // />
    <>
      {/* <button onClick={login}>
        <i class="fa-brands fa-google"></i>
        Continue with google
      </button> */}
      <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
    </>
  );
}
