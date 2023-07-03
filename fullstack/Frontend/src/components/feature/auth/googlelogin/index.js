import React, { useEffect } from "react";
// import GoogleLogin from "react-google-login";
import axios from "axios";
import GoogleIcon from "@mui/icons-material/Google"; // Make sure the correct import is used
import useGoogleLogin from "../../../../hooks/useGoogleLogin";
import { GoogleLogin } from "@react-oauth/google";

export default function GoogleSignInButton(props) {
  const [_, loginGoogle] = useGoogleLogin();

  const handleFailure = (error) => {
    console.log("Google sign-in failed:", error);
  };

  const getUserProfile = (accessToken) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
      )
      .then((response) => {
        console.log("Google user profile:", response.data);
      })
      .catch((error) => {
        console.log("Failed to fetch user profile:", error);
      });
  };

  const handleSuccess = (response) => {
    console.log("Google sign-in success:", response);
    const { tokenId, accessToken } = response;
    debugger;
    loginGoogle({ id_token: tokenId });
    getUserProfile(accessToken);
  };

  const { text } = props;

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
    <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
  );
}
