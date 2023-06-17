import { makeStyles } from "@mui/styles";
import React from "react";
import GoogleLogin from "react-google-login";
import useGoogleLogin from "../../src/hooks/useGoogleLogin";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    fontSize: "16",
    lineHeight: "30px",
    textTransform: "capitalize",
    borderRadius: "8",
    boxShadow: "none",
    border: "1px solid",
    borderColor: "#F3938A",
    color: "#EA4335",
    padding: "8px 16px",
    outline: "none",
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12",
      lineHeight: "16px",
      padding: "8px",
    },
  },
  startIcon: {
    [theme.breakpoints.down("sm")]: {
      marginRight: 4,
    },
  },
}));

export default function GoogleLogin(props) {
  const [_, loginGoogle] = useGoogleLogin();
  const { userData } = useSelector((state) => state.user);

  const handleFailure = (e) => {
    console.log("failure");
    console.log(e);
  };

  const handleSuccess = (response) => {
    var referralCode;
    var id_token = response?.tokenId;
    let userInviteCode = typeof window !== "undefined" && localStorage?.getItem("inviteCode");

    let deviceId = typeof window !== "undefined" && localStorage.getItem("deviceID");
    let userId = userData?.id;

    if (userInviteCode && userInviteCode.length == 6) {
      referralCode = userInviteCode;
    }
    loginGoogle({ id_token, referralCode, deviceId, userId });
    props?.handleModalClose();
  };

  const { text, fullWidth, onClick } = props;
  const classes = useStyles(props);
  // console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
  return (
    <GoogleLogin
      clientId="601621850906-1nn03iov4d6uin8g5lpvgt2ujccmmipb.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      // cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <>
          {/* <Button
          varaint="contained"
          fullWidth={fullWidth || false}
          startIcon={<GoogleLogoG />}
          className={`${classes.root} ${props.className}`}
          classes={{ startIcon: classes.startIcon }}
          onClick={() => {
            renderProps.onClick();
          }}
          disabled={renderProps.disabled}
        >
          {text}
        </Button> */}
          <button
            type="button"
            style={{ border: "none", cursor: "pointer" }}
            onClick={() => {
              renderProps.onClick();
            }}
            disabled={renderProps.disabled}
            className={`${props?.className}`}
          >
            <img src="/images/home/new-google.svg" style={{ verticalAlign: "middle" }} alt="" />
            {text}
          </button>
        </>
      )}
    />
  );
}
