import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import jwt_decode from "jwt-decode";
import React from "react";
import { useMutation } from "react-query";
import fetcher from "../../../../dataProvider";

export default function GoogleSignInButton(props) {
  const handleFailure = (error) => {
    console.log("Google sign-in failed:", error);
  };

  const { mutate: loginGoogle } = useMutation(
    (id_token) => fetcher.post(`v1/auth/login?id_token=${id_token}`),
    {
      onSuccess: (res) => {
        // const accessToken = res.tokens?.access?.token;
        // const refreshToken = res.tokens?.refresh?.token;
        console.log("accessToken", res);
        // Perform actions on success, such as setting tokens in local storage
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
    console.log(
      "Google sign-in success:",
      credentialResponse
      // credentialResponse?.credential
    );

    // const { credential } = credentialResponse;
    // var decoded = jwt_decode(credentialResponse?.credential);
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
      <button onClick={login}>
        <i class="fa-brands fa-google"></i>
        Continue with google
      </button>
      <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
    </>
  );
}
